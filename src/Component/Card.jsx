import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({apiUrl}) {
  const [element, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Ocurrio un error:", error);
      });
  }, [apiUrl]);
  return (
    <>
        {element.map((element) => (
          <article key={element.id} className="Card">
            <div className="CardImage">
              <img src={apiUrl === "http://localhost:3000/api/user/allUser" ? `http://localhost:3000/img/users/${element.image}` : `http://localhost:3000/img/product/${element.image}`} alt="" />
            </div>
            <div className="CardData">
              <p>{element.name}</p>
              <div>
                <p>
                {apiUrl === "http://localhost:3000/api/user/allUser" ? element.email : `cantidad ${element.stock}`}
                </p>
              </div>
              <Link className="ButtonProduct" to={apiUrl === "http://localhost:3000/api/user/allUser" ? `/DetailUser/${element.id}` : `/DetailProduct/${element.id}`}>Ver Detalles {element.id}</Link>
            </div>
          </article>
        ))}
     </>
  );
}

export default Card;
