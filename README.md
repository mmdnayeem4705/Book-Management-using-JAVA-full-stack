===========================================
📚 Book Management System - Full Stack App
===========================================

A complete Book Management System built using:
- ⚛️ React.js (Frontend)
- ☕ Spring Boot (Backend - Java)
- 🐬 MySQL (Database)
- 🧪 Postman (for API testing)

-------------------------------------------
📌 Features
-------------------------------------------
✅ View list of all books  
✅ Add new books  
✅ Update existing book details  
✅ Delete books  
✅ React communicates with Spring Boot APIs  
✅ Spring Boot stores data in MySQL DB  
✅ Fully working REST APIs with proper CORS setup  
✅ Postman-ready for backend testing

-------------------------------------------
🧰 Technologies Used
-------------------------------------------
- React.js (Hooks, Components, JSX)
- Spring Boot (Spring Web, JPA, REST)
- MySQL 8+
- Postman
- Git/GitHub (Version Control)

-------------------------------------------
📁 Folder Structure
-------------------------------------------

📂 Book Management System/
├── 📁 book-management-backend/         ← Spring Boot App
│   ├── controller/                     ← REST API Controllers
│   ├── service/                        ← Business Logic
│   ├── model/                          ← JPA Entity
│   ├── repository/                     ← JPA Repository
│   └── application.properties          ← DB Config
├── 📁 book-management-frontend/        ← React App
│   ├── components/                     ← AddBookForm, BookList, etc.
│   └── App.js                          ← Main App Layout

-------------------------------------------
🛠️ Backend Setup (Spring Boot + MySQL)
-------------------------------------------

✅ Step 1: Create Database in MySQL
-------------------------------------------
```sql
CREATE DATABASE bookdb;
````

## ✅ Step 2: Configure DB in `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bookdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

## ✅ Step 3: Run Backend

Via Terminal:

```
./mvnw spring-boot:run
```

Or via IntelliJ/Eclipse:
Right-click `BookManagerApplication.java` → Run

🟢 Backend runs on: `http://localhost:8080`

---

## 💻 Frontend Setup (React.js)

✅ Step 1: Navigate to frontend

```
cd book-management-frontend
```

✅ Step 2: Install dependencies

```
npm install
```

✅ Step 3: Run frontend

```
npm start
```

🟢 Frontend runs on: `http://localhost:3000`

---

## 🔁 Full Stack Integration

* React fetches & posts data via REST APIs to Spring Boot.
* Spring Boot performs DB operations using JPA.
* MySQL stores all book data.
* CORS enabled via `@CrossOrigin` in controller:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

---

## 🧪 API Endpoints for Postman

📬 POST: Add Book
URL: `http://localhost:8080/api/books`
Body:

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "A book on software craftsmanship."
}
```

📥 GET: Get All Books
URL: `http://localhost:8080/api/books`

✏️ PUT: Update Book
URL: `http://localhost:8080/api/books/1`
Body:

```json
{
  "title": "Clean Coder",
  "author": "Robert Martin",
  "description": "Updated book"
}
```

❌ DELETE: Delete Book
URL: `http://localhost:8080/api/books/1`

---

## 📷 Screenshot & Output

* ✅ React UI: Add + Display + Delete Book
* ✅ Postman: Test all APIs
* ✅ MySQL: `SELECT * FROM book;` to view data

---

## 📦 Deployment (Conceptual)

✅ Build React using:

```
npm run build
```

✅ Copy contents of `build/` to:

```
book-management-backend/src/main/resources/static
```

✅ Serve React via Spring Boot (if needed)

---

## 👨‍💻 Author

M Mohammed Nayeem
GitHub: [https://github.com/mmdnayeem4705](https://github.com/mmdnayeem4705)
LinkedIn: [https://www.linkedin.com/in/mulla-mohammed-nayeem-09b33a361/](https://www.linkedin.com/in/mulla-mohammed-nayeem-09b33a361/)

---

## ✅ Status

Project: ✅ Completed
Stack: Full Stack (React + Java + MySQL)
Ready for API testing, DB integration, and real-world enhancements

```

---

Let me know if you'd like the same `README` in `README.md` (for GitHub with markdown formatting) or want a zip of this entire project structure for upload/submission.
```
