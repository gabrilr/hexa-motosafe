import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserUseCase } from "../../application/methods/CreateUserUseCase";
import { GetUserByEmailController } from "../controllers/GetUserByEmailController";
import { GetUserByEmailUseCase } from "../../application/methods/GetUserByEmailUseCase";
import { MySqlUserRepository } from "../repository/MySqlUserRepository";
import { EncryptServiceHelper } from "../helpers/EncryptServiceHelper";
import { CreateIDServiceHelper } from "../helpers/CreateIDServiceHelper";
import { CreateTokenServiceHelper } from "../helpers/CreateTokenServiceHelper";

export const mySqlUserRepository = new MySqlUserRepository();

export const encryptServiceHelper = new EncryptServiceHelper();
export const createIDServiceHelper = new CreateIDServiceHelper();
export const createTokenServiceHelper = new CreateTokenServiceHelper();

export const createUserUseCase = new CreateUserUseCase(mySqlUserRepository, encryptServiceHelper, createIDServiceHelper);
export const getUserByEmailUseCase = new GetUserByEmailUseCase(mySqlUserRepository, encryptServiceHelper, createTokenServiceHelper);

export const createUserController = new CreateUserController(createUserUseCase);
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase);