import axios from 'axios';
import getConfig from '../utils/getConfig';
import React, { useEffect, useState } from 'react';
import Modals from '../components/Modals';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../store/slices/loader.slice';

const Hotels = () => {

    const [hotels, setHotels] = useState([])
    const [modalOn, setModalOn] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setIsLoading(true))
        axios.get("https://desarrollo.api.noktos.com/api/admin/hosts/50", getConfig())
            .then(res => setHotels(res.data.host))
            .finally(() => dispatch(setIsLoading(false)))
    }, [])

    const detailsBtn = (index) => {
        setSelectedItemIndex(index)
        setModalOn(true) 
    }

    console.log(hotels);
    console.log(selectedItemIndex);
    

    return (
        <div className='hotelsListContainer'>
            {modalOn ?
                <>
                    <Modals setModalOn={setModalOn} selectedIndex={selectedItemIndex} />
                </>
                :
                <>
                    <h2>Listado de Hoteles:</h2>
                    <ul className="listVisible" >
                        {
                            hotels?.map((hotel, index) => (
                                <li className='listitems' key={hotel.id}>
                                    <br />
                                    {/* <h3><b>Id:</b> {hotel.id}</h3>  */}
                                    <h3 className='hotelsName'>{index} {hotel.nombre}</h3>
                                    <button onClick={() => detailsBtn(index)} >Hotel details</button>
                                </li>
                            ))
                        }
                    </ul>
                </>
            }

        </div>
    );
};

export default Hotels;