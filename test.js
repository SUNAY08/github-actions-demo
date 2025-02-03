const app = require('./app');
const request = require('supertest');
describe('GET /', () => {
  it('responds with "Hello CI/CD!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello CI/CD!');
  });
});