import { Router } from "express";
import { handelGetDockerImage } from "../controller/docker.controller";
const router = Router();

router.get("/GET/All", handelGetDockerImage);

export default router;
