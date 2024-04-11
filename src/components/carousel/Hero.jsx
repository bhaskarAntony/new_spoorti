import React from 'react';
import { Carousel } from 'react-bootstrap';
import heroImages from '../../data/hero'
import './style.css'

function Hero() {
  return (
    <div className='p-2'>
      <Carousel className='rounded-5  overflow-hidden'>
    {
      heroImages.map((item, index)=>(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.url}
          alt="First slide"
        />
        <Carousel.Caption>
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
