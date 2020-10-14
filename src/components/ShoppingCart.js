import React from "react";
import ListOfProducts from "../data/ListOfProducts";
import ShowCart from "./ShowCart";
import ShowCartPagination from "./ShowListPagination";

class ShoppingCart extends React.Component {
  state = {
    listOfProducts: ListOfProducts,
    cart: [],
    display: true,
  };

  addProductToCart = (productToBeAdded) => {
    const NewProduct = {
      product: productToBeAdded,
      cantidad: 1,
    };

    let existe;

    if (this.state.cart.length === 0) {
      this.setState({ cart: [...this.state.cart, NewProduct] });
    } else {
      this.state.cart.map((item) => {
        if (item.product.id === productToBeAdded.id) {
          const NewQuantity = item.cantidad + 1;
          const position = this.state.cart.indexOf(item);
          const copyCart = this.state.cart;
          copyCart[position].cantidad = NewQuantity;
          existe = true;
          return this.setState({ cart: copyCart });
        } else return null;
      });
    }

    if (!existe) {
      return this.setState({ cart: [...this.state.cart, NewProduct] });
    }
  };

  deleteProductFromCart = (product) => {
    const position = this.state.cart.indexOf(product);
    let copyCart = this.state.cart;
    copyCart[position].cantidad = copyCart[position].cantidad - 1;
    this.setState({ cart: copyCart });
  };

  render() {
    return (
      <div className="page">
        {this.state.display ? (
          <ShowCartPagination
            listOfProducts={this.state.listOfProducts}
            addProductToCart={this.addProductToCart}
            key={Math.random()}
          />
        ) : null}

        {/* <ShowCartPagination listOfProducts = {this.state.listOfProducts} addProductToCart = {this.addProductToCart} key={Math.random()}/> */}

        <ShowCart
          cart={this.state.cart}
          key={Math.random()}
          deleteProductFromCart={this.deleteProductFromCart}
          addProductToCart={this.addProductToCart}
        />
      </div>
    );
  }
}

export default ShoppingCart;
