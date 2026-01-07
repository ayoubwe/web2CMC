import express from 'express';
import BarberController from '../controllers/barberController';

const router = express.Router();
const barberController = new BarberController();

const setRoutes = (app) => {
    router.get('/barbers', barberController.getBarbers.bind(barberController));
    router.post('/barbers', barberController.addBarber.bind(barberController));

    app.use('/api', router);
};

export default setRoutes;