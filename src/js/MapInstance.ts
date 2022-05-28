import * as L from "leaflet";

import { mappableInstance } from "./variable";
class MapInstance {
    private leafletMap: L.Map;

    constructor(elementId: string, latitude: number, longitude: number) {
        this.leafletMap = this.#generateMap(elementId, latitude, longitude);
    }

    #generateMap(
        elementId: string,
        latitude: number,
        longitude: number
    ): L.Map {
        const maps = L.map(elementId)
            .setView([latitude, longitude], 1)
            .on("dblclick", (e) => {
                const {
                    latlng: { lat: latitude, lng: longitude },
                } = e as L.LocationEvent;

                const options: L.MarkerOptions = {
                    title: `latitude : ${latitude} longitude: ${longitude}`,
                    icon: L.icon({
                        iconUrl:
                            "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
                        className: "blinking",
                    }),
                };
            });

        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
        }).addTo(maps);

        return maps;
    }

    addMarker(instance: mappableInstance, options?: L.MarkerOptions): void {
        options = { ...options, title: instance.markerContent() };
        L.marker(
            [instance.location.latitude, instance.location.longitude],
            options
        ).addTo(this.leafletMap);
    }
}

export default MapInstance;
