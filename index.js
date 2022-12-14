import { Application } from "https://deno.land/x/oak/mod.ts";
import { PORT } from "./config.js";
import router from "./router.js";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`server is running on the http://localhost:${PORT}`);
await app.listen({ port: PORT });
