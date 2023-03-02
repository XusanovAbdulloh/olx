import React from 'react';
import { useParams,Link } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import Container from "../../utils/Container"
import "./Product.scss";
import { useTranslation } from 'react-i18next';
import Swiper from './Swiper/Swiper';

const Product = () => {
    const { t } = useTranslation();
    const productIdData  = useParams();
    const [data] = UseFetchData(`/products/${productIdData.id}`);   
    console.log(data)
    return (
        <section className='single-product'>
            <Container>
            <div className='single-product__wrapper'>
             <Link to="/" className='link'>
                 {t("product_link")}
             </Link>
            <img width={500} height={300} className='product-img' src={data.images?.at(0)} alt="" />
            <div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <strong>{data.price}</strong>
                <button className='link link--dark'>{t("product_btn")}</button>
            </div>
            </div>
            </Container>
            <Swiper/>
        </section>
    );
}

export default Product;
