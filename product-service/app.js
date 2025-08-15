const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/productdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/products', (req, res) => {
  res.send('Đây là danh sách sản phẩm');
});

app.listen(3001, () => {
  console.log('Product service đang chạy trên port 3001');
});
