const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Basic Route
app.get('/', (req, res) => res.send('Hello CI/CD!'));

// Health Check Route
app.get('/health', (req, res) => res.json({ status: 'UP' }));

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Export for testing
