
# 📝 CRUD App using Node.js, Express, and EJS

This is a simple **CRUD (Create, Read, Update, Delete)** application built using:

- **Node.js** (JavaScript runtime environment),
- **Express.js** (web framework for Node.js),
- **EJS** (template engine for rendering HTML),
- along with **UUID** for unique ID generation and **method-override** for HTTP PATCH/DELETE support.

This app allows users to **create**, **view**, **edit**, and **delete** posts.

---

## 📌 Features

- ✅ Display all posts
- ➕ Create new posts
- ✏️ Edit/update posts
- ❌ Delete posts
- 🎨 Styled using HTML/CSS
- 🔄 Supports RESTful routing (GET, POST, PATCH, DELETE)

---

## 🛠️ Technologies Used

| Technology     | Purpose                           |
|----------------|-----------------------------------|
| Node.js        | JavaScript runtime for backend    |
| Express.js     | Routing and middleware framework  |
| EJS            | HTML templating engine            |
| Method-Override| Enable PATCH/DELETE in HTML forms |
| UUID           | Generate unique post IDs          |
| HTML & CSS     | Frontend design                   |

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
