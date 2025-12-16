import express from "express";
import router from "./router.js";

const app = express();

app.use(express.json()) // it allows read data from request.body
app.use(router);

export default app;