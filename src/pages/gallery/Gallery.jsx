import React from 'react';
import gallerydata from '../../data/gallery';
import ImageGallery from 'react-image-gallery';
import './style.css';
import { useParams } from 'react-router-dom';

function Gallery() {
    const { id } = useParams();
    console.log('ID from useParams:', id); // Check if id is coming correctly

    return (
        <div className="gallery">
            {gallerydata.map((item, index) => {
                console.log('Item ID:', item.id); // Check item id
                if (item.id.toString() == id) {
                    console.log('Match found for id:', id);
                    return (
                        <div className="p-2" key={index}>
                            <h1 className="fs-1 fw-bold text-center py-2">{item.title}</h1>
                            <div className="row">
                            {
                                item.images.map((image, imageIndex)=>(
                                    <div className="col-6 col-md-3 mb-3">
                                       <div className="service-card h-100">
                                        <img src={image.original} alt="" className="w-100 h-100" />
                                        <div className="service-info text-center">
                                            <span className="fs-6 text-white">{item.title}</span>
                                        </div>
                                    </div>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default Gallery;
