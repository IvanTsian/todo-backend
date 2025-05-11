const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('欢迎回来，开始了就是胜利!');
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

app.get('/about', (req, res) => {
    res.send('关于我的第一个全栈项目🚀');
});