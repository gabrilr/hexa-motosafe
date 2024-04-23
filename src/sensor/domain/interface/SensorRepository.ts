
import { Sensor } from "../entity/Sensor";

export interface SensorRepository{
    createEventSensor( id: string, 
        data: string, date: string, hour: string ): Promise<Sensor | null>;

    getAllEventsSensorByDate( date: string ): Promise<Sensor[] | null>;
}