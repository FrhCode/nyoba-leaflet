import { faker } from "@faker-js/faker";

import { mappableInstance } from "./variable";

class User implements mappableInstance {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor() {
        this.name = [
            faker.name.firstName("male"),
            faker.name.lastName("male"),
        ].join(" ");
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return "ini Orang Bro";
    }
}

export default User;
