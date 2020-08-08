import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
const Category = ({match}) => {
  
    return (
        <div className="box">
            
     
      <p className="link">Link based</p>
      <Nav className="ul" vertical>
        <NavLink className="li" href={`${match.url}/shoes`}>shoes</NavLink> 
        <NavLink className="li" href={`${match.url}/Boots`}>Boots</NavLink>
        <NavLink className="li" href={`${match.url}/Footwear`}>Footwear</NavLink> 
      </Nav>
      <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
        </div>
    );
};

export default Category;