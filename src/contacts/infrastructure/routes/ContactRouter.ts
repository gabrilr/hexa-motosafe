import express from "express";
import { createContactController } from "../dependency/DependenciesContact";
import { getContactByIDUserController } from "../dependency/DependenciesContact";


export const contactRouter = express.Router();

contactRouter.post("/", createContactController.run.bind(createContactController));
contactRouter.post("/:id_user", getContactByIDUserController.run.bind(getContactByIDUserController));