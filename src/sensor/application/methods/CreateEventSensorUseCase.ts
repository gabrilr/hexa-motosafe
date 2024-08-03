import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";
import { CreateIDServiceHelper } from "../../infrastructure/helpers/CreateIDServiceHelper";
import { SendNotificationEmailHelper } from "../../infrastructure/helpers/SendNotificationEmailHelper";

export class CreateEventSensorUseCase {
    constructor( readonly sensorRepository: SensorRepository, readonly createIDServiceHelper: CreateIDServiceHelper, readonly SendNotificationEmailHelper){ }

    async run(id_user:string, event: string, x: string, y: string,
        dist: string, lat: string, lng: string, spd: string, datetime: string): Promise<Sensor | null> {
        
        let id = this.createIDServiceHelper.createID();
        
        try {
            const eventSensor : any = await this.sensorRepository.createEventSensor(
                id, id_user, event, x, y,
                dist, lat, lng, spd, datetime
            );
            return eventSensor;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}