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
    return (
        <>
            <section className="detailPage">
                <article className="detail">
                    <div className="detailImage">
                        <img src="https://unavatar.io/midudev/" alt="" />
                    </div>
                    <section className="contentDataDetail">
                        <div className="detailData">
                            <h3>Nombre del usuario</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat architecto quasi vel labore odio cum, possimus eius ut minus iste hic tempora veritatis. Adipisci earum eaque voluptatum dolor, quidem accusamus.</p>
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


{/* <Link to={`http://localhost:3000/products/${id}/edit`} className="linksProduct">Edit</Link>
<Link to={`http://localhost:3000/products/${id}/delete`} className="linksProduct">Delete</Link>
<Link to={`http://localhost:3000/products/detail/${id}`} className="linksProduct">Detail webs</Link> */}