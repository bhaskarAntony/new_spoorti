import React from 'react'
import gallerydata from '../../data/gallery'
import ImageGallery from "react-image-gallery";
import './style.css'

function Gallery() {
  return (
    <div className='gallery'>
        <h1 className="fs-1 fw-bold text-center py-2">Sporti Gallery</h1>
       <div className="p-2">
       <ImageGallery items={gallerydata} /> 
       </div>
    </div>
  )
}

export default Gallery