import { GetDateService } from "../../application/services/GetDateService";
import moment from "moment"; "moment";
export class GetDateHelper implements GetDateService{
    getDate(): string {
        
        const fechaActual = moment();
        return fechaActual.format('L');
    }
    getHour(): string {
        
        const fechaActual = moment();
        return fechaActual.format('LTS');
    }
}