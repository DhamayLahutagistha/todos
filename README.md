# 🚀 NestJS API Project

# 1. Identitas
- **Nama** : Dhamay Lahutagistha Pramu Putri  
- **Kelas** : XI RPL 1

# 2. Deskripsi
API sederhana untuk mengelola todo list menggunakan NetJS.
API ini memiliki fitur Create, Read, Update, dan Delete data todo, 

## Daftar Endpoint

| Method | URL                      | Body (JSON)                                   | Deskripsi                        |
|--------|--------------------------|----------------------------------------------|---------------------------------|
| GET    | http://localhost:3000/todos       | -                                            | Menampilkan semua todo           |
| GET    | http://localhost:3000/todos/:id   | -                                            | Menampilkan todo berdasarkan ID  |
| POST   | http://localhost:3000/todos       | { "title": "Belajar API", "status": "pending" } | Menambah todo baru               |
| PUT    | http://localhost:3000/todos/:id   | { "title": "Update Todo", "status": "done" }    | Memperbarui todo berdasarkan ID |
| DELETE | http://localhost:3000/todos/:id   | -                                            | Menghapus todo berdasarkan ID    |

# Screenshot Hasil Uji Coba API di Postman

### 📌 Contoh: GET `/api/items`
![GET Items](./src/ss/Get.png)

### 📌 Contoh: GETBYID `/api/items/id`
![GET Items](./src/ss/Get2.png)

### 📌 Contoh: POST `/api/items`
![POST Items](./src/ss/Post.png)

### 📌 Contoh: PUT `/api/items/:id`
![PUT Items](./src/ss/Put.png)

### 📌 Contoh: DELETE `/api/items/:id`
![DELETE Items](./src/ss/Delete.png)


