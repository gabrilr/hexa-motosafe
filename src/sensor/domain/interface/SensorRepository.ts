
import { Sensor } from "../entity/Sensor";

export interface SensorRepository{
    createEventSensor( id:string, id_user:string, event: string, x: string, y: string,
        dist: string, lat: string, lng: string, spd: string, date: string ): Promise<Sensor | null>;

    getAllEventsSensor( id_user: string ): Promise<Sensor[] | null>;
}