Deno, the creation of Ryan Dahl is a simple, modern, and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. As Deno 1.0.0 has released, there is much-awaited curiosity amongst developers around working with this new stack.

When it comes to learning a new language, the first thing that comes to our mind is the creation of a todo app, supporting CRUD functionality. So here we will be creating a very simple Todo application using the Deno.

API | Method | Description
http://localhost:8080/todos/ | GET | Fetch All todos
http://localhost:8080/todos/{id} | GET | Fetch todo by ID
http://localhost:8080/todos/ | POST | Create New todo
http://localhost:8080/todos/{id} | PUT | Update todo by ID
http://localhost:8080/todos/{id} | DELETE | Delete todo by ID

```
deno run --allow-net --allow-read --allow-write index.js

```
