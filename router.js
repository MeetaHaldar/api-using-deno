import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import getTodos from "./controllers/todos/get.js";
import postTodos from "./controllers/todos/post.js";
import delTodos from "./controllers/todos/delete.js";
import putTodo from "./controllers/todos/put.js";
import getById from "./controllers/todos/getById.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "hello there this is a todo list using DENO";
});

router.get("/todos", getTodos);
router.post("/todos", postTodos);
router.delete("/todos/:id", delTodos);
router.put("/todos/:id", putTodo);
router.get("/todos/:id", getById);

export default router;
