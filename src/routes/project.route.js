import { createProject,getAllProjects,updateProject,deleteProject } from "../controllers/project.controller.js";
import { Router } from "express";
import adminMiddleware from "../middlewares/admin.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/create", adminMiddleware, upload.single("imageUrl"), createProject);
router.get("/all", getAllProjects);
router.put("/update/:id", adminMiddleware, upload.single("imageUrl"), updateProject);
router.delete("/delete/:id", adminMiddleware, deleteProject);

export default router;