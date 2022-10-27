import { FILE_PATH } from "../../config.js";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export default async ({ request, response }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  try {
    const values = await request.body().value;
    const title = values.title;

    const data = await Deno.readFile(FILE_PATH);
    const todo = JSON.parse(decoder.decode(data));

    const newTodo = { id: todo.length + 1, title, completed: false };

    todo.push(newTodo);

    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todo)));

    response.status = 201;
    response.body = { status: "success", newTodo };
  } catch (error) {
    console.log(error);

    response.status = 500;
    response.body = { status: "failed to create a new todo", error };
  }
};
