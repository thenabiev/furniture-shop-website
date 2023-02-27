import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainr from '../assets/helperImg/mainr.png'
import Counter from '../components/Counter';

const Main = () => {
    const [reveal, setReveal]=useState(false)
    
       useEffect(()=>{
        setTimeout(()=>{
            setReveal(true)
        }, 100)
    
       })
        
       useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
  return (
    <Container className='main '>
        <Row xs={1} md={1} lg={2} className='g-5 w-100'>
            <Col className={`mainTexts ${reveal && 'reveal'}`}>
                <div className="textContent">
                Hey!
                <p>Welcome to <br />
                    <span className='text-warning'>Sakura</span> Home !</p>
                <p>We are at your service with products <br /> that will give you happy and peaceful memories.</p>
                <br />
                <div className="buttonArea">
                    <Link to='/about' className="btn btn-outline-dark  px-5 curved1">
                        About
                    </Link>
                    <Link to='/shop' className="btn btn-dark px-5 curved1">
                        Shop Now
                    </Link>
                </div>
                </div>

            </Col>
            <Col  className={`mainImg ${reveal && 'reveal'}`}>
                <div className="imgBox ">
                    <img src={mainr} />
                </div>
            </Col>
        </Row>
        <br /><br /><br />
        <Counter />
    </Container>
  )
}

export default Main