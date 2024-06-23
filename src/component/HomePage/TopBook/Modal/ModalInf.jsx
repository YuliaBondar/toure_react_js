import React from 'react';
import './ModalInf.css';
import { top_book } from '../new_topbook';
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";


const ModalInf = ({ selectedItemId }) => {
    const selectedItem = top_book.find(item => item.id === selectedItemId);

    if (!selectedItem) return null;

    return (
        <div className='modal_info'>
            <div key={selectedItem.id} className="places">
                <p className='name_places'><u>{selectedItem.name}</u></p>
                {/* <span>{selectedItem.places}</span> */}
                <div className="information_travel">
                    
                </div>
            </div>
        </div>
    );
};

export default ModalInf;