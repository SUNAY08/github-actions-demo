const app = require('./app');
const request = require('supertest');

describe('Express App Routes', () => {

  // Test the root route
  describe('GET /', () => {
    it('should respond with "Hello CI/CD!"', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);  // Check for 200 OK status
      expect(response.text).toBe('Hello CI/CD!');
    });
  });

  // Test the health check route
  describe('GET /health', () => {
    it('should respond with status UP', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'UP' });
    });
  });

});
