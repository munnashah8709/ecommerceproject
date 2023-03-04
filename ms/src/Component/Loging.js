
import { useNavigate } from 'react-router-dom';
function Loging() {
const navigate=useNavigate();

const handel=()=>{
 navigate("/");
}
  return (
    <div> 
<section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width:"23rem"}}>
            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log in</h3>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" for="form2Example18">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label" for="form2Example28">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button onClick={handel} className="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Register here / <a  onClick={handel} className="link-info">Cencel</a></p>
           

          </form>

        </div>

      </div>
      <div className="col-sm-6 ">
        <img src="https://www.designyourway.net/blog/wp-content/uploads/2020/04/bg17.jpg"
          alt="" className="w-100 vh-100" style={{objec:"", objectposition:"left"}}></img>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Loging;
