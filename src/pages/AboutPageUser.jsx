import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'



function AboutPage() {
  return (
    <div>
        <NavbarUser />
        <h3 className="title-header">About Us</h3>
        <About />
        <Footer />
    </div>
  )
}

export default AboutPage