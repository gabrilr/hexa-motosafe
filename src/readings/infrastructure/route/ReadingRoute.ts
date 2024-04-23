import express from "express";

import { createReadingController } from "../dependency/DependenciesReading";
import { getAllByDateController } from "../dependency/DependenciesReading";

export const readingRouter = express.Router();

readingRouter.post("/", createReadingController.run.bind(createReadingController));
readingRouter.get("/:date", getAllByDateController.run.bind(getAllByDateController));