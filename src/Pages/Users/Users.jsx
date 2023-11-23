import React from "react";
import Title from "../../Component/Title";
import ContentNumber from "../../Component/ContentNumber";
import Card from "../../Component/Card";
import LastCard from "../../Component/LastCard";
function  Users() {
  return (
    <>
    <section className="contentPage">
        <Title>
          Total de registros
        </Title>
        <ContentNumber />
        <Title>
          Ultimo registro
        </Title>
        <LastCard apiUrl={"http://localhost:3000/api/user/lastUser"} />
        <Title>
          Usuarios
        </Title>
        <Card apiUrl={"http://localhost:3000/api/user/allUser"} />
        </section>
    </>
  );
}

export default Users;
