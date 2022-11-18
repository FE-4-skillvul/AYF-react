import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../actions/userAction';
import { motion } from 'framer-motion'

function NavbarUser() {
  const dispatch = useDispatch()
  

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/home"}>  
    <img src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png" alt="" width="40" height="40" class="d-inline-block align-text-top"/>ASEAN YOUTH FORUM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/aboutpageuser"}>About</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </Link>
         
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
            <li>
              <Link 
              to='/login'
              className="dropdown-item" 
              onClick={()=>dispatch(Logout())}
              >Logout
              </Link>
            </li>
            <li>
              <Link 
              to='/profile'
              className="dropdown-item" 
              >Profile
              </Link>
            </li>
              </motion.div>
          </ul>
       
        </li>
      </ul>

      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarUser