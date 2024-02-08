const express = require('express');
const app = express();

// Express route to handle requests with a positive integer parameter
app.get('/positive', (req, res, next) => {
  const number = parseInt(req.query.number);
  
  if (Number.isInteger(number) && number > 0) {
    res.send('Success: The number is a positive integer.');
  } else {
    const err = new Error('The number is not a positive integer.');
    err.status = 400;
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
