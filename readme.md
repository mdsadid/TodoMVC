# TodoMVC with Alpine.js

A simple, lightweight TodoMVC application built using **Alpine.js**.
This project demonstrates a clean implementation of a todo app with local storage, editing, filtering, and smooth UX.

---

## Features

- Add, edit, and delete todos
- Mark todos as completed or active
- Filter todos: All, Active, Completed
- Clear all completed todos
- Auto-save todos in **localStorage** to persist data
- Auto-focus when editing a todo
- Click outside to cancel editing
- Responsive and minimal UI

---

## Installation

Clone the repository:

```
git clone git@github.com:mdsadid/TodoMVC.git
cd TodoMVC
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

Open `http://localhost:5173` in your browser or serve it via a local server.

## Usage

- **Add a todo:** Type in the input field and press **ENTER**.
- **Edit a todo:** Double-click a todo, make your changes, then press **ENTER** to save or **ESC** to cancel.
- **Delete a todo:** Click the **×** icon next to a todo.
- **Mark as complete:** Click the checkbox next to a todo.
- **Toggle all todos:** Click the "Mark all as complete" checkbox.
- **Filter todos:** Use the footer links to view All, Active, or Completed todos.
- **Clear completed todos:** Click the "Clear Completed" button.
