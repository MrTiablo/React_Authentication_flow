import { useContext } from 'react'
import './Register.css'
import { Lcontext } from '../Context/Context'
import {Link, useNavigate} from 'react-router-dom'
function Register() {

  const nav= useNavigate()
    const {register,setRegister}=useContext(Lcontext)
   
  const handleSubmit=(e)=>{
    e.preventDefault()
    const Fname=e.target.fname.value
    const Lname = e.target.lname.value
    const Email =e.target.email.value
    const Pwd= e.target.pwd.value
    
   setRegister([...register,{id:Date.now(),fname:Fname,lname:Lname,email:Email,pwd:Pwd}])
   e.target.reset()
   alert("Registration Successfull, Please Login")
   nav('/')
}
console.log(register);
  
  


  return (
    <div className="regi_div">
          <form className="regi_form" onSubmit={(e)=>handleSubmit(e)}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id='fname'
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" id='lname'/>
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id='email'
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id='pwd'
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to='/' >sign in?</Link>
            </p>
          </form>
      
    </div>
  )
}

export default Register