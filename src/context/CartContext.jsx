import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) return JSON.parse(savedCart);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    if (!product.inStock) {
      return;
    }

    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct && existingProduct.quantity >= product.stock) {
      return;
    }

    if (!existingProduct) {
      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantity: 1,
        },
      ]);
    } else {
      const newCart = cart.map((item) => {
        if (item.product.id === existingProduct.product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  }

  function increaseQuantity(id) {
    const existingProduct = cart.find((item) => item.product.id === id);

    if (!existingProduct || !existingProduct.product.inStock) {
      return;
    }

    if (existingProduct.quantity >= existingProduct.product.stock) {
      return;
    }

    const increaseCart = cart.map((item) => {
      if (item.product.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCart(increaseCart);
  }

  function decreaseQuantity(id) {
    const existingProduct = cart.find((item) => item.product.id === id);
    if (existingProduct && existingProduct.quantity > 1) {
      const decreaseCart = cart.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(decreaseCart);
    } else {
      const filterCart = cart.filter((item) => {
        return item.product.id !== id;
      });
      setCart(filterCart);
    }
  }

  function removeFromCart(id) {
    const removeCart = cart.filter((item) => {
      return item.product.id !== id;
    });
    setCart(removeCart);
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((acc, cartItem) => {
    return acc + cartItem.product.price * cartItem.quantity;
  }, 0);

  const totalItems = cart.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
