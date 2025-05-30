# 📝 CRUD App using Node.js, Express, and EJS

This is a simple **CRUD (Create, Read, Update, Delete)** application built with **Node.js**, **Express.js**, and **EJS** templating engine. It allows users to manage posts dynamically through the web interface.

---

## 📌 Features

- ✅ View all posts
- ➕ Add new posts
- ✏️ Edit/update existing posts
- ❌ Delete posts
- 🔐 Unique ID generation using UUID
- 🧠 RESTful routing with method override for PUT & DELETE
- 🎨 Responsive layout with EJS templates and CSS

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **EJS**
- **Method-Override**
- **UUID**
- **HTML5/CSS3**

---

## 📁 Folder Structure

crud-app/
│
├── views/ # EJS Templates
│ ├── index.ejs # Homepage showing all posts
│ ├── new.ejs # Form to create a post
│ ├── edit.ejs # Form to edit a post
│ └── show.ejs # Single post detail view
│
├── public/ # Static assets like CSS
│ └── style.css
│
├── app.js # Main server file with all logic
├── posts.json # Local JSON file acting as a database
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

## 🚀 Getting Started

### 📦 Prerequisites

Ensure Node.js and npm are installed on your system.

```bash
node -v
npm -v
