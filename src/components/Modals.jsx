import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getConfig from '../utils/getConfig';
import { setIsLoading } from '../store/slices/loader.slice';
import { useDispatch } from 'react-redux';

const Modals = ({ setModalOn, selectedIndex, setSelectedItemIndex, theme }) => {

    const [hotels, setHotels] = useState([])
    const dispatch = useDispatch()

    const hotelSelection = () => {
        dispatch(setIsLoading(true))
        axios.get("https://desarrollo.api.noktos.com/api/admin/hosts/50", getConfig())
            .then(res => setHotels(res.data.host[selectedIndex]))
            .finally(() => dispatch(setIsLoading(false)))
    }

    useEffect(() => {
        hotelSelection()
    }, [selectedIndex])

    const nextPage = () => {
        dispatch(setSelectedItemIndex(selectedIndex + 1))
    }

    const prevPage = () => {
        dispatch(setSelectedItemIndex(selectedIndex - 1))
    }

    console.log(hotels);
    console.log(selectedIndex);
    console.log(theme);


    return (
        <div className={theme? 'modalContainerDk' : 'modalContainer'}>
            <button className='modalX' onClick={() => setModalOn(false) && setListVis(true)}><i id='closeModal' class="fa-solid fa-circle-xmark"></i></button>

            <section className='hotelSelection'>
                <button id='arrowBtn' onClick={prevPage} disabled={parseInt(selectedIndex) === 0}><i id='arrows' class="fa-solid fa-circle-left"></i></button>
                <h3>{selectedIndex}</h3>
                <button id='arrowBtn' onClick={nextPage} disabled={parseInt(selectedIndex) === 49}><i id='arrows' class="fa-solid fa-circle-right"></i></button>
            </section>

            <div className='allInfo'>
                <section className={theme? 'generalInfoDk' : 'generalInfo'}>
                    <h3 className='hotelName'><b>{hotels?.nombre}</b></h3>
                    <h2>Informacion general:</h2>
                    <ul>
                        <li><b>Email: </b> {hotels?.email ? hotels?.email : "Coming Soon..."}</li>
                        <li><b>Telefono: </b> {hotels?.telefono ? hotels?.telefono : "Coming Soon..."}</li>
                        <li> <b>Codigo Postal:</b>{hotels?.["codigo_postal_id"]}</li>
                        <li> <b>Pagina Web: </b>{hotels?.["pagina_web"] ? hotels?.["pagina_web"] : "Coming soon..."}</li>
                    </ul>
                </section>

                <div className={theme? 'detailedInfoDk' : 'detailedInfo'}>
                    <div >
                        <h2 className='amenidades'>Amenidades</h2>

                        <section className='amenidadesContainer'>
                            <ul>{hotels?.amenidades?.map(amenidad => (
                                <li key={amenidad.id}>
                                    <h5>{amenidad.nombre}</h5>
                                    <h5>Regalmento y descriptcion</h5>
                                    -{amenidad.descripcion}
                                </li>
                            ))}</ul>
                        </section>

                    </div>

                    <section className='habitacionesContainer'>
                        <h2 className='detailedTitle'>Habitaciones</h2>
                        <ul>{hotels?.habitaciones?.map(habitacion => (
                            <li key={habitacion.id}>
                                <h5>Tipo de habitacion: </h5>
                                -{habitacion.nombre}S,  <p>-{habitacion.cantidad} habitaciones.</p>
                            </li>
                        ))}</ul>
                    </section>
                </div>
            </div>

            <section className='carouselContainer'>
                <h2>Fotos del hotel: </h2>
                {
                    hotels.imagenes && hotels.imagenes.length > 0 ? (
                        <ul className='carousel'>
                            {
                                hotels.imagenes.map(imagen => (
                                    <li className='listItem' key={imagen.id}>
                                        <img className='imagenesHotel' src={imagen.path} alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                    ) : "Coming soon..."
                }
            </section>
        </div>
    );
};

export default Modals;


/* <section className='carouselContainer'>
<h2>Fotos del hotel: </h2>
<ul className='carousel'>
    {
        hotels?.imagenes?.map(imagen => (
            <li className='listItem' key={imagen.id}>
                <img className='imagenesHotel' src={imagen.path} alt="" />
            </li>
        ))
    }
</ul>
</section>*/