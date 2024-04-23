import { CreateReadingController } from "../controllers/CreateReadingController";
import { CreateReadingUseCase } from "../../application/methods/CreateReadingUseCase";
import { GetAllByDateController } from "../controllers/GetAllByDateController";
import { GetAllByDateUseCase } from "../../application/methods/GetAllByDateUseCase";
import { SendDataServiceSocket } from "../serviceSendData/SendDataServiceSocket";
import { MySqlReadingRepository } from "../respository/MySqlReadingRepository";
import { GetDateHelper } from "../helpers/GetDateHelper";

export const mySqlReadingRepository = new MySqlReadingRepository();
export const getDateHelper = new GetDateHelper();
export const sendDataServiceSocket = new SendDataServiceSocket();

export const createReadingUseCase = new CreateReadingUseCase(mySqlReadingRepository, getDateHelper, sendDataServiceSocket);
export const getAllByDateUseCase = new GetAllByDateUseCase(mySqlReadingRepository);

export const createReadingController = new CreateReadingController(createReadingUseCase);
export const getAllByDateController = new GetAllByDateController(getAllByDateUseCase);