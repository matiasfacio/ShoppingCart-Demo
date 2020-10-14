import React from "react";
import cartLogo from "../data/Cart-white.png";
import "../styles/Cart.css";
import "../script.js";

/* this function lists the items in the Car */

function ShowCart(props) {
  const listing =
    props.cart.length !== 0
      ? props.cart.map((item) => {
          if (item.cantidad !== 0) {
            return (
              <div key={item.product.id} className="showCart">
                <div className="showCart-id">ID: {item.product.id}</div>
                <div className="showCart-name">Item: {item.product.name}</div>
                <div className="showCart-quantity">
                  Quantity: {item.cantidad}
                </div>
                <div className="showCart-price">
                  Price per Unit: {item.product.price.toFixed(2)} €
                </div>
                <div className="buttonCart">
                  <div className="showCart-del">
                    <button
                      id={item.product.id}
                      onClick={() => props.deleteProductFromCart(item)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="showCart-add">
                    <button
                      id={item.product.id}
                      onClick={() => props.addProductToCart(item.product)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          } else return null;
        })
      : null;

  let totalCart = 0;
  let cantidadItems = 0;
  props.cart.map((item) => {
    return (
      (totalCart = totalCart + item.product.price * item.cantidad),
      (cantidadItems = cantidadItems + item.cantidad)
    );
  });

  let vat = (totalCart / 1.19).toFixed(2);

  return (
    <div className="container-cart">
      <div
        key={Math.floor(Math.random() * 100000)}
        className="showCartContainer"
      >
        <div id="cartLogo">
          <img
            src={cartLogo}
            alt="Cart"
            width="40px"
            height="40px"
            id="logoCart"
          ></img>
          <div className="cantidadItemsCart">{cantidadItems}</div>
        </div>

        <div className="titleCart">
          <hr />
          <div className="yourShoppingCart">
            <h2>Your shopping cart: </h2>
          </div>
          <hr />
        </div>

        {listing}

        <div className="finalNumbersCart">
          <div className="VAT">MwSt (19%): {vat} €</div>
          <div className="TotalCart">
            <h2>Total: {totalCart.toFixed(2)} €</h2>
          </div>
        </div>

        <div>
          <button id="checkOutButton">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
