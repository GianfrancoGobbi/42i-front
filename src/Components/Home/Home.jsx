import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './Home.css';
import orderlocation from './algoritmo.js';
import contar from './algoritmocuenta';
import buscarplace from './algoritmoplace';
import Mapbox from '../Mapbox/Mapbox';



function Home() {
    let alllocations = useSelector(state => state.locations);
    const [cuentalocality, setcuentalocality] = useState([]);
    const [sur, setSur] = useState([]);
    // eslint-disable-next-line 
    const [statelocality, setStateLocality] = useState(false);
    const [stateoriginal, setStateoriginal] = useState(false);
    const [statesur, setStatesur] = useState(false);
    const [localities, setLocalities] = useState([]);

    useEffect(() => {
        console.log(alllocations);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function Changelocations() {
        // eslint-disable-next-line 
        let newlocations = alllocations.map(location => orderlocation(location))
        setStateLocality(false);
        setStatesur(false);
        setStateoriginal(true);
        setLocalities([])
    }

    function countlocality() {
        setLocalities([])
        let newlocations = alllocations.map(location => orderlocation(location)).filter(locality => locality.type === "country" && locality.region.place.locality.neighborhood).map((l) => l.region.place.locality.name)
        let cuenta = contar(newlocations)
        setcuentalocality(cuenta);
        setStateLocality(true);
        setStateoriginal(false);
        setStatesur(false);
        console.log(cuenta)
        setLocalities(alllocations.map(location => orderlocation(location)).filter(locality => locality.type === "country" && locality.region.place.locality))
    }

    function surplaces() {
        setSur(buscarplace(alllocations.map(location => orderlocation(location))))
        setStatesur(true);
        setStateLocality(false);
        setStateoriginal(false)
        setLocalities([])
    }

    return (
        <div className="Home">
            <div className="Home-buttons">
                <button className='Landing-btn' onClick={Changelocations}>Carga Original</button>
                <button className='Landing-btn' onClick={countlocality} >Locality con más neighborhood</button>
                <button className='Landing-btn' onClick={surplaces} >Listado places</button>
            </div>
            {<div className="Home-maps">
                {stateoriginal && alllocations.map((l) => <Mapbox key={l.name} name={l.name} longitud={l.center.split(":")[1]} latitud={l.center.split(":")[0]} />)}
            </div>
            }

            {
                <div className="Home-maps">
                    {
                        localities.map((l, indice) => {
                            return l.region.place.locality.name === cuentalocality[0].nombre && indice === 0 &&
                                <div className="locality-container">
                                    <h2 className="locality-h2">{cuentalocality[0].valor + " neighborhood"} </h2>
                                    <Mapbox key={l.name} name={l.region.place.locality.name} longitud={l.region.place.locality.center.split(":")[1]} latitud={l.region.place.locality.center.split(":")[0]} />
                                </div >
                        })
                    }
                </div>
            }

            {statesur && <div className="Home-maps">
                {sur.map((l) => <Mapbox key={l.name} name={l.name} longitud={l.center.split(":")[1]} latitud={l.center.split(":")[0]} />)}
            </div>
            }

        </div>
    );
}

export default Home;

