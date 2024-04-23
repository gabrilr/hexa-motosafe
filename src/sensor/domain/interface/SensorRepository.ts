
import { Sensor } from "../entity/Sensor";

export interface SensorRepository{
    createEventSensor( id: string, data: string, date: string ): Promise<Sensor | null>;

    getAllEventsSensor( date: string): Promise<Sensor[] | null>;
}