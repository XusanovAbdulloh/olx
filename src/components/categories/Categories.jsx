import React from 'react';
import Container from '../../utils/Container';
import "./Categories.scss";
import { Link } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import { useTranslation } from 'react-i18next';


const Categories = () => {
    const { t } = useTranslation();
    const [data, isLoading] = UseFetchData("/categories");

    return (
        <section className='categories'>
        <h2 className='category-title'>{t("categories_h2")}</h2>
                <Container>
                {isLoading ? <h1>Loading...</h1> :
                    <div className='categories-wrapper'>
                    {!isLoading ?
                        data.map(category =>
                                <Link to={`category/${category.id}`} className='category-item' key={category.id}>
                                <div className='category__image-wrapper'>
                                <img className='category-image' src={category.image} alt="" />
                                </div>
                                <h3>{category.name}</h3>
                            </Link>
                            )
                            : <h1 className='loading'>Loading.....</h1>
                    }
                </div>}
            </Container>
        </section>
    );
}

export default Categories;
