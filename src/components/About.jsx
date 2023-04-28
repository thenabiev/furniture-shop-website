import React from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import aboutBanner from '../assets/helperImg/aboutBanner.jpg'

const About = () => {
  return (
    <div>
      <div className="container">
        <div 
        style={{height:"400px"}}
        className="aboutBanner overflow-hidden rounded aboutBanner mb-4 shadow">
          <div className="layer d-grid">
            <h2 className='text-light'>About Our <span className='text-warning'>F</span>amily</h2>
          </div>
        </div>
        <Row xs={1} md={2} >
          <Col>
            <p><span className='text-warning'>L</span>orem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eligendi doloribus placeat voluptate illum pariatur aspernatur iusto nobis ratione facere vitae in accusantium cumque porro adipisci iste error! Totam, aliquid possimus? Veritatis odio qui soluta iusto maiores et pariatur nam corrupti magni, eaque corporis quas asperiores beatae, perspiciatis praesentium ab.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eligendi doloribus placeat voluptate illum pariatur aspernatur iusto nobis ratione facere vitae in accusantium cumque porro adipisci iste error! Totam, aliquid possimus? Veritatis odio qui soluta iusto maiores et pariatur nam corrupti magni, eaque corporis quas asperiores beatae, perspiciatis praesentium ab.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eligendi doloribus placeat voluptate illum pariatur aspernatur iusto nobis ratione facere vitae in accusantium cumque porro adipisci iste error! Totam, aliquid possimus? Veritatis odio qui soluta iusto maiores et pariatur nam corrupti magni, eaque corporis quas asperiores beatae, perspiciatis praesentium ab.</p>

          </Col>
          <Col>
          <h5 className='mb-3'>Lorem Ipsum</h5>
            <ListGroup>
              <ListGroupItem className='d-flex justify-content-between'>
                <strong>Lorem</strong>
                <span className="text-danger">01</span>
              </ListGroupItem>
              <ListGroupItem className='d-flex justify-content-between'>
                <strong>Ipsum</strong>
                <span className="text-danger">02</span>
              </ListGroupItem>
              <ListGroupItem className='d-flex justify-content-between'>
                <strong>Dolor</strong>
                <span className="text-danger">03</span>
              </ListGroupItem>
              <ListGroupItem className='d-flex justify-content-between'>
                <strong>Sit</strong>
                <span className="text-danger">04</span>
              </ListGroupItem>
              <ListGroupItem className='d-flex justify-content-between'>
                <strong>Amet</strong>
                <span className="text-danger">05</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default About