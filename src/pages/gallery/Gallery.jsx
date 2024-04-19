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
                            <ImageGallery items={item.images} />
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
