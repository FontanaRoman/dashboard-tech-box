import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
function DetailProduct() {
    const { id } = useParams();
    const url = `http://localhost:3000/api/product/${id}`;
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(({data}) => setProduct(data))
    }, [url])
    return (
        <>
            <section className="detailPage">
                <article className="detail">
                    <div className="detailImage">
                        <img src={`http://localhost:3000/img/product/${product.image}`} alt="" />
                    </div>
                    <section className="contentDataDetail">
                        <div className="detailData">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="detailButton">
                            <Link to={`http://localhost:3000/products/${id}/edit`} className="linksProduct">Edit</Link>
                            <Link to={`http://localhost:3000/products/${id}/delete`} className="linksProduct">Delete</Link>
                            <Link to={`http://localhost:3000/products/detail/${id}`} className="linksProduct">Detail webs</Link>
                        </div>
                    </section>
                </article>
            </section>
        </>
    );
}

export default DetailProduct;
