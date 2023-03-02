import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import SearchCom from "../../components/search/Search"
import "./Search.scss";
import instance from '../../api/instanse';

const Search = () => {
    const [lowerSelect, setLowerSelect] = useState("");
    const [upperSelect, setUpperSelect] = useState("");
    const [filterResult, setFilterResult] = useState([]);
    const productInfo = useParams();
    var data = UseFetchData(`/products/?title=${productInfo.productName}`)
    console.log(data);

    const price = [1, 10, 100, 1000, 10000, 100000];

    useEffect(() => {
        if (lowerSelect > upperSelect) {
            setLowerSelect(upperSelect);
            setUpperSelect(lowerSelect)
        }

        instance.get(`/products/?title=${productInfo.productName}&price_min=${lowerSelect}&price_max=${upperSelect}`)
            .then(response => setFilterResult(response.data))
    }, [lowerSelect, upperSelect])
    if (filterResult.length > 0) {
        data = filterResult
    }

    return (
        <section className='search-results'>
            <SearchCom />

            <Container>
                <div className='search-filters'>
                    <select value={lowerSelect} onChange={(e) => setLowerSelect(e.target.value)}>
                        {
                            price.map(price =>
                                <option value={`${price}`}>{price}</option>
                            )
                        }
                    </select>
                    <select value={upperSelect} onChange={(e) => setUpperSelect(e.target.value)}>
                        {
                            price.map(price =>
                                <option value={`${price}`}>{price}</option>
                            )
                        }
                    </select>
                </div>
                <div className="search-results__wrapper">
                    {
                        data.map(searchItem =>

                            <div className='search-item' key={searchItem.id}>
                                <Link to={`/product/${searchItem.id}`}>
                                    <img width={300} src={searchItem.images?.at(0)} alt="" />
                                </Link>
                                <div className='search-item__text'>
                                    <h2>{searchItem.title}</h2>
                                    <p>{searchItem.description}</p>
                                    <strong>${searchItem.price}</strong>
                                </div>
                            </div>

                        )
                    }
                </div>
            </Container>
        </section>
    );
}

export default Search;
