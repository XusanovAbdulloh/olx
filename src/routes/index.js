import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from "./auth/Auth";
import Home from './home/Home';
import Category from './category/Category';
import Product from './product/Product';
import Search from './search/Search';

const Routes = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
          <Route path="/auth">
           <Auth/>
        </Route>
        <Route path="/category/:id">
          <Category/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/search/:productName">
          <Search/>
        </Route>
      </Switch>
    );
}

export default Routes;
