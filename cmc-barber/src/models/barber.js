class Barber {
    constructor(name, specialty, experience) {
        this.name = name;
        this.specialty = specialty;
        this.experience = experience;
    }

    static validate(barber) {
        if (!barber.name || !barber.specialty || !barber.experience) {
            throw new Error('All fields are required');
        }
    }

    // Additional methods for interacting with the database can be added here
}

module.exports = Barber;