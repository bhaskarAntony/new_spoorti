import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import heroImages from '../../data/hero'
import './style.css'
import Aos from 'aos';

function Hero() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div className=''>
      <Carousel className=' overflow-hidden' fade >
    {
      heroImages.map((item, index)=>(
        <Carousel.Item data-aos="zoom-out">
        <img
          className="d-block w-100"
          src={item.url}
          alt="First slide"
          
        />
        <Carousel.Caption >
          <h3 className='fs-1'>{item.caption_en}</h3>
          <p className='fs-5'>{item.description_en}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))
    }

    </Carousel>
    </div>
  
  );
}

export default Hero;
