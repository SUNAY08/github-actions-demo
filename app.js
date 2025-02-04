const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; text-align: center; padding: 50px; }
          h1 { color: #2c3e50; }
          p { font-size: 18px; color: #34495e; }
          .button { padding: 10px 20px; font-size: 16px; background-color: #3498db; color: white; border: none; cursor: pointer; }
          .button:hover { background-color: #2980b9; }
        </style>
      </head>
      <body>
        <h1>Hi</h1>
        <button class="button" onclick="window.location.href='/health'">Check Health Status</button>
      </body>
    </html>
  `);
});

// Enhanced health route with status and a timestamp
app.get('/health', (req, res) => {
  const status = 'UP';
  const timestamp = new Date().toISOString();
  res.json({
    status: status,
    message: `Everything is running smoothly.`,
    timestamp: timestamp,
    uptime: process.uptime(),
    info: 'If you encounter any issues, please reach out to support.'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; 
