import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };
  return (
    <div className="app">
      <header>
        <h1>Pizza Hut Clone</h1>
      </header>
      <main>
        <Menu addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </div>
  );
}
