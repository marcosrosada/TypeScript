export class Developer {
    constructor(name) {
        this._name = name;
    }


    get name() {
        console.log('Get name From Class Developer:', this._name);
        return this._name;
    }
}
