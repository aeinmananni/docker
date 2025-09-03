import express from "express";
import compression from "compression";
import cors from "cors";
import DOCKER_ROUTES from "../routes/docker.routes";
const app = express();
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/docker-course", DOCKER_ROUTES);

export default app;
