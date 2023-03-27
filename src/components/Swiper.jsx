import person1 from '../assets/helperImg/person1.jpg';
import person2 from '../assets/helperImg/person2.jpg';
import person3 from '../assets/helperImg/person3.jpg';
import person4 from '../assets/helperImg/person4.jpg';
import person5 from '../assets/helperImg/person5.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import { Card } from 'react-bootstrap';

import { EffectCoverflow, Pagination } from "swiper";


const SwiperComponent = () => {
  return (
    <div className="my-5">
        <h2 className="sectionHeader text-center mb-5">
            <span className='text-warning'>T</span>estimonials
        </h2>
        <Swiper
      autoplay
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
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide >
        <Card >
            <Card.Body>
                <div className="avatar">
                    <img src={person1} alt="" />
                </div>
                <Card.Title className='text-center mt-3'>John Doe</Card.Title>
                <Card.Subtitle className='text-center'>
                    "
                    <em >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dignissim sapien, id varius nisl. Sed cursus elit eros, vel bibendum est posuere sit amet. Nunc pretium tincidunt mattis. Maecenas in ipsum at erat facilisis porta sit amet ut orci.</em>
                    "
                </Card.Subtitle>
            </Card.Body>
        </Card>
        
      </SwiperSlide>
      <SwiperSlide >
        <Card >
            <Card.Body>
                <div className="avatar">
                    <img src={person2} alt="" />
                </div>
                <Card.Title className='text-center mt-3'>Taksim Dayı</Card.Title>
                <Card.Subtitle className='text-center'>
                    "
                    <em >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dignissim sapien, id varius nisl. Sed cursus elit eros, vel bibendum est posuere sit amet. Nunc pretium tincidunt mattis. Maecenas in ipsum at erat facilisis porta sit amet ut orci.</em>
                    "
                </Card.Subtitle>
            </Card.Body>
        </Card>
        
      </SwiperSlide>
      <SwiperSlide >
        <Card >
            <Card.Body>
                <div className="avatar">
                    <img src={person3} alt="" />
                </div>
                <Card.Title className='text-center mt-3'>Giga Chad</Card.Title>
                <Card.Subtitle className='text-center'>
                    "
                    <em >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dignissim sapien, id varius nisl. Sed cursus elit eros, vel bibendum est posuere sit amet. Nunc pretium tincidunt mattis. Maecenas in ipsum at erat facilisis porta sit amet ut orci.</em>
                    "
                </Card.Subtitle>
            </Card.Body>
        </Card>
        
      </SwiperSlide>
      <SwiperSlide >
        <Card >
            <Card.Body>
                <div className="avatar">
                    <img src={person4} alt="" />
                </div>
                <Card.Title className='text-center mt-3'>Jenny Jenna</Card.Title>
                <Card.Subtitle className='text-center'>
                    "
                    <em >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dignissim sapien, id varius nisl. Sed cursus elit eros, vel bibendum est posuere sit amet. Nunc pretium tincidunt mattis. Maecenas in ipsum at erat facilisis porta sit amet ut orci.</em>
                    "
                </Card.Subtitle>
            </Card.Body>
        </Card>
        
      </SwiperSlide>
      <SwiperSlide >
        <Card >
            <Card.Body>
                <div className="avatar">
                    <img src={person5} alt="" />
                </div>
                <Card.Title className='text-center mt-3'>Russian Doomer</Card.Title>
                <Card.Subtitle className='text-center'>
                    "
                    <em >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dignissim sapien, id varius nisl. Sed cursus elit eros, vel bibendum est posuere sit amet. Nunc pretium tincidunt mattis. Maecenas in ipsum at erat facilisis porta sit amet ut orci.</em>
                    "
                </Card.Subtitle>
            </Card.Body>
        </Card>
        
      </SwiperSlide>
      
      
    </Swiper>
    </div>
  )
}

export default SwiperComponent

