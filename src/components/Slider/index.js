import Carousel from 'react-bootstrap/Carousel';
import './slide.css'
import { motion } from 'framer-motion'

function UncontrolledExample() {
  return (
   
    <Carousel>
      <Carousel.Item style={{height:"200px"}}>
     
        <img
          className="d-block w-100"
          src="/images/Group 1.jpg"
          alt="First slide"
          id='slider-img'
        />
     
        <Carousel.Caption>
          <h3>LET'S SHARE</h3>
          <p>Let's share what happening in your country</p>
        </Carousel.Caption>
        
      </Carousel.Item>
     
      
      <Carousel.Item style={{height:"200px"}}>
    
        <img
          className="d-block w-100"
          src="/images/Group 2.jpg"
          alt="Second slide"
          id='slider-img'
        />

        <Carousel.Caption>
          <h3>TELL US</h3>
          <p>Tell us whats unique in your country</p>
        </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item style={{height:"200px"}}>
        <img
          
          className="d-block w-100"
          src="/images/Group 3.jpg"
          alt="Third slide"
          id='slider-img'
        />

        <Carousel.Caption>
          <h3>GET INFORMATION</h3>
          <p>
            You can find information what happened in ASEAN country
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;