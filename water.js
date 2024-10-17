class Water {
    constructor(volume, temperature) {
        this.volume = volume;
        this.temperature = temperature;
    }

    mass() {
        return this.volume;
    }

    state() {
        if (this.temperature <= 0) {
            return 'Solid (Ice)';
        } else if (this.temperature < 100) {
            return 'Liquid';
        } else {
            return 'Gas (Steam)';
        }
    }
}

module.exports = Water;