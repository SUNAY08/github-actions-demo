const app = require('./app');
const request = require('supertest');

describe('GET /', () => {
  it('responds with "Hello CI/CD!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);  // Check for 200 OK status
    expect(response.text).toBe('Hello CI/CD!');
  });
});

describe('GET /health', () => {
  it('responds with JSON indicating status UP', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'UP' });
  });
});
