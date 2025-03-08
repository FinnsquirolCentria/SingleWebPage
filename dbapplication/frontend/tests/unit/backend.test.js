const request = require('supertest');
const path = require('path');


const app = require(path.join(__dirname, '../../../backend/server.js'));

describe('API Endpoints', () => {
    it('should return all users from database', async () => {
        const res = await request(app).get('/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.users)).toBeTruthy();
    });
});
