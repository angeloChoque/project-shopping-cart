import React, { createContext, useContext, useState, useEffect } from "react";
import { getProductsRequest } from "../api/products";

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
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

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

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    openCart();
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Context.Provider
      value={{
        product,
        cartItems,
        cartOpen,
        openCart,
        closeCart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ShoppingContext;
