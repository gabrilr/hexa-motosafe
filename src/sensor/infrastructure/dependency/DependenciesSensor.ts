import { CreateUserController } from "../controllers/CreateEventSensorController";
import { CreateEventSensorUseCase } from "../../application/methods/CreateEventSensorUseCase";
import { GetUserByEmailController } from "../controllers/GetEventSensorByDateController";
import { GetSensorByDateUseCase } from "../../application/methods/GetSensorByDateUseCase";
import { MySqlDataSensorRepository } from "../repository/MySqlDataSensorRepository";
import { EncryptServiceHelper } from "../helpers/EncryptServiceHelper";
import { CreateIDServiceHelper } from "../helpers/CreateIDServiceHelper";
import { CreateTokenServiceHelper } from "../helpers/CreateTokenServiceHelper";
import { GetDateHelper } from "../helpers/GetDateHelper";

export const mySqlDataSensorRepository = new MySqlDataSensorRepository();

export const getDateHelper = new GetDateHelper();

export const encryptServiceHelper = new EncryptServiceHelper();
export const createIDServiceHelper = new CreateIDServiceHelper();
export const createTokenServiceHelper = new CreateTokenServiceHelper();

export const createEventSensorUseCase = new CreateEventSensorUseCase(mySqlDataSensorRepository, createIDServiceHelper, getDateHelper);
export const getSensorByDateUseCase = new GetSensorByDateUseCase(mySqlDataSensorRepository, createTokenServiceHelper);

export const createSensorController = new CreateUserController(createEventSensorUseCase);
export const getSensorByDateController = new GetUserByEmailController(getSensorByDateUseCase);