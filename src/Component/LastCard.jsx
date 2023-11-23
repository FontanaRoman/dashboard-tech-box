import React, { useEffect, useState } from "react";
function LastCard({apiUrl}) {

    const [LastCard, setLastCard] = useState({
        id : "",
        name: "",
        description: "",
        image: "",
        stock: "",
        discount: "",
        category_id: "",
        state: "",
        price: "",
        brand_id: "",
      });
      
      useEffect(()=>{
        fetch(apiUrl,{
            method : "GET",
            headers: {
                "Content-Type": "application/json",
              },

        })
            .then(inforLastCard=>{
                inforLastCard.json()
                    .then(lastCard=>{
                        setLastCard(lastCard.data)
                    })
            })
      },[])
      let contentP = "";
      if (apiUrl == "http://localhost:3000/api/user/lastUser") {
        contentP = LastCard.email
      }else{
        contentP = LastCard.stock
      }
  return (
    <>
        <section className="ContentCard">
            <article className="Card">
                <div className="CardImage">
                    <img src={apiUrl === "http://localhost:3000/api/user/lastUser" ? `http://localhost:3000/img/users/${LastCard.image}` : `http://localhost:3000/img/product/${LastCard.image}`} alt="" />
                </div>
                <div className="CardData">
                    <p>
                        {LastCard.name}
                    </p>
                    <div>
                        <p>
                        {contentP}
                        </p>
                    </div>
                </div>
            </article>
        </section>
    </>
  );
}

export default LastCard;
