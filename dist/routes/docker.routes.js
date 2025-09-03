"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docker_controller_1 = require("../controller/docker.controller");
const router = (0, express_1.Router)();
router.get("/GET/All", docker_controller_1.handelGetDockerImage);
exports.default = router;
