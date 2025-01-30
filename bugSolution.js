const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(next);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;
  if (success) {
    return;
  } else {
    throw new Error('Something went wrong!');
  }
}