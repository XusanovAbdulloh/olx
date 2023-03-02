import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../Swiper/Swuper.scss";
import UseFetchData from '../../../hooks/useFetchData';
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import Container from "../../../utils/Container";


const Swipers = () => {
    const [data, isLoading] = UseFetchData("/categories/5/products?offset=0&limit=10");
    console.log(data);
    function trimDescription(str) {
        return str.split(" ").slice(0, 5).join(" ") + "..."
    }
    return (
        <Container>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {!isLoading ?
                    data.map(product =>
                        <SwiperSlide>
                            <div className='swiper-div'>
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
                        </SwiperSlide>
                    )
                    : <h1 className='loading'>Loading...</h1>}
            </Swiper>
        </Container>
    );
}

export default Swipers;
