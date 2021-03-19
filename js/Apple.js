class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        return this.weight === 0;
    }
}
