import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import Container from "../../utils/Container";
import { Link } from 'react-router-dom';
import {FiHeart} from "react-icons/fi";
import "./Category.scss"
const Category = () => {
    function trimDescription(str) {
        return str.split(" ").slice(0, 5).join(" ") + "..."
    }
    const categoryIdData  = useParams();
    const [data, isLoading] = UseFetchData(`/categories/${categoryIdData.id}/products`);
    console.log(data);
    return (
        <Container>
            <div className='category-box'>
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
    );
}

export default Category;
