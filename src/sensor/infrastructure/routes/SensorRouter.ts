import express from "express";
import { createSensorController } from "../dependency/DependenciesSensor";
import { getSensorByDateController } from "../dependency/DependenciesSensor";

export const sensorRouter = express.Router();

sensorRouter.post("/event", createSensorController.run.bind(createSensorController));
sensorRouter.post("/:date", getSensorByDateController.run.bind(getSensorByDateController));