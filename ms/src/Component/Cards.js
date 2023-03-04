import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/header.css"
function Cards() {
    const [data, setdata] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3400/user")
        .then((res) => {
          return res.json();
        })
        .then((dataa) => {
          setdata(dataa);
        });
    }, []);


    const  navigate=useNavigate();

    const handleData=(e)=>{
       navigate("/cart", {state:{e}})
    }
  return (
<div>
<div className='container1'>
{data.map((current, key) => {
  return (
<div className="container" key={key}>
  <div className="card" style={{width:"250px"}}>
    <img className="card-img-top" src={current.PostImage} alt="Card img" style={{width:"99%"}}></img>
    <div className="card-body">
      <h4 className="card-title">{current.titel}</h4>
      <p className="card-text">{current.description}</p>
      <p className="card-text">{current.Price}</p>
      <button onClick={(e) => { handleData(current) }} className="btn btn-primary">Add To Chart</button>
      </div>
    </div>
   </div>)
   ;})}
</div>

</div>
  )
}

export default Cards
