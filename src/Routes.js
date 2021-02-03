import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SingIn/SingIn';
import AuthContextProvider from './contexts/AuthContext';
import ProductsContextProvider from './contexts/ProductsContext';
import ProductDetails from './containers/Products/ProductDetails'
import Profile from './containers/Profile/Profile';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
               <Header/>
                <Switch>
                    <AuthContextProvider>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/profile" component={Profile} />
                    </AuthContextProvider>
                </Switch>
                
                <Switch>
                    <ProductsContextProvider>
                         <Route exact path="/" component={Home}/>
                         <Route exact path="/details/:id" component={ProductDetails}/>
                        
                    </ProductsContextProvider>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;