import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

interface CartItem {
    product: Product,
    quantity: number
}

interface Props {
    items: CartItem[],
    total: number,
    shipping: ShippingProps
}

interface PropsFetchProduct {
    id: number,
    orderQty: number
}

interface ShippingProps {
    postalCode: number
    option: ShippingOption
}

interface ShippingOption {
    id: number,
    price: number
}

const initialState: Props = {
    // @ts-ignore 
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    // @ts-ignore 
    shipping: localStorage.getItem('shipping') ? JSON.parse(localStorage.getItem('shipping')) : { postalCode: 0, option: { id: 0, price: 0 } },
    total: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateItem: (state,action: PayloadAction<PropsFetchProduct>) => {
            state.items.map((item) => {
              if(item.product.id === action.payload.id) {
                item.quantity = action.payload.orderQty
              }
            })
        },

        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },

        deleteItem: (state,action: PayloadAction<{id: number}>) => {  
            state.items = state.items.filter((item) => item.product.id !== action.payload.id)
        },

        setShippingData: (state,action: PayloadAction<ShippingProps>) => {      
            state.shipping = action.payload;
        },

        setShippingOption: (state,action: PayloadAction<ShippingOption>) => {      
            state.shipping.option = action.payload;
        },
    }
})

export const { updateItem, addItem, deleteItem, setShippingData, setShippingOption } = cartSlice.actions;
export default cartSlice.reducer;