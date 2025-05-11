# todo-backend

这是我第一个全栈实践项目的后端部分，使用 Node.js + Express.js 构建的 API 服务。

## 🚀 项目功能

- 提供基本路由（`/`, `/about`）
- 用于学习 RESTful API 架构
- 为前端应用提供数据支持

## 🛠️ 技术栈

- Node.js
- Express.js
- Git / GitHub
- 使用 SSH 部署 & 版本管理

## 📂 结构说明

todo-backend/
├── index.js          # 入口文件
├── package.json      # 项目配置与依赖
└── .gitignore        # 忽略 node_modules 等

## 💻 快速启动

```bash
npm install     # 安装依赖
node index.js   # 启动服务器（默认端口 3001）

访问：
	•	http://localhost:3001/        → 欢迎信息
	•	http://localhost:3001/about   → 项目信息页

🧠 开发者笔记

这是一个练手项目，为后续实现完整的 CRUD 操作、用户认证、数据库操作（PostgreSQL）打下基础。