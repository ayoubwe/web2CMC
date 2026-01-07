class BarberController {
    constructor(barberModel) {
        this.barberModel = barberModel;
    }

    async getBarbers(req, res) {
        try {
            const barbers = await this.barberModel.findAll();
            res.status(200).json(barbers);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving barbers', error });
        }
    }

    async addBarber(req, res) {
        try {
            const newBarber = await this.barberModel.create(req.body);
            res.status(201).json(newBarber);
        } catch (error) {
            res.status(400).json({ message: 'Error adding barber', error });
        }
    }
}

export default BarberController;