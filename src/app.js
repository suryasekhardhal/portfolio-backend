import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

import projectRoutes from "./routes/project.route.js";

app.use("/api/v1/projects", projectRoutes);

export default app;