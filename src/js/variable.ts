const GOOGLE_MAPS_API_KEY = "AIzaSyBZqRJpxU_lypMVdcwF--EGxVkSTh-5fBM";

type mappableInstance = {
    location: {
        latitude: number;
        longitude: number;
    };
    markerContent(): string;
};
export { GOOGLE_MAPS_API_KEY, mappableInstance };
