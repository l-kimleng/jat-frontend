export class Location {
    _id: String;
    city: String;
    state: String;
    zipCode: String;

    constructor() {

    }

    toString() {
        return `${this.city}, ${this.state} ${this.zipCode}`;
    }
}