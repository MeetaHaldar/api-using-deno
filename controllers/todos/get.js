import { FILE_PATH } from "../../config.js";
export default async ({ response }) => {
  try {
    const decoder = new TextDecoder();

    const data = await Deno.readFile(FILE_PATH);
    const todo = JSON.parse(decoder.decode(data));

    response.status = 200;
    response.body = { status: "success", todo };
  } catch (error) {
    response.status = 500;
    response.body = { status: "failed", todo: [] };
  }
};
