import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BackeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  // function addToCart(itemName){
  //   setCart(cart => [...cart, itemName]);
  // }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <BackeryItem name={item.name} description={item.description} price={item.price} image={item.image} cart={cart} setCart={setCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        {cart.map((cartItem) => (
          <p>{cartItem}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
