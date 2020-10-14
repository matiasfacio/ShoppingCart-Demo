import React from "react";
import "../styles/List.css";

function ShowList(props) {
  const displayProducts = props.listOfProducts.map((product) => {
    return (
      <div key={product.id} className="element-container">
        <div>
          <img
            className="picList"
            src={product.imgUrl}
            alt={product.name}
            width="100px"
            height="100px"
          ></img>
        </div>

        <div className="element-text">
          <div>
            <div className="product-name-list">{product.name}</div>
          </div>
          <div>Description: {product.description}</div>
          <div>
            Price: € {product.price.toFixed(2)}
            <div id="product-id">ID: {product.id}</div>
          </div>
        </div>

        <button onClick={() => props.addProductToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div className="grid-container-list">
      {/* <div className = "title-list">
                    <h3>Our Kitty Products</h3>
                </div> */}
      {displayProducts}
    </div>
  );
}

export default ShowList;
