import React, { useState } from 'react';
import {FiSearch} from "react-icons/fi";
import  Container  from "../../utils/Container";
import instance from "../../api/instanse";
import { Link } from "react-router-dom";
import "./Search.scss";
import { useTranslation } from 'react-i18next';


const Search = () => {
    const { t } = useTranslation();
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const giveSearchSuggestions = (e) => {
        setSearchValue(e.target.value);
        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
         .then(response => setSearchResult(response.data))
         .catch(err => console.log(err));
    }

    const giveMoreResults = (e) => {
      e.preventDefault();
      window.location.pathname = `/search/${searchValue}`;
    }

    console.log(searchResult);
    return (
        <section className='search'>
            <Container>
                <form onSubmit={giveMoreResults}>
                <div className="search__wrapper">
                    <div className='search-elements'>
                        <FiSearch/>
                        <input onChange={giveSearchSuggestions} className='search__input' type="text" placeholder={t("search_placeholder")} />
                        {searchResult?.length > 0  && searchValue ? <div className='search-sugestions'>
                         {
                            searchResult.map(searchItem =>
                                <Link className='search-item__link' to={`/product/${searchItem.id}`}>
                                  <p>{searchItem.title}</p>
                                </Link>
                                )
                         }
                        </div> : <></>}
                    </div>
                    <button className='search__btn'><FiSearch/> {t("search_form_btn")}</button>
                </div>
                </form>
            </Container>
        </section>
    );
}

export default Search;
