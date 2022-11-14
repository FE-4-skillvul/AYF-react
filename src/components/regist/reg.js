import React from 'react'

function Regist() {
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
                    <h5 className="card-title mb-3">Registration</h5>
                <form action="" id="form">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="username" className="form-control" name="username" id="uname" placeholder="Username"/>
                        <label htmlFor="floatingUname">Username</label>
                    </div>
                    <input type="hidden" id="role" name="role" value="user"/>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="pword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-success">Register</button>
                    <div className="container mt-3">
                    <h8>Already have account? <a href="login.html" className="text-success">LOGIN</a></h8>
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

export default Regist