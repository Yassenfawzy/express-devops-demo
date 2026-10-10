const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const env = process.env.NODE_ENV || 'development';
  res.status(200).json({ 
    status: 'success', 
    message: 'DevOps Pipeline is Working Smoothly! 🚀',
    environment: env 
  });
});
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}