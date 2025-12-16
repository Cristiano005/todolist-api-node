import { Router } from "express";
import { index, store, update, destroy } from "./controllers/TaskController.js";
import { validateBody } from "./middlewares/taskMiddleware.js";

const router = Router();

router.get("/tasks", index);
router.post("/tasks", validateBody, store);
router.put("/tasks/:id", validateBody, update);
router.delete("/tasks/:id", destroy)

export default router;