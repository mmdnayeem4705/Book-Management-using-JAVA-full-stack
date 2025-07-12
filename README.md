📚 Book Management System
==============================

A full-stack CRUD application built with:

🖥️ Frontend: React.js  
🔧 Backend: Spring Boot (Java)  
🗄️ Database: MySQL  
🧪 API Testing: Postman

------------------------------
📌 Features
------------------------------
✅ View all books  
✅ Add a new book  
✅ Edit book details  
✅ Delete a book  
✅ Real-time sync between frontend and backend  
✅ Fully working RESTful APIs  
✅ CORS-enabled for frontend-backend communication

------------------------------
🛠️ Technologies Used
------------------------------
- React.js
- Java
- Spring Boot
- Spring Data JPA
- MySQL 8+
- Postman

------------------------------
🔧 Setup Instructions
------------------------------

1. Clone or unzip both frontend and backend folders.

==========================
📦 BACKEND SETUP (Spring Boot)
==========================

Step 1: Create MySQL Database
-----------------------------
CREATE DATABASE bookdb;

Step 2: Update DB credentials
-----------------------------
In `src/main/resources/application.properties`:

  spring.datasource.username=your_mysql_username  
  spring.datasource.password=your_mysql_password

Step 3: Run the backend
-----------------------------
Via Terminal:
  ./mvnw spring-boot:run

Or run `BookManagerApplication.java` in IntelliJ/Eclipse.

Your backend will start at:  
➡️ http://localhost:8080

==========================
💻 FRONTEND SETUP (React.js)
==========================

Step 1: Go to frontend folder
-----------------------------
cd book-management-frontend

Step 2: Install dependencies
-----------------------------
npm install

Step 3: Run frontend
