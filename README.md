# ⚙️ Portfolio Backend API

A scalable backend built with **Node.js**, **Express.js**, and **MongoDB** to manage portfolio data, projects, and contact messages.

## ✨ Features

* 🔐 JWT Authentication (Admin)
* 📂 Project Management APIs (CRUD)
* 📩 Contact Form API
* 🛡️ Secure middleware & error handling
* ⚡ RESTful API architecture

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Postman (Testing)

## 📦 Installation

```bash
git clone https://github.com/your-username/portfolio-backend.git
cd portfolio-backend
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_SECRET_KEY=your_admin_key
```

## 📁 Folder Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── utils/
 └── app.js
```

## 🔗 API Endpoints

### 🔹 Projects

* GET /api/projects → Get all projects
* POST /api/projects → Add project (Admin)
* PUT /api/projects/:id → Update project
* DELETE /api/projects/:id → Delete project

### 🔹 Contact

* POST /api/contact → Send message

## 🔐 Admin Access

Pass admin key in headers:

```
admin-secret-key: your_admin_key
```

## 🚀 Deployment

You can deploy using:

* Render
* Railway
* AWS

## 📌 Future Improvements

* Rate limiting
* Email notifications (Nodemailer)
* Analytics dashboard

---

⭐ Star this repo if you find it useful!
