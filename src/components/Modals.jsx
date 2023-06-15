import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getConfig from '../utils/getConfig';

const Modals = ({setModalOn, selectedIndex }) => {

    const [hotels, setHotels] = useState([])

    const hotelSelection = () => {
        axios.get("https://desarrollo.api.noktos.com/api/admin/hosts/50", getConfig())
            .then(res => setHotels(res.data.host[selectedIndex]))
    }

    useEffect(() => {
            hotelSelection()
    }, [])

    console.log(hotels);
    console.log(selectedIndex);

    return (
        <div className='modalContainer'>

            <h1>Ventana Modal</h1> <br />
            <button onClick={() => setModalOn(false) && setListVis(true)}>Cerrar busqueda por id</button>

            <section>
                <h3>Agrega un id</h3>
                {/* <button onClick={() => setId(id - 1)} disabled={parseInt(id) === 0}>Prev</button> */}
                {/* <input type="text" value={selectedIndex} onChange={e => setId(e.target.value)} /> <br /> <hr /> */}
                {/* <button onClick={() => setId(id + 1)} disabled={parseInt(id) === 49}>Next</button> */}
            </section>

            <section className='infoContainer'>

                <h2>Nombre del Hotel: </h2>
                <h3>{hotels?.nombre}</h3>
                <h2>Informacion general:</h2>
                <ul>
                    <li><b>Email: </b> {hotels?.email}</li>
                    <li><b>Telefono: </b>{hotels?.telefono}</li>
                    <li> <b></b>{hotels?.["codigo_postal_id"]}</li>
                </ul>     </section>

            <h2>Amenidades</h2>

            <section className='amenidadesContainer'>
                <ul>{hotels?.amenidades?.map(amenidad => (
                    <li key={amenidad.id}>
                        <h3>{amenidad.nombre}</h3>
                        <h5>Regalmento y descriptcion</h5>
                        {amenidad.descripcion}
                    </li>
                ))}</ul>
            </section>


            <h2>Habitaciones</h2>
            <section className='habitacionesContainer'>
                <ul>{hotels?.habitaciones?.map(habitacion => (
                    <li key={habitacion.id}>
                        <h3>Tipos de habitaciones: </h3>
                        <b>{habitacion.nombre}</b>
                        <h3>Cantidad de habitaciones disponibles: </h3>
                        <b>{habitacion.cantidad}</b>
                        <h6>Habitaciones muestra </h6>
                        <img src={habitacion.imagenes[0]?.path} alt="habitacionImg" /> <br /> <hr />
                    </li>
                ))}</ul>
            </section>


            <h2>Fotos del hotel: </h2>
            <section className='carouselContainer'>
                <ul className='carousel'>
                    {
                        hotels?.imagenes?.map(imagen => (
                            <li className='listItem' key={imagen.id}>
                                <img className='imagenesHotel' src={imagen.path} alt="" />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
};

export default Modals;