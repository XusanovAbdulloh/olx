import React from 'react';
import Container from "../../utils/Container"
import { Link } from "react-router-dom";
import {FiHeart} from "react-icons/fi";
import "./MainProducts.scss"
import UseFetchData from '../../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const MainProducts = () => {
    const { t } = useTranslation();
    const [data, isLoading] = UseFetchData("/products?offset=0&limit=20");

    function trimDescription(str) {
        return str.split(" ").slice(0, 5).join(" ") + "..."
    }

    return (
        <section className='main-products'>
            <h2 className='main-products__title'>{t("main-products_h2")}</h2>
            <Container>
                <div className="main-product-wrapper">
                    { !isLoading ?
                        data.map(product =>
                            <div className='product-item' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img className='product-item__image' src={product.images[0]} alt="" />
                                    <h3>{product.title}</h3>
                                </Link>
                                <div className='product-info'>
                                    <div>
                                        <p>{trimDescription(product.description)}</p>
                                        <strong>{product.price}$</strong>
                                    </div>
                                    <FiHeart />
                                </div>
                            </div>
                        )
                        : <h1 className='loading'>Loading...</h1>
                    }
                </div>
            </Container>
        </section>
    );
}

export default MainProducts;
