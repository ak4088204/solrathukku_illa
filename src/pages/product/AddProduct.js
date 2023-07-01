import React, { useState } from "react";
import axios from "axios";

import './AddProduct.css'
import Frame from "../../components/Frame/Frame";
import Topbox from "../../components/Navbar/Topbox";




const ProductTable = () => {
  const [loc,setloc]=useState([])
  const [id,setid]=useState("")
  const fetchData =()=>{
    axios.get("http://localhost:8080/api/products").then((response) => {
        setProducts(response.data)
        
      }).catch(err=>console.log(err)
        );}
  React.useEffect(() => {
    fetchData()
    axios.get("http://localhost:8080/api/locations").then((response)=>{
     
    setloc(response.data)}).catch((err)=>{console.log(err)});
    
  }, );



  const [products, setProducts] = useState([
    
]);

  <style backgroundColor="#DA70D6" />;

  const [Product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    location: "",
    barcode: "",
  });

 
  
  


  const ed=(i)=>{
    setid(i.id);
  }
  const editProduct = () =>{
   
    
    let name=document.getElementById("nameed").value;
    let des=document.getElementById("Desed").value;
    let price=document.getElementById("pried").value;
    let quantity=document.getElementById("tityed").value;
    let location=document.getElementById("locaed").value;
    let barcode=document.getElementById("codeed").value;
    const jsosn={
      "id":id,
      "name": name,
      "price": price,
      "quantity": quantity,
      "location": location,
      "barcode": barcode,
      "description": des
    }

    console.log(jsosn)
    axios.put("http://localhost:8080/api/products",jsosn).then(function(response){console.log(response)}).catch(function(error){console.log(error)});
   

  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  

 
  const deleteProduct = (id) => {
    console.log(id);
    axios.delete('http://localhost:8080/api/products',{params:{id}}).then(function(response){console.log(response)}).catch(function(error){console.log(error)});
    
}
const handleAddProduct = () => {
  let name=document.getElementById("name").value;
  let des=document.getElementById("Des").value;
  let price=document.getElementById("pri").value;
  let quantity=document.getElementById("tity").value;
  let location=document.getElementById("loca").value;
  let barcode=document.getElementById("code").value;

  const json={
    "name": name,
		"price": price,
		"quantity": quantity,
		"location": location,
		"barcode": barcode,
		"description": des
  }
  axios
    .post("http://localhost:8080/api/product", 
      json
    ).then(function(response){console.log(response)}).catch(function(error){console.log(error)});
};

  return (
    <div>
      <Frame/>
      <Topbox/>
      <div >
        <div style={{ fontFamily: "Times New Roman" }}>
          <button id="add" className="btn btn" data-bs-toggle="modal" data-bs-target="#exampleModalpro"
            
            style={{
              float:"right",
              color: "black",
             
            }}
            
          >
            ➕ Add Product
          </button>
          
          
        </div>
        <div >
          
          </div>
        <div className="table-container">
          <table  class="table table-striped w-75" id="product-table">
            <thead>
              <tr>
                <th style={{ color: "Blue" }}>Product Name</th>
                <th style={{ color: "Blue" }}>Description</th>
                <th style={{ color: "Blue" }}>Price</th>
                <th style={{ color: "Blue" }}>Quantity</th>
                <th style={{ color: "Blue" }}>Location</th>
                <th style={{ color: "Blue" }}>Barcode</th>
                
              </tr>
            </thead>
            <tbody>
              {products.map((product , i) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.location}</td>
                  <td>{product.barcode}</td>
                  <td>
                    <button
                      className="btn btny"
                      data-bs-toggle="modal" data-bs-target="#exampleModaledit"
                      onClick={()=>ed(product)}
                    >
                      ✏️
                    </button>
                    <button className="btn btn"
                    onClick={()=>deleteProduct(product.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal fade" id="exampleModalpro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="model" class="modal-body">
      
       <b>Name:</b><input id="name"  ></input><br></br><br></br>
       <b>Description:</b><input id="Des"  ></input><br></br><br></br>
       <b>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <input id="pri"  ></input><br></br><br></br>
       <b>Quantity:</b><input id="tity"  ></input><br></br><br></br>
       <b>Location:</b><select id="loca"  >
       {loc.map((item, index) => (
             <option>{item.name}</option>
            ))}
        
        </select><br></br><br></br>
       <b>Barcode:</b><input id="code"  ></input><br></br><br></br>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddProduct} >Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="model" class="modal-body">
       <b>Id:</b><input value={id} disabled="true"></input><br></br><br></br>
       <b>Name:</b><input id="nameed"  ></input><br></br><br></br>
       <b>Description:</b><input id="Desed"  ></input><br></br><br></br>
       <b>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <input id="pried"  ></input><br></br><br></br>
       <b>Quantity:</b><input id="tityed"  ></input><br></br><br></br>
       <b>Location:</b><select id="locaed"  >
       {loc.map((item, index) => (
             <option>{item.name}</option>
            ))}
        
        </select><br></br><br></br>
       <b>Barcode:</b><input id="codeed"  ></input><br></br><br></br>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={editProduct} >Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductTable;
