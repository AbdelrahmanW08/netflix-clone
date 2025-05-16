import express from 'express';

const app = express();

app.get('/api/v1/signup', (req, res) => {
  res.send('Signup Route');
});

app.get('/api/v1/login', (req, res) => {
  res.send('Login Route');
});

app.get('/api/v1/logout', (req, res) => {
  res.send('Logout Route');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
