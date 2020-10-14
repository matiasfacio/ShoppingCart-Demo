import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/List.css";

function ShowCartPagination(props) {
  const [paginaActual, setPagina] = useState(1);
  const paginaActualFix = useRef(paginaActual);

  const rows = 3;
  const amountOfProducts = props.listOfProducts.length;
  const amountOfPages = Math.ceil(amountOfProducts / rows);
  const firstItem = (paginaActual - 1) * rows;
  const lastItem = firstItem + rows;
  const page = returnSlice(props, firstItem, lastItem, paginaActual);

  const stylesButtonYes = {
    display: "block",
    backgroundColor: "transparent",
    color: "rgb(245, 204, 94)",
    marginRight: "10px",
    minWidth: "auto",
    padding: "0px 5px",
    fontSize: "1rem",
    border: "none",
  };
  const stylesButtonNo = {
    display: "none",
  };

  useEffect(() => {
    console.log(paginaActualFix, " ", paginaActual);
    paginaActualFix.current = paginaActual;
  }, [paginaActual]);

  function returnSlice(props, firstItem, lastItem, pageNumber) {
    const elementosPagina = {
      slice: [],
    };

    elementosPagina.slice = props.listOfProducts
      .slice(firstItem, lastItem)
      .map((product) => {
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

    return elementosPagina;
  }

  return (
    <div>
      {page.slice}
      <div className="buttonPagination">
        <span style={{ color: "white" }}> Seite: </span>
        <button
          style={paginaActual === 1 ? stylesButtonNo : stylesButtonYes}
          onClick={() => {
            setPagina(paginaActual - 1);
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          {"<<"}
        </button>
        <button style={stylesButtonYes}>{paginaActual}</button>
        <button
          style={
            paginaActual === amountOfPages ? stylesButtonNo : stylesButtonYes
          }
          onClick={() => {
            setPagina(paginaActual + 1);
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          {">>"}
        </button>
      </div>
    </div>
  );
}

// function returnSlice(props, firstItem, lastItem, pageNumber) {

//         const elementosPagina = {
//             slice: [],
//         }

//         elementosPagina.slice = props.listOfProducts.slice(firstItem, lastItem).map(product => {
//             return (
//                 <div key = {product.id} className = "element-container">
//                 <div>
//                     <img className = "picList" src={product.imgUrl} alt = {product.name} width = "100px" height = "100px"></img>
//                 </div>

//                 <div className = "element-text">
//                     <div>
//                         <div className = "product-name-list">{product.name}</div>
//                     </div>
//                     <div>
//                         Description: {product.description}
//                     </div>
//                     <div>
//                         Price: € {product.price.toFixed(2)}
//                         <div id = "product-id">ID: {product.id}</div>
//                     </div>
//                 </div>

//                 <button onClick = {() => props.addProductToCart(product)}>Add to Cart</button>

//             </div>
//             )
//         })

//         return elementosPagina
// }

export default ShowCartPagination;
