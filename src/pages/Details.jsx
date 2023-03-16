import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../state/shopSlice';

const Details = () => {

  const shopItems=useSelector(state=>state.shop.shop)
  const {itemId}=useParams();


  const item=shopItems.find(x=>x.id===parseInt(itemId))

  const [show, setShow]=useState(false);

  const navigate=useNavigate();

  const dispatch=useDispatch();
  


  const handleAdd=()=>{
    dispatch(addToCart(item));
    toast(item.title + "  successfully added to cart",{
            type:'success',
            position:'bottom-right',
            autoClose: 1500
        }
    )
   }

  return (
    <Container>
        
        <Modal
        onHide={()=>setShow(false)}
        className='modal-lg'
        show={show}
      style={{ display: 'block', position: 'fixed' }}      
    >
        <Modal.Header closeButton>
            {item.title}
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <img className='img-thumbnail ' src={item.image} alt="" />
        </Modal.Body>
    </Modal>
        <Row xs={1} md={2} className='g-2'>
            <Col>
                <img 
                style={{maxHeight:'80vh'}}
                onClick={()=>setShow(true)}
                src={item.image} alt="" className="img-thumbnail" />
            </Col>
            <Col className='py-4'>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <p>Category : {item.category}</p>
                <p>Rate : {item.rating}</p>
                <p>Price : {
                    item.discount>0 && (
                        <del>{(item.price + (item.discount * item.price /100)).toFixed(2)}</del>
                    )
                    } {item.price}</p>

                    <div>
                        <div 
                        onClick={()=>navigate('/shop')}
                        className="btn btn-outline-dark me-2">Continue Shopping</div>
                        <div 
                        onClick={handleAdd}        
                        className="btn btn-dark">Add To Cart</div>
                    </div>
            </Col>
        </Row>

        
        <ToastContainer />
    </Container>
  )
}

export default Details