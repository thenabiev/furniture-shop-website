import React, { useEffect, useState } from 'react'
import { Card, Col} from 'react-bootstrap';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/shopSlice';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const ShopItem = ({item, setToast}) => {
    const {id, rating, discount, category, image, title, price, details}=item;

    const [reveal, setReveal]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            setReveal(true)
        }, 100)
    
       })

       const navigate=useNavigate()
       useEffect(()=>{
        navigate()
       },[])

       
       const handleAdd=()=>{
        dispatch(addToCart(item));
        setToast(item.title + "  successfully added to cart")
       }

  return (
    <Col >
        <div  
        className='itemCard shadow'>
            <div 
            onClick={()=>navigate(`details/${id}`)}
            className="cardImg">
                <img src={image} alt={title} />
            </div>
            <br />
            <div className="cardFooter row">
                <div className="col-8">
                    <h4
                        onClick={()=>navigate(`details/${id}`)}
                    >{title}</h4>
                    <p><b>{price}</b> AZN  {item.discount>0 && <small > &#8595;{item.discount}%</small>}</p>
                    
                </div>
                <div className="col-4">
                    <div
                     onClick={handleAdd}
                     className="btn btn-dark rounded-pill px-4 py-2 float-end">
                        <HiOutlineShoppingCart size='1.4rem'/>
                    </div>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default ShopItem