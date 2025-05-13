const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./db');

app.use(express.json());

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

app.get('/todos', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM todos');
      res.json(result.rows);
    } catch (err) {
      console.error('❌ 查询失败', err.stack);
      res.status(500).send('服务器内部错误');
    }
  });


app.post('/todos', async (req, res) => {
  const { title, completed } = req.body;
  
  try {
    const result = await db.query(
      'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
      [title, completed]
    );
    res.status(201).json(result.rows[0]);
    }catch (err) {
      console.error('❌ 插入失败', err.stack);
      res.status(500).send('服务器内部错误');
    }
  }
);

