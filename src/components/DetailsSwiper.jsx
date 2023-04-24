import React from 'react'
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";


const DetailsSwiper = ({comments}) => {
  return (
    <div className='my-5'>
      <h2 className="sectionHeader text-center mb-5">
            <span className='text-warning'>F</span>eedbacks about this product
        </h2>
      <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop
    spaceBetween={20}
    slidesPerView={2}
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    }}
    modules={[EffectCoverflow, Pagination, Autoplay]}

    >
        {
          comments.map(cmnt=>(
            <SwiperSlide 
            
            key={cmnt.id}>
              <Card className='text-center'>
              <Card.Body>
                <h5>{cmnt.name}</h5>
                <p>{cmnt.comment}</p>
              </Card.Body>
            </Card>
            </SwiperSlide>
          ))
        }

    </Swiper>
    </div>
  )
}

export default DetailsSwiper