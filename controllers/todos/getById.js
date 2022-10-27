import { FILE_PATH } from "../../config.js";
export default async ({ response, params }) => {
  const decoder = new TextDecoder();
  try {
    const data = await Deno.readFile(FILE_PATH);
    const todo = JSON.parse(decoder.decode(data));

    const Todo = todo.find((mytodo) => {
      return mytodo.id === Number(params.id);
    });

    if (!Todo) {
      response.status = 404;
      response.body = {
        message: "No task found related to given ID",
      };
      return;
    }
    response.status = 200;
    response.body = { status: "success", data: Todo };
  } catch (error) {
    console.log(error);

    response.status = 502;
    response.body = { status: "failed to get todo list", error };
  }
};
