import React, { useEffect, useState } from "react";
function ContentNumber({ApiUrl}) {
  const [registros, setRegistros] = useState([]);
  useEffect(()=>{
    fetch(ApiUrl,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data)=>{
      setRegistros(data.data)
    })
  },[ApiUrl])
  return (
    <>
      {console.log(registros)}
        <span className="ContentNumber">{registros}</span>
    </>
  );
}

export default ContentNumber;
