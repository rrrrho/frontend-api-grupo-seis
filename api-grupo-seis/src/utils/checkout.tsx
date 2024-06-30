import { calculateDiscount } from "./card";

export const calcTotalCheckout = (cartState, discount) => {
  let total = 0;

  cartState.items?.map((item) => {
    total +=
      calculateDiscount(item.product.price, item.product.discount) *
      item.quantity;
  });
  let shipping = 0;
  if (total < 50000) {
    shipping =
      typeof cartState.shipping.option !== "undefined"
        ? cartState.shipping.option.price
        : 0;
  }

  total += shipping;
  total = calculateDiscount(total, discount);
  return total;
};

export const calcSubtotalCheckout = (cartState) => {
  let subtotal = 0;

  cartState.items?.map((item) => {
    subtotal += item.product.price * item.quantity;
  });

  return subtotal;
};

export const toSnakeCase = (obj: any): any => {
  return Object.keys(obj).reduce((acc, key) => {
    const modifiedKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    acc[modifiedKey] = obj[key];
    return acc;
  }, {});
};

export const toCamelCase = (obj: any): any => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.replace(/(_\w)/g, (k) => k[1].toUpperCase())] = obj[key];
    return acc;
  }, {});
};
