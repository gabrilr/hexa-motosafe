import express from "express";
import { createEventSensorController } from "../dependency/DependenciesSensor";
import { getEventSensorByIDController } from "../dependency/DependenciesSensor";

export const sensorRouter = express.Router();

sensorRouter.post("/", createEventSensorController.run.bind(createEventSensorController));
sensorRouter.post("/:id", getEventSensorByIDController.run.bind(getEventSensorByIDController));