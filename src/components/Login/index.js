import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../actions/userAction'
import { Link } from 'react-router-dom';
import axios from "axios"



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios({
          method : "GET",
          url : "https://63496bd50b382d796c86192b.mockapi.io/users",
          timeout: 120000
      }).then((res)=>{
        let users = res.data;
        let cekData =  users.find((x)=> x.email === email && x.password === password)
        
        if(cekData){
          if(cekData.role === "admin"){
            let parsedLS = JSON.stringify(cekData)
            localStorage.setItem('USER_ID', parsedLS)
           alert("kamu admin")
                  
          } else{
            let parsedLS = JSON.stringify(cekData)
            localStorage.setItem('USER_ID', parsedLS)
            alert("kamu User")
             
          }
        }else{
          alert("INCORRECT LOGIN CREDENTIALS")
        }
      })
    }

    
  return (
    <div>
    <div className="container mt-5 col-md-7">
    <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img src="images/tangga.jpg" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="card-body text-center">
                <h2 className="card-title border-bottom mb-4 text-success">ASEAN YOUTH FORUM</h2>
                <h5 className="card-title mb-3">Login</h5>
            <form action="" onSubmit={(e)=> handleSubmit(e)} id="form">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
        
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="pword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
                <div className="container mt-3">
                <h7>Dont have account? <Link to='/register' style={{color:"green", textDecoration:"none"}}>Register</Link></h7>
                </div>
            </form>
            </div>  

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login  