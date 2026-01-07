const request = require('supertest');
const app = require('../src/index'); // Adjust the path if necessary

describe('Barber API', () => {
    it('should get all barbers', async () => {
        const res = await request(app).get('/api/barbers');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('barbers');
    });

    it('should add a new barber', async () => {
        const newBarber = {
            name: 'John Doe',
            specialty: 'Haircut',
            experience: 5
        };
        const res = await request(app).post('/api/barbers').send(newBarber);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('barber');
        expect(res.body.barber.name).toEqual(newBarber.name);
    });
});