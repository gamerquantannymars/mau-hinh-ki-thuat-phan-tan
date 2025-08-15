const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/orderdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/orders', (req, res) => {
  res.send('Đây là danh sách đơn hàng');
});

app.listen(3002, () => {
  console.log('Order service đang chạy trên port 3002');
});
