import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TravelInfoContext } from '../../App';

import './DestinationBooking.css'

const DestinationBooking = () => {
    const {destinationId} = useParams();
    const {destineState, loggedUserState} = useContext(TravelInfoContext);
    const [destinationInfo, setDestinationInfo] = destineState;
    const places = destinationInfo.find(place => place.id.toString() === destinationId);
   
    const history = useHistory();
    const handleHotel = (id) => {
        history.push(`/hotel/${id}`)
    }
    
    return (
        <div className="main-container">
            <div className="place-descrip">
                <h1 className="h1">{places.name}</h1>
                <p className="p"> {places.description}</p>
            </div>
            <div className="form-container">
                <form className="form">
                    <p>Origin</p>
                    <div className="input-style">
                        {places.origin}
                    </div>
                    <p>Destination</p>
                    <div className="input-style">
                        {places.name}
                    </div>
                    <br/>
                    <div className="flex-date ">
                        <input className="date" type="date"/>
                        <input className="date" type="date"/>
                    </div>
                    <br/>
                    <button onClick={() => handleHotel(places.id)} className="btn-style">Start booking</button>
                </form>
            </div>
        </div>
    );
};

export default DestinationBooking;