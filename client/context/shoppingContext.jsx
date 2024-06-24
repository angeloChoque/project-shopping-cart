import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { getProductsRequest } from "../src/api/products";

const Context = createContext();

export const useShoppingContext = () => {
  const context = useContext(Context);
  return context;
};

const imageUrls = {
  Smartphone: [
    "carousel3_responsive.jpg",
    "carousel1_responsive.webp",
    "img_phone.jpg",
    "google_pixel.webp",
  ],
  Television: ["tv_1.png", "tv_2.jpg", "tv_3.png"],
};

const ShoppingContext = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductsRequest()
      .then((res) => {
        const updatedProducts = res.data.map((product, index) => {
          let imageUrl = "";
          if (imageUrls[product.TypeProduct]) {
            imageUrl =
              imageUrls[product.TypeProduct][
                index % imageUrls[product.TypeProduct].length
              ];
          }
          return {
            ...product,
            imageUrl,
          };
        });
        setProduct(updatedProducts);
      })
      .catch((err) => console.error(err));
  }, []);

  return <Context.Provider value={{ product }}>{children}</Context.Provider>;
};

export default ShoppingContext;
