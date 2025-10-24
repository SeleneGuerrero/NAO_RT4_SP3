# 🍽️ Restaurant Review & Owner Management API

This project is a **RESTful API built with Node.js, Express, and MongoDB (Mongoose)** that allows you to manage restaurant reviews and restaurant owners.
It includes functionality for CRUD operations, CSV data import, and rating analysis per restaurant.

---

## 🚀 Features

### 🔹 Reviews

* Import reviews from a CSV file
* Create, read, update, and delete reviews
* Retrieve reviews by restaurant
* Calculate average restaurant rating

### 🔹 Owners

* Import restaurant owners from a CSV file
* Manage restaurant and owner information
* Retrieve reviews for each restaurant owned
* Calculate average restaurant ratings
* Full CRUD support for owners

---

## 🧱 Project Structure

```
src/
├── config/
│   └── db.js
├── controllers/
│   ├── controller.js           # Review controller
│   └── owner.controller.js     # Owner controller
├── models/
│   ├── user.model.js           # Review model
│   └── owner.model.js          # Owner model
├── routes/
│   ├── user.routes.js          # Routes for reviews
│   └── owner.routes.js         # Routes for owners
├── restaurants.csv             # Dataset for reviews
└── owners.csv                  # Dataset for restaurant owners
app.js
.env
package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SeleneGuerrero/NAO_RT4_SP3
cd NAO_RT4_SP3
```

### 2️⃣ Install dependencies

Make sure you have **Node.js (v22 or higher)** installed, then run:

```bash
npm install
```

### 3️⃣ Required dependencies

The following libraries are required:

| Library           | Purpose                                |
| ----------------- | -------------------------------------- |
| **express**       | Create and manage the REST API         |
| **mongoose**      | Connect and interact with MongoDB      |
| **dotenv**        | Load environment variables from `.env` |
| **csv-parser**    | Parse CSV files for data import        |
| **fs (built-in)** | Read and write local files             |

You can install them all with:

```bash
npm install express mongoose dotenv csv-parser
```

---

## 🧩 Environment Variables

Create a `.env` file in the project root and configure:

```
MONGO_URI=mongodb://127.0.0.1:27017/restaurantDB
PORT=3000
```

---

## ▶️ Running the Project

```bash
node app.js
```

Your server will start on:

```
http://localhost:3000
```

---

## 📚 API Endpoints

### 🟢 Reviews

| Method   | Endpoint              | Description             |
| -------- | --------------------- | ----------------------- |
| `GET`    | `/api/reviews`        | Get all reviews         |
| `GET`    | `/api/reviews/:id`    | Get a review by ID      |
| `POST`   | `/api/reviews`        | Add a new review        |
| `PUT`    | `/api/reviews/:id`    | Update a review         |
| `DELETE` | `/api/reviews/:id`    | Delete a review         |
| `POST`   | `/api/reviews/import` | Import reviews from CSV |

---

### 🟣 Owners

| Method   | Endpoint                               | Description                         |
| -------- | -------------------------------------- | ----------------------------------- |
| `POST`   | `/api/owners/import`                   | Import owners from CSV              |
| `POST`   | `/api/owners`                          | Add a new owner/restaurant          |
| `PUT`    | `/api/owners/:id`                      | Update owner information            |
| `GET`    | `/api/owners/reviews/:restaurant_name` | Get all reviews for a restaurant    |
| `GET`    | `/api/owners/rating/:restaurant_name`  | Get average rating for a restaurant |
| `DELETE` | `/api/owners/:id`                      | Delete an owner/restaurant          |

---

## 🧪 Testing with Postman

### Import Data

* **POST** `http://localhost:3000/api/reviews/import`
* **POST** `http://localhost:3000/api/owners/import`

### Get Reviews

* **GET** `http://localhost:3000/api/reviews`
* **GET** `http://localhost:3000/api/owners/reviews/Shake Shack)`

### Update Owner

* **PUT** `http://localhost:3000/api/owners/1`

  ```json
  {
    "phone": "+1-212-555-1111"
  }
  ```

---

## 🧾 Example CSV Structures

### `restaurants.csv`

| review_id | user_name | restaurant_name | rating | comment        | city        | cuisine  |
| --------- | --------- | --------------- | ------ | -------------- | ----------- | -------- |


### `owners.csv`

| owner_id | name         | restaurant_name | email                 | phone        | city        | cuisine |
| -------- | ------------ | --------------- | --------------------- | ------------ | ----------- | ------- |


---

## 🧠 Tech Stack

* **Node.js** — Runtime environment
* **Express.js** — API framework
* **MongoDB + Mongoose** — Database layer
* **CSV Parser** — File import
* **Postman** — Testing tool

---

## 👨‍💻 Author

**Selene Guerrero**

Backend Development — Node.js | Express | MongoDB

---




