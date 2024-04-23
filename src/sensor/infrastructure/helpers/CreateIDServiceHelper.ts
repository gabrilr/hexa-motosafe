import { CreateIDService } from "../../application/services/CreateIDService";
import { v4 as uuidv4 } from "uuid";

export class CreateIDServiceHelper implements CreateIDService{
    createID(): string {
        const newID = uuidv4();
        return newID;
    }
}