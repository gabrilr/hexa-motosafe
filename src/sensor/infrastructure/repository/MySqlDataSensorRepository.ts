import { query } from "../../../database/database";
import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";

export class MySqlDataSensorRepository implements SensorRepository {
    
    async createEventSensor( id:string, id_user:string, event: string, x: string, y: string,
        dist: string, lat: string, lng: string, spd: string, date: string ): Promise<Sensor | null> {
        
        //{"event": "caida_parado", "x": -68.36, "y": 0.60, "dist": 75.57, "lat": 16.75, "lng": -93.05, "spd": 2}
        const sql = "INSERT INTO eventsensor (id, id_user, event, x, y, dist, lat, lng, spd, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        const params: any[] = [id, id_user, event, x, y, dist, lat, lng, spd, date];
        
        //params.map(param => console.log("-"+param));
        try {
            const [result]: any = await query(sql, params);
            if (result) {
                
                return new Sensor(id, id_user, event, x, y, dist, lat, lng, spd, date);
            }
            return null;

        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getAllEventsSensor( id_user: string ): Promise<Sensor[] | null> {
        
        const sql = "SELECT id, event, lat, lng, spd, date FROM eventsensor WHERE id_user = ?";
        const params: any[] = [id_user];
        
        try {
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}