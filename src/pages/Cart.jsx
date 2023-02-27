import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlinePlus, HiOutlineMinus, HiOutlineTrash, HiChevronDoubleRight } from 'react-icons/hi';
import { removeFromCart, increase, decrease } from '../state/shopSlice';
import { Link } from 'react-router-dom';


const Cart = () => {

const cartItems=useSelector(state=>state.shop.cartItems);
useEffect(()=>{
    window.scrollTo(0,0)
},[])

const dispatch=useDispatch();



    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.amount, 0);
    const itemsInCart=useSelector(state=>state.shop.itemsInCart);

  return (
    <Container>
        {
            cartItems.length>0? (
                <Row xs={2}>
            <Col>
            <p>Items In Your Cart : <b>{itemsInCart}</b></p>
            <p>Total Cost : <b>{itemsPrice.toFixed(2)}</b></p>
            </Col>
            <Col className='text-end'>
                <div className="btn btn-dark me-2">Checkout</div>
                <div className="btn btn-outline-dark ">Clear Cart</div>
            </Col>
        </Row>
            ) : (
                <h3>Your Cart Looks Empty</h3>
            )
        }
        {
            cartItems.length==0?(
                <div className="my-5 py-5">
                    <h4>
                    <Link to='/shop' className='routerLink'>Continue Shopping <HiChevronDoubleRight /></Link>
                    </h4>
                </div>
            ) : (
                <Row xs={1} lg={2} className='g-2'>
        {
            cartItems.map(item=>(
                <Col key={item.id}>
                <Card  className='p-3 shadow '>
                    <div className="row ">
                        <div className="col-3">
                            <div className="cartImg mb-2">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="d-flex align-items-center">
                            <div 
                            onClick={()=>dispatch(decrease(item))}
                            className="btn btn-outline-dark px-1 py-0">
                                <HiOutlineMinus size='.6rem'/>
                            </div>
                            <div className='mx-2'>{item.amount}</div>
                            <div 
                            onClick={()=>dispatch(increase(item.id))}
                            className="btn btn-outline-dark px-1 py-0">
                                <HiOutlinePlus size='.6rem'/>
                            </div>
                            </div>

                        </div>
                        <div className="col-9 row">
                            <div className="col-9">
                            <h5>{item.title}</h5>
                            <p>Price: {item.price.toFixed(2)} AZN</p>
                            <p>Total: {(item.price * item.amount).toFixed(2)} AZN</p>
                            </div>
                            <div className="col-3 ">
                                <div 
                                onClick={()=>dispatch(removeFromCart(item.id))}
                                className="btn btn-secondary rounded-pill px-4 float-end">
                                    <HiOutlineTrash size='1.3rem'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                </Col>
            ))
        }
        </Row>
            )
        }
        
    </Container>
  )
}

export default Cart