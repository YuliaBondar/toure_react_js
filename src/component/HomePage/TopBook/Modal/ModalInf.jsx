import React from 'react';
import './ModalInf.css';
import { top_book } from '../new_topbook';
import { PiAirplaneInFlight } from "react-icons/pi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import Price from './PriceForPeople'

const ModalInf = ({ selectedItemId }) => {
    const selectedItem = top_book.find(item => item.id === selectedItemId);

    if (!selectedItem) return null;

    return (
        <div className='modal_info'>
            <div key={selectedItem.id} className="places">

                <div className="places_inf">
                    <p className='name_places'><u>{selectedItem.name}</u></p>
                    <span className='geo'><a href={selectedItem.geo}>{selectedItem.places}</a> ,</span><span style={{ color: 'gray', }} >в {selectedItem.km}км от аэропорта...</span>
                    <hr/>
                    <div className="airport">До аэропорта: {selectedItem.km} км.</div>
                    <hr/>
                </div>

                <div className="information_travel">

                    <div className="inform">
                        <div className="plane" title={selectedItem.title}><PiAirplaneInFlight style={{ color: 'orange' }} /> 
                            <span style={{ color: 'gray',textDecoration: 'underline', textDecorationStyle:'dashed',  }}>  на регулярном рейсе</span>
                        </div>

                        <div className="night" title={selectedItem.title}><MdOutlineNightlight style={{ color: 'gray'}}/>
                            <span> на 7 ночей</span>
                        </div>
                    </div>

                    <div className="inform">
                        <div className="plane" title={selectedItem.title}><MdOutlineDinnerDining style={{ color: 'gray'}}/> 
                            <span>BB - только обед</span>
                        </div>

                        <div className="night" title={selectedItem.title}><RiHotelBedLine style={{ color: 'gray'}}/>
                            <span> Standart ROH</span>
                        </div>

                    </div>
                </div>
                <br/>
                <hr/>
                <Price/>
            </div>
        </div>
    );
};

export default ModalInf;