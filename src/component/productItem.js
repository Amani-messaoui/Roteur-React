import React from 'react';


const ProductItem = ({match,data}) => {
  var product= data.find(p => p.id == (match.params.productId));
  var productData;

  if(product)
    productData = 
        <div class="card mb-3 data" style={{
          borderRadius:"10px",
          marginTop:"30px" ,
          width: "700px",
        }}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{ marginLeft:"20px",width: "270px"}} src={product.image} class="card-img" alt="..."/>
    </div>
    <div style={{ marginTop:"25px"}} class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.name} </h5>
        <p class="card-text">{product.discription} </p>
        <p class="card-text"><span className="span">Price :</span> {product.Price} </p>
        <p class="card-text"><span className="span">Color :</span> {product.color} </p>
        

        <p class="card-text"><small class="text-muted">{product.status}</small></p>
      </div>
    </div>
</div>
</div>
               
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div style={{ display: 'flex' }}>
      <div >
         {productData} 
      </div>
    </div>
  )    
}
      
export default ProductItem;


