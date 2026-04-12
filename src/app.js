import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import projectRoutes from "./routes/project.route.js";
import contactRoutes from "./routes/contact.route.js";

app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/contact", contactRoutes);

export default app;