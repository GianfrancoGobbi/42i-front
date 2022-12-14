import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
    Marker,
    NavigationControl,
    FullscreenControl,
    GeolocateControl,
} from "react-map-gl";
import "./Mapbox.css";


function Mapbox({ latitud, longitud, name }) {


    return (
        <div>
            <h3 className="mapbox-title">{name}</h3>
            <Map

                mapboxAccessToken="pk.eyJ1IjoiZ2lhbmZyYW5jb2dvYmJpIiwiYSI6ImNsNnVlcGJqNzFxZjkzZG9kZmE3cnRnNncifQ.VVT3kUg1xSB-MrfzaLlgsA"
                style={{
                    width: (window.innerWidth > 525 ? "350px" : "100vw"),
                    height: "300px",
                    borderRadius: "5px",
                    border: "0px solid red",
                    margin: "5px",
                }}
                initialViewState={{
                    longitude: longitud,
                    latitude: latitud,
                    zoom: 12.5
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <Marker longitude={longitud} latitude={latitud} />
                <NavigationControl position="bottom-right" />
                <FullscreenControl />

                <GeolocateControl />
            </Map>
        </div>
    );
}

export default Mapbox;
