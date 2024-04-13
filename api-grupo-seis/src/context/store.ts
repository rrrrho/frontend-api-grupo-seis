import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
       cart: cartReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store;