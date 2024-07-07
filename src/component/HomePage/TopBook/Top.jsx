import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import Grade from './grade.jsx';
import Modal from './Modal/Modal.jsx';
import { top_book } from './new_topbook.js';
import ModalInf from './Modal/ModalInf.jsx'

const Top = ({showCount}) => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleOpenModal = (id) => {
        setSelectedItemId(id);
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
    };

    return (
        <div className="top_places_now">
            {top_book.slice(0, showCount).map(item => (
                <div key={item.id} className="places">
                    <div className="page">
                        <Grade id={item.id} />
                        <img src={item.image} alt="page" onClick={() => handleOpenModal(item.id)} />
                    </div>
                    <div className="about">
                        <div className="about_places">
                            <p>{item.name}</p>
                            <p>{new Intl.NumberFormat(
                                'ru-US',
                                {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(item.money)}</p>
                        </div>
                        <div className="country">
                            <div className="img_loc"><CiLocationOn className='img_loc' /></div>
                            <div className="places"><a href={item.geo}>{item.places}</a></div>
                        </div>
                    </div>
                </div>
            ))}
            <Modal active={selectedItemId !== null} setActive={handleCloseModal}>
                
                {selectedItemId !== null && (
                    <div className='modal_window'>
                        <div className='about_place'>
                           
                            <img className='places_image' src={top_book.find(item => item.id === selectedItemId).image} alt='image1'/>
                        </div>
                        <div className="order">
                        <ModalInf selectedItemId={selectedItemId} />
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Top;