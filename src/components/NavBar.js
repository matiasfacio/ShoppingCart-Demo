import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

function NavBar() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <ul className="NavBar">
        <li key="home">Home</li>
        <li key="store" onClick={() => setShowList(!showList)}>
          Store
        </li>
        <li key="aboutUs">About Us</li>
        <li key="contact">Contact</li>
      </ul>

      <div>{showList ? <ShoppingCart /> : null}</div>
    </div>
  );
}

export default NavBar;
