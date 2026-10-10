const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 OK and correct JSON response with environment', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('DevOps Pipeline is Working Smoothly! 🚀');
    expect(res.body).toHaveProperty('environment');   
  });
});