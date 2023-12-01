import React from "react";
import Title from "../../Component/Title";
import ContentNumber from "../../Component/ContentNumber";
import Card from "../../Component/Card";
import LastCard from "../../Component/LastCard";
function Products() {
  return (
    <>
    <section className="contentPage">
        <Title>
          Total de registros
        </Title>
        <ContentNumber ApiUrl={"http://localhost:3000/api/totalProducts"}/>
        <Title>
          Ultimo registro
        </Title>
        <LastCard apiUrl={"http://localhost:3000/api/lastProduct"} />
        <Title>
          Productos
        </Title>
        <Card apiUrl={"http://localhost:3000/api/allProducts"} />
    </section>
    </>
  );
}

export default Products;