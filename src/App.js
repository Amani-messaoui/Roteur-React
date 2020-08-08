import React from 'react';
import Navbars from './component/navbar';
import Home from './component/Home';
import Category from './component/category';
import Product from './component/product';
import Admin from './component/admin area';
import Login, { fakeAuth } from "./component/login";
import {BrowserRouter as Router, Switch ,Route,Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbars/>
      <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/category" component={Category} />
     <Route path='/product' component = {Product} />
     <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
     <Route path="/login" component={Login} />

     </Switch>

    </div>
    </Router>
  )}
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) =>
            fakeAuth.isAuthenticated === true ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
          }
        />
  );
}

export default App;
