import React from 'react'
import {useState } from 'react'
import { FaShopify } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/payment.css"

function Payment() {
let location = useLocation();

const [payment, setpayment]=useState({})
const [dd,setdd]=useState("")
const handel=(e)=>{
    const ke=e.target.name;
    const val=e.target.value;
    setpayment({...payment, [ke]:val})

  }

    const navigate=useNavigate()
    const redirecthome = () => {
        navigate("/");
      };

      const backtocart=()=>{
        navigate("/");
      }



const submitpayment=async (e)=>{
    e.preventDefault();
    
    let databody = {
        "GameName": location.state.databody.GameName,
       "Discription": location.state.databody.Discription,
        "TotalPrice":location.state.databody.TotalPrice,
         "Quantity":location.state.databody.Quantity,
         "payerName":payment.cardname,
         "cardNumber":payment.cardnumber,
       }
          const ddd=await fetch("http://localhost:8000/order",{
             method: 'POST',
             body: JSON.stringify(databody),
             headers: {
              "Accept": "application/json , text/plain ,*/*",
                 'Content-Type': 'application/json'
             },
            }).then((res)=>{
              return res.json()
            }).then((dataa)=>{
              setdd(dataa)
            })

       if(dd.status=="success") {
        navigate("/")
       }  
            
}


  return (
   <>
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


<div className="row">
  <div className="col-75">
    <div className="container" id="paymen">
      <form>
        <div className="row">
          <div className="col-50">
            <h3>Payment</h3>
            <label htmlFor="">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}} />
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
              <input type="submit" onClick={backtocart} value="cancel" className="btn" id="cancel" />
            </div>
            <label htmlFor="">Name on cards</label>
            <input type="text" id="cname" onChange={handel} name="cardname" placeholder="John More Doe" />
            <label htmlFor="">creadit card number</label>
            <input type="text" id="ccnum" onChange={handel} name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label htmlFor="">Exp month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" />

            <div className="row">
              <div className="col-50">
              <label htmlFor="">Exp year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" />
              </div>
              <div className="col-50">
              <label htmlFor="">cvv</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" onClick={submitpayment} value="Pay" className="btn" id="pay" />
      </form>
    </div>
  </div>
</div>

    </>
  )}

export default Payment;
