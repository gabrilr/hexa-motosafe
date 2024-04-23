import { CreateContactController } from "../controllers/CreateContactController";
import { CreateContactUseCase } from "../../application/methods/CreateContactUseCase";
import { GetContactByIDUserController } from "../controllers/GetContactByIDUserController";
import { GetContactsByIDUserUseCase } from "../../application/methods/GetContactByIDUserUseCase";
import { MySqlContactRepository } from "../repository/MySqlContactRepository";
import { CreateIDServiceHelper } from "../helpers/CreateIDServiceHelper";

export const mySqlContactRepository = new MySqlContactRepository();

export const createIDServiceHelper = new CreateIDServiceHelper();

export const createContactUseCase = new CreateContactUseCase(mySqlContactRepository, createIDServiceHelper);
export const getContactsByIDUserUseCase = new GetContactsByIDUserUseCase(mySqlContactRepository);

export const createContactController = new CreateContactController(createContactUseCase);
export const getContactByIDUserController = new GetContactByIDUserController(getContactsByIDUserUseCase);