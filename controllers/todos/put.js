import { FILE_PATH } from "../../config.js";
export default async ({ request, response, params }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  try {
    const values = await request.body().value;
    const title = await values.title;
    const completed = await values.completed;

    const data = await Deno.readFile(FILE_PATH);
    const todo = JSON.parse(decoder.decode(data));

    const updatedTodos = todo.map((mytodo) => {
      if (mytodo.id === Number(params.id)) {
        return { ...mytodo, title, completed };
      }
      return mytodo;
    });

    await Deno.writeFile(
      FILE_PATH,
      encoder.encode(JSON.stringify(updatedTodos))
    );

    response.status = 204;
    response.body = { status: "success", data: updatedTodos };
  } catch (error) {
    response.status = 502;
    response.body = { status: "failed to update", error };
  }
};
