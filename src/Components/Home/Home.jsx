import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './Home.css';
import orderlocation from './algoritmo.js';
import contar from './algoritmocuenta';
import buscarplace from './algoritmoplace';
import Mapbox from '../Mapbox/Mapbox';



function Home() {
    let alllocations = useSelector(state => state.locations);
     // eslint-disable-next-line
    const [locations, setlocations] = useState([]);
    const [cuentalocality, setcuentalocality] = useState([]);
    const [sur, setSur] = useState([]);
    const [statelocality, setStateLocality] = useState(false);
    const [stateoriginal, setStateoriginal] = useState(false);
    const [statesur, setStatesur] = useState(false);

    useEffect(() => {
        console.log(alllocations);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function Changelocations() {
        setcuentalocality([])
        let newlocations = alllocations.map(location => orderlocation(location))
        setlocations(newlocations);
        setStateLocality(false);
        setStatesur(false);
        setStateoriginal(true);
    }

    function countlocality() {
        setlocations([])
        let newlocations = alllocations.map(location => orderlocation(location)).filter(locality => locality.type === "country" && locality.region.place.locality.neighborhood).map((l) => l.region.place.locality.name)
        let cuenta = contar(newlocations)
        setcuentalocality(cuenta);
        setStateLocality(true);
        setStateoriginal(false);
        setStatesur(false);
        console.log(cuenta)
    }

    function surplaces() {
        setSur(buscarplace(alllocations.map(location => orderlocation(location))))
        setStatesur(true);
        setStateLocality(false);
        setStateoriginal(false)
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
                statelocality && cuentalocality.length > 0 && <h1>{cuentalocality[0].nombre + " " + cuentalocality[0].valor + " neighborhood"} </h1>
            }

            {statesur && <div className="Home-maps">
                {sur.map((l) => <Mapbox key={l.name} name={l.name} longitud={l.center.split(":")[1]} latitud={l.center.split(":")[0]} />)}
            </div>
            }

        </div>
    );
}

export default Home;

