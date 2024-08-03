import { CreateEventSensorController } from "../controllers/CreateEventSensorController";
import { CreateEventSensorUseCase } from "../../application/methods/CreateEventSensorUseCase";
import { GetEventSensorByIDController } from "../controllers/GetEventSensorByIDController";
import { GetEventSensorByIDUseCase } from "../../application/methods/GetSensorByIDUseCase";
import { MySqlDataSensorRepository } from "../repository/MySqlDataSensorRepository";
import { EncryptServiceHelper } from "../helpers/EncryptServiceHelper";
import { CreateIDServiceHelper } from "../helpers/CreateIDServiceHelper";
import { CreateTokenServiceHelper } from "../helpers/CreateTokenServiceHelper";

export const mySqlDataSensorRepository = new MySqlDataSensorRepository();

export const encryptServiceHelper = new EncryptServiceHelper();
export const createIDServiceHelper = new CreateIDServiceHelper();
export const createTokenServiceHelper = new CreateTokenServiceHelper();

export const createEventSensorUseCase = new CreateEventSensorUseCase(mySqlDataSensorRepository, createIDServiceHelper);
export const getEventSensorByIDUseCase = new GetEventSensorByIDUseCase(mySqlDataSensorRepository);

export const createEventSensorController = new CreateEventSensorController(createEventSensorUseCase);
export const getEventSensorByIDController = new GetEventSensorByIDController(getEventSensorByIDUseCase);