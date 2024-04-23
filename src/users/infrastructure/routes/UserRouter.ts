import express from "express";
import { createUserController } from "../dependency/DependenciesUser";
import { getUserByEmailController } from "../dependency/DependenciesUser";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.post("/:email", getUserByEmailController.run.bind(getUserByEmailController));