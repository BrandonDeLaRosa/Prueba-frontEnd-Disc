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
    // const [userSearch, setUserSearch] = useState("")

    

    useEffect(() => {
        // if (userSearch !== "") {
            // admin/host/search/{search}
            // axios.get(`https://desarrollo.api.noktos.com/api/admin/hosts/search/${userSearch}`, getConfig())
                // .then(res => setHotels(res.data))
        // } else {
            dispatch(setIsLoading(true))
            axios.get("https://desarrollo.api.noktos.com/api/admin/hosts/50", getConfig())
                .then(res => setHotels(res.data.host))
                .finally(() => dispatch(setIsLoading(false)))
        // }
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
                    <Modals setModalOn={setModalOn} selectedIndex={selectedItemIndex} setSelectedItemIndex={setSelectedItemIndex} />
                </>
                :
                <>
                    <h2>Listado de Hoteles:</h2>

                    {/* <input type="text" value={userSearch} onChange={e => setUserSearch(e.target.value)} />
                    <button></button> */}

                    {/* <div class="input-wrapper">
                        <button class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                            </svg>
                        </button>
                        <input placeholder="search.." class="input" name="text" type="text" value={userSearch} onChange={e => setUserSearch(e.target.value)} />
                    </div> */}

                    <ul className="listVisible" >
                        {
                            hotels?.map((hotel, index) => (
                                <li className='listitems' key={hotel.id}>
                                    <br />
                                    <div className='hotelCard'>
                                        <div className='stars'>
                                            <i id='str' class="fa-solid fa-star"></i>
                                            <i id='str' class="fa-solid fa-star"></i>
                                            <i id='str' class="fa-solid fa-star"></i>
                                            <i id='str' class="fa-solid fa-star"></i>

                                        </div>

                                        <div className='hotelsInfo'>
                                            <h6 className='alojamiento'>Alojamiento</h6>
                                            <h3 className='hotelsName'> {hotel.nombre}</h3>
                                        </div>

                                        <div className='telCp'>
                                            <h6 className='tel'><b>Tel:</b>{hotel.telefono}</h6>
                                            <h6 className='cp'><b>C.P.</b>{hotel["codigo_postal_id"]}</h6>
                                        </div>

                                        <div className='hotelxts'>
                                            <i class="fa-solid fa-person-swimming"></i>
                                            <i class="fa-solid fa-hot-tub-person"></i>
                                            <i class="fa-solid fa-wifi"></i>
                                            <i class="fa-solid fa-e"></i>
                                        </div>

                                        <button className='detalsBtn' onClick={() => detailsBtn(index)}>
                                            <div>
                                                <span><p className='btnMsge'>Hotel Details</p><p></p></span>
                                            </div>
                                            <div>
                                                <span><p className='btnMsge'>Travel</p><p></p></span>
                                            </div>
                                        </button>
                                    </div>
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