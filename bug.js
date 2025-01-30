const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling that doesn't use next(error) to pass the error to the error handling middleware
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
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