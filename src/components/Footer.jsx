import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-dark position-relative'>
        <div className="container text-light py-4">
          <Row xs={1} sm={2} md={3} lg={4} className='gap-4'>
            <Col>
            <h2
                className='logo'
                style={{fontSize:"32px"} }
                >Sakura<span className='text-warning'>Home</span></h2>
            </Col>
            <Col>
              <h6>Site map</h6>
              <ul className='align-start'>
                <li>
                  <a href="#" className='text-light'>Home</a>
                </li>
                <li>
                  <a href="#" className='text-light'>About</a>
                </li>
                <li>
                  <a href="#" className='text-light'>Shop</a>
                </li>
                <li>
                  <a href="#" className='text-light'>Cart</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6>Help</h6>
              <ul className='align-start'>
                <li>
                  <a href="#" className='text-light'>F.A.Q.</a>
                </li>
                <li>
                  <a href="#" className='text-light'>Problems</a>
                </li>
                <li>
                  <a href="#" className='text-light'>Call center</a>
                </li>
                
              </ul>
            </Col>
            
            <Col>
              <h6>Contact</h6>

            </Col>

          </Row>
        </div>
    </div>
  )
}

export default Footer