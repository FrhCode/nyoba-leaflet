import "./css/reset.css";
import "./css/style.css";

// import axios from "axios";
import User from "./js/User";
import Company from "./js/Company";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import MapInstance from "./js/MapInstance";

let map: MapInstance;

const accesGranted = (position: GeolocationPosition) => {
    const {
        coords: { latitude, longitude },
    } = position as GeolocationPosition;

    map = new MapInstance("map", latitude, longitude);

    const user = new User();
    const company = new Company();
    map.addMarker(user, { title: "Ini user bro" });
    map.addMarker(company, { title: "ini perusahaan" });
};

navigator.geolocation.getCurrentPosition(accesGranted);
