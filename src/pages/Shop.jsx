import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import ShopItem from '../components/ShopItem';






const Shop = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const shopItems=useSelector(state=>state.shop.shop);

    function setToast(param){
        toast(param,{
            position: 'bottom-right',
            type:'success',
            autoClose:1500
        })
    }
    
    const searchTerm=useSelector(state=>state.shop.searchTerm);

    let filteredList=shopItems.filter(x=>x.title.toLowerCase().includes(searchTerm.toLowerCase())).reverse()


  return (
    <Container>
        <Row xs={1} md={2} lg={3} className='g-4'>
            {
                filteredList.length>0 ? (
                    filteredList.map(item=>{
                        return <ShopItem key={item.id} item={item} setToast={setToast} />
                     })
                ) : (
                    <h2 className='text-center w-100 mt-5'>No products were found for your query.</h2>
                )
            }
        </Row>
        <ToastContainer />

    </Container>
  )
}

export default Shop