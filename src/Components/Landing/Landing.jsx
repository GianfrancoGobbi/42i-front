import { React,  useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getlocations } from '../../../src/redux/actions/index';
import './Landing.css';
import brand from './42i.jpg'
import { Link } from 'react-router-dom';

function Landing() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getlocations());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <div className="Landing">
            <img src={brand} alt={"brand"} className="Landing-image" />
            {/* {<button onClick={consolegea}>hola</button>} */}
            <Link to="/home">
                <button className='Landing-btn'>INGRESAR</button>
            </Link>
        </div>
    );
}

export default Landing;

