import React from 'react'
import gallerydata from '../../data/gallery'
import ImageGallery from "react-image-gallery";
import './style.css'
import { useParams } from 'react-router-dom';

function Gallery() {
    const {id} = useParams();
  return (
    <div className='gallery'>
       
      {
        gallerydata.map((item, index)=>(
            item.id == id ?(
             <div className="p-2">
                 <h1 className="fs-1 fw-bold text-center py-2">{item.title}</h1>
                   <ImageGallery items={item.images} />
             </div>
            ):(null)
            
            
        ))
      } 
    </div>
  )
}

export default Gallery