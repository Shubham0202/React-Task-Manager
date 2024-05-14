# React Task Manager

This project is a web application for managing tasks, built with React.js on the frontend and Flask (Python) with a MySQL database on the backend.

## Key Technologies
- **Frontend:** React.js
- **Backend:** Flask (Python)
- **Database:** MySQL
- **Additional Libraries:**
  - mysql.connector: Python library for connecting to MySQL databases.
  - Flask-CORS: Enables Cross-Origin Resource Sharing (CORS) for secure API calls between frontend and backend.
  - Flask: Microframework for building web applications in Python.
  - request: Provides access to request data from the frontend.
  - jsonify: Converts Python data structures to JSON for sending responses.

## Features
- **Task Creation:** Create new tasks with descriptions and due dates.
- **Task Management:** View, edit, and delete existing tasks.
- **Task Status:** Mark tasks as completed or incomplete for easy tracking.
- **Optional Authentication:** Implement user authentication for secure task management (consider libraries like Flask-Login or JWT).

## Installation
### Prerequisites:
- Node.js and npm (or yarn) installed on your machine.
- Python and pip installed on your machine.
- MySQL database server running.

### Steps:
1. **Install Dependencies (Frontend):**
   ```bash
   git clone https://github.com/Shubham0202/React-Task-Manager.git
   
2. **Clone the Repository:**
  
  cd React-Task-Manager/frontend
  npm install  # or yarn install

4. **Backend:**
  cd React-Task-Manager/backend
  pip install -r requirements.txt

5. **Configure Database Connection:**
  Update the backend/config.py file with your MySQL database credentials (hostname, username, password, database name).



   
