import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
function DetailUser() {
    const { id } = useParams();
    const url = `http://localhost:3000/api/user/${id}`;
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [url])
    const data = user.data;

    if (!data) {
        return <p>Cargando...</p>; // o cualquier otro indicador de carga
    }

    return (
        <>
            <section className="detailPage">
                <article className="detail">
                    <div className="detailImage">
                        <img src={`http://localhost:3000/img/users/${data.image}`} alt="" />
                    </div>
                    <section className="contentDataDetail">
                        <div className="detailData">
                            <h3>{data.name}</h3>
                            <h3>{data.lastname}</h3>
                        </div>
                        <div className="detailButton">
                            
                        </div>
                    </section>
                </article>
            </section>
        </>
    );
}

export default DetailUser;