

import { useEffect, useState } from 'react';
import Frame from '../../components/Frame/Frame';
import Topbox from '../../components/Navbar/Topbox';
import Barcode from "react-barcode";
import './/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBarcode } from "react-icons/fa";
function Header() {
  let navigate = useNavigate();
  const[pro,setpro]=useState([]);
  const[raw,setraw]=useState("");
  const [bar,setbar]=useState("abab");
  const [locat,setlocat]=useState("");
  const [all,stall]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then(response=>setpro(response.data)).catch(err=>console.log(err));
  },)

  const barcode=(item)=>{
    console.log(item);
    setbar(item.barcode);
    stall(item);
  }
const sale=(item)=>{
 setraw(item.id);
 setlocat(item.location);
 

}

const sub=()=>{
let id=document.getElementById("sid").value;
let quantity=document.getElementById("qua").value;
let price=document.getElementById("pri").value;
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(date.getDate()).padStart(2, '0');

const currentDate = `${year}-${month}-${day}`;
const json={
  "productId":id,
    "quantity":quantity,
    "price":price,
    "timestamp":currentDate

 }

axios.post("http://localhost:8080/api/sales",json).then(function(response){console.log(response)}).catch(function(error){console.log(error)});

setTimeout(()=>{
  const ones={
   "productId":id,
   "quantity":quantity,
   "location":locat,
   "timestamp":currentDate

  }
  axios.post("http://localhost:8080/api/shipments",ones).then(function(response){console.log(response)}).catch(function(error){console.log(error)});
},10000)
}
  return (

    <div>
      <Frame />
      <Topbox />
        
      <div className='pt-2'>
        <h1 id='h1'>Product List</h1>

        <table className="table" class="table table-striped w-75">
          <thead>
            <tr>
              <th style={{ color: "Blue" }} scope="col">Id</th>
              <th style={{ color: "Blue" }} scope="col">Product_Name</th>
              <th style={{ color: "Blue" }} scope="col">Price</th>
              <th style={{ color: "Blue" }} scope="col">Quantity</th>
              <th style={{ color: "Blue" }} scope="col">location</th>
              <th style={{ color: "Blue" }} scope='col'>Description</th>
              
            </tr>


          </thead>
          <tbody>
            {pro.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td>{item.description}</td>
                <td><i onClick={()=>barcode(item)} data-bs-toggle="modal" data-bs-target="#exampleModal3" id="bar"><FaBarcode></FaBarcode></i></td>
               
                <td><button className="btn btn" data-bs-toggle="modal" data-bs-target="#exampleModal2"  onClick={()=>sale(item)}>🛒</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Sale</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="model" class="modal-body">
       <b>id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input id='sid' disabled="true" value={raw} ></input><br></br><br></br>
       <b>Quantity:</b><input id="qua"  ></input><br></br><br></br>
       <b>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <input id="pri"  ></input><br></br><br></br>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={sub}>Sale</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Barcode</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="model" class="modal-body text-start">
       <Barcode  value={bar}></Barcode>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Header;