import { useContext } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { Lcontext } from '../Context/Context'


function Login() {

  const nav=useNavigate()
    const {register}=useContext(Lcontext)
    console.log(register);

    const handleSubmit=(e)=>{
      e.preventDefault()
     const email= e.target.Email.value
     const pwd= e.target.Pwd.value
     e.target.reset()
      alert('login Successfull')
     const filterUser=register.filter((regi)=>{
      return regi.email==email 
    
     })
     if(filterUser[0].pwd==pwd){
      nav('/home')
     }
     console.log(filterUser);


    }
    


  return (
      <div className="login_div">
      <form className="login_form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id='Email'
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id='Pwd'
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
              Dont have any account <Link to='register'>Register?</Link>
            </p>
      </form>
      </div>
      )}

export default Login