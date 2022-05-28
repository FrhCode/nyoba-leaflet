import { faker } from "@faker-js/faker";
import { mappableInstance } from "./variable";

class Company implements mappableInstance {
    name: string;
    phrase: string;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.phrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return "ini Perusahaan Bro";
    }
}

export default Company;
