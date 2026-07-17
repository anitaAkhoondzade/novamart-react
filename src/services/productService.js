// import api from "./api";

// export const getProducts = async () => {
//   const response = await api.get("/products");

//   return response.data;
// };

import products from "../mocks/products";

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return products;
};