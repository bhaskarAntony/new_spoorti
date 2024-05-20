import React, { useState } from 'react';
import gallerydata from '../../data/gallery';
import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './style.css';

function Gallery() {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [itemIndex, setItemIndex] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);

    const openModal = (itemIndex, imageIndex) => {
        setItemIndex(itemIndex);
        setImageIndex(imageIndex);
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        setItemIndex(null);
        setImageIndex(null);
    };

    const showNextImage = () => {
        if (imageIndex < gallerydata[itemIndex].images.length - 1) {
            setImageIndex(imageIndex + 1);
        }
    };

    const showPrevImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    };

    return (
        <div className="gallery">
            <div className="contact-banner">
                <div className="skew-container">
                    <div className="skew-left">
                        <h1 className="fs-2 fw-bold">Gallery</h1>
                    </div>
                    <div className="skew-right d-flex align-items-center">
                        <h1 className="fs-2 fw-bold text-white">SPORTI</h1>
                    </div>
                </div>
            </div>
            {gallerydata.map((item, index) => {
                if (item.id.toString() === id) {
                    return (
                        <div className="p-2" key={index}>
                            <h1 className="fs-1 fw-bold text-center py-2">{item.title}</h1>
                            <div className="row">
                                {item.images.map((image, subindex) => (
                                    <div className="col-6 col-md-3 mb-3" key={subindex}>
                                        <div className="gallery-card service-card h-100">
                                            <img
                                                src={image.original}
                                                alt=""
                                                className="w-100 h-100"
                                                onClick={() => openModal(index, subindex)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            {itemIndex !== null && imageIndex !== null && (
                <Modal show={show} onHide={closeModal} centered className='bg-transparent'  size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{gallerydata[itemIndex].title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center bg-transparent">
                       <div className="popup-image">
                       <img
                            src={gallerydata[itemIndex].images[imageIndex].original}
                            alt=""
                            className="w-100"
                        />
                        <button className='prev'  onClick={showPrevImage} disabled={imageIndex === 0}><i class="bi bi-chevron-compact-left display-3"></i></button>
                        <button className='next'  onClick={showNextImage} disabled={imageIndex === gallerydata[itemIndex].images.length - 1}><i class="bi bi-chevron-compact-right display-3"></i></button>
                       </div>
                    </Modal.Body>
                    
                </Modal>
            )}
        </div>
    );
}

export default Gallery;
