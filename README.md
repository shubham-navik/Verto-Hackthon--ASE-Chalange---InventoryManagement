# Inventory Management API

## 📖 Project Description

The **Inventory Management API** is a Node.js and MongoDB-based backend system to manage products efficiently.  
It allows you to **create, update, delete, and fetch products**, as well as monitor **low-stock items** based on a configurable threshold.

### Key Features
- Add, update, and remove products  
- Fetch all products or a single product by ID  
- Track products that are running low in stock  
- RESTful API design with clear endpoints  

---

## ⚙️ Setup & Run Locally

### Prerequisites
- Node.js (v16 or above)  
- MongoDB (local or Atlas)  
- npm (comes with Node.js)  

## Steps
1. **Clone the repository**
```bash
git clone https://github.com/shubham-navik/Verto-Hackthon--ASE-Chalange---InventoryManagement
cd backend
```
2. **Install dependencies**
 ```
npm install express mongoose dotenv cors nodemon router

```
   
3. **Configure enviroment variable**
      -  Create a .env file in the backend folder:Copy and Paste it
 ```
 PORT=4000
 DB_URL=<your-mongodb-connection-string>
 ```
4. **Start server**
     - for develoment
 ```
 nodemon index.js
 ```

## Api End Point
base url ``` http://localhost:4000 ```
| Method | Endpoint                     | Description                                     |
| ------ | ---------------------------- | ----------------------------------------------- |
| POST   | `/api/v1/product/create`     | Create a new product                            |
| DELETE | `/api/v1/product/delete/:id` | Delete a product by `productId`                 |
| PUT    | `/api/v1/product/update/:id` | Update a product by `productId`                 |
| GET    | `/api/v1/product/:id`        | Fetch a single product by `productId`           |
| GET    | `/api/v1/product/products`   | Fetch all products                              |
| GET    | `/api/v1/product/lowstock`   | Fetch products with `stockQuantity < threshold` |

## Running test Cases
  Example JSON to create a product:
```
    {
      "productId": 1,
      "name": "Laptop",
      "description": "15.6-inch gaming laptop with 16GB RAM, 512GB SSD",
      "stockQuantity": 12
    }
```
## 💡Assumptions & Design Choices
   - productId is unique and numeric.
   - threshold defaults to 5 if not provided.
   - MongoDB is used for flexible schema design and scalability.
   - API follows RESTful conventions.
   - Endpoints handle CRUD operations efficiently.
     
## 💡 Assumptions & Design Choices
  - productId is unique and numeric.
  - threshold defaults to 5 if not provided, allowing easy low-stock monitoring.
  - MongoDB is used for flexible schema design and scalability.
  - API uses RESTful conventions for simplicity and compatibility with frontend frameworks.
  - Endpoints are designed to handle basic CRUD operations efficiently.

## 🔗 Dependencies
- `express` → Server framework
- `mongoose` → MongoDB ODM
- `dotenv` → Environment variable management
- `cors` → Enable cross-origin requests
- `nodemon` → Development server auto-restart

## 👨‍💻 Author
Shubham Navik
