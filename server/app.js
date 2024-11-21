const express = require('express');
const path = require('path');

const app = express();

// Sử dụng cổng từ biến môi trường hoặc mặc định là 3000
const port = process.env.PORT || 3000;

// Cung cấp các file tĩnh như HTML
app.use(express.static(path.join(__dirname, '../public')));

// Cấu hình endpoint chính cho ứng dụng
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Lắng nghe yêu cầu trên cổng mà Render cung cấp (hoặc 3000 nếu không có)
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
