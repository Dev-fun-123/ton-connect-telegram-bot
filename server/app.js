const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Cung cấp các file tĩnh như HTML
app.use(express.static(path.join(__dirname, '../public')));

// Cấu hình endpoint chính cho ứng dụng
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Lắng nghe yêu cầu trên cổng 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
