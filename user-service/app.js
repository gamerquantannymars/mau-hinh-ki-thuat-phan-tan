const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/users', (req, res) => {
  res.send('Đây là danh sách người dùng');
});

app.listen(3000, () => {
  console.log('User service đang chạy trên port 3000');
});
