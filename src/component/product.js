import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProductItem from './productItem';
const Product = ({match}) => {
    const productData = [
        {
          id: 1,
          name: 'visvim',
          image:"https://cache.mrporter.com/variants/images/14097096491378429/fr/w2000_q80.jpg",
          discription:"Virgil Burnished-Leather Boots",
          Price:"99,90 €",
          color:"Brown",
          status: 'Available'
        
        },
        {
          id: 2,
          name: 'Nike ',
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvoMGs5UDk9UL6hPaFvxtt7af-gCzeRQkfMSiy9UU-2w&usqp=CAU&ec=45688575",
          discription: "Dunk Low Leather Sneakers",
          Price:"40,15 €",
          color:"Orange",
          status: 'Out of Stock'
        
        },
        {
          id: 3,
          name: 'Gucci ',
          image:"https://www.thefashionisto.com/wp-content/uploads/2018/10/Gucci-Flashtrek-Leather-Suede-Rubber-and-Mesh-Trimmed-Nylon-Sneakers-Blue-1.jpg",
          discription: "Flashtrek Rubber, Leather, Mesh and Suede Sneakers",
          Price:"175,70 €",
          color:"Blue",
          status: 'Available'
        },
        {
          id: 4,
          name: 'New Balance',
          image:"https://cache.mrporter.com/variants/images/8008779906137889/fr/w2000_q80.jpg",
          discription: "827 Webbing-Trimmed Faux Leather and Mesh Sneakers",
          Price:"71,50 €",
          color:"white",
          status: 'Out of Stock'
        },
        
        ];
        
        var linkList = productData.map((product) => {
            return (
              <li className="lis" key={product.id}>
                <Link style={{ textDecoration: "none",
   color: "white"}} to={`${match.url}/${product.id}`}>{product.name}</Link>
              </li>
            );
          });
       
    return(
        <div className="divpro">
      <div style={{  marginTop:"70px",display: "block" ,justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            marginLeft: "auto",
            marginRight:"100px"
          }}
        >
          <h3 className="prod"> Products</h3>
          <ul className="list">
           {" "}
            {linkList}{" "} 
          </ul>
        </div>
      </div>

      <Route
        path={`${match.url}/:productId`}
        render={(props) => <ProductItem data={productData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => (
          <div className="select" style={{ marginTop:"30px",textAlign: "center",display:"flex",flexDirection : "column", width:"500px" }}>Please select a product !!
          <div><img style={{width:"300px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Random_Select_Career_Change_Cartoon.svg"/>
          </div>
          </div>
        )}
      />

      </div>

    );
};

export default Product;