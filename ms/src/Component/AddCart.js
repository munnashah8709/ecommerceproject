import { useLocation } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import React, {useState } from 'react'
import "../style/Addcart.css";
import "../style/header.css"
function AddCart() {
  const [Quantity, setquantity]=useState(1);
  const navigate = useNavigate();

  let location = useLocation();

  const [updateprice, setupdateprice]=useState(location.state.e.Price)
  const redirecthome = () => {
    navigate("/");
  };

  const Addquantity=()=>{
    setquantity(Quantity+1)
    setupdateprice(updateprice+location.state.e.Price)
  }
  const subquantity=()=>{
    setquantity(Quantity-1)
    setupdateprice(updateprice-location.state.e.Price)
  }

  let databody = {
        "GameName": location.state.e.titel,
        "Discription": location.state.e.description,
        "TotalPrice":updateprice,
        "Quantity":Quantity,
    }

const sendData=()=>{
  navigate("/Payment", {state:{databody}} );
}

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <FaShopify
            style={{
              color: "white",
              width: "50px",
              height: "50px",
              margin: "5px",
            }}
          ></FaShopify>
          <h4 className="aaaa">MS.Store</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  onClick={redirecthome}
                  className="nav-link"
                  style={{ fontSize: "30px" }}>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="container" id="addcard">
        <div className="card" style={{ width: "250px" }}>
          <img
            className="card-img-top"
            src={location.state.e.PostImage}
            alt="Card img"
            style={{ width: "99%" }}
          ></img>
          <div className="card-body">
            <h4 className="card-title">{location.state.e.titel}</h4>
            <p className="card-text">{location.state.e.description}</p>
            <p className="card-text">{location.state.e.Price}</p>
          </div>
        </div>
     

      <div className="container" id="order">
        <div className="card" id="cc" style={{ width:"450px" }}>
          <div className="card-body">
            <h4 className="card-title">Game-:{location.state.e.titel}</h4>
           <br />
            <h6 className="card-text">Discription:-{location.state.e.description}</h6>
          <br />
            <h4 className="card-text">Price: {updateprice}</h4>
            <br />
            <h4 className="card-text">Quantity: {Quantity}</h4>
            <br />
            <div  className="placeorder">
            <button  onClick={sendData} className="btn btn-primary" style={{width:"262px"}} >Buy Now</button>
            </div>
          
          </div>
        </div>
      </div>
      </div>
    <div className="quantity">
      <button id="quantity" style={{border:"0px",height:"40px"}}>Add Quantity:-</button>
      <button onClick={Addquantity} className="btn btn-secondary" id="quantity" style={{margin:"1px", marginTop:"-3px"}}>+</button>
      <button onClick={subquantity} className="btn btn-secondary" id="quantity" style={{margin:"1px", marginTop:"-3px"}}>-</button>
      </div>  
    </div>
  );
          }

export default AddCart;
