import { query } from "../../../database/database";
import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";

export class MySqlDataSensorRepository implements SensorRepository {
    
    async createEventSensor( id:string , data: string, date: string, hour: string ): Promise<Sensor | null> {

        const sql = "INSERT INTO eventsensor (id, data, date, hour) VALUES (?, ?, ?, ?)";
        const params: any[] = [id, data, date, hour];

        try {
            const [result]: any = await query(sql, params);
            return new Sensor(id, data, date, hour);

        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getAllEventsSensorByDate(
        date: string
    ): Promise<Sensor[] | null> {
        const sql = "SELECT id, data, date, hour FROM eventsensor WHERE date = ?";
        const params: any[] = [date];
        
        try {
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}