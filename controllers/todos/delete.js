import { FILE_PATH } from "../../config.js";
export default async ({ response, params }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  try {
    const data = await Deno.readFile(FILE_PATH);
    const todo = JSON.parse(decoder.decode(data));

    const updatedTodos = todo.filter(
      (mytodo) => mytodo.id !== Number(params.id)
    );

    await Deno.writeFile(
      FILE_PATH,
      encoder.encode(JSON.stringify(updatedTodos))
    );
    console.log(params.id);
    response.status = 200;
    response.body = { status: "success", data: updatedTodos };
  } catch (error) {
    console.log(error);

    response.status = 502;
    response.body = { status: "failed to delete", error };
  }
};
