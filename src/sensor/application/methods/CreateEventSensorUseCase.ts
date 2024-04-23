import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";
import { CreateIDServiceHelper } from "../../infrastructure/helpers/CreateIDServiceHelper";
import { GetDateHelper } from "../../infrastructure/helpers/GetDateHelper";

export class CreateEventSensorUseCase {
    constructor( readonly sensorRepository: SensorRepository, readonly createIDServiceHelper: CreateIDServiceHelper, 
        readonly getDateHelper: GetDateHelper ){ }

    async run(data: string): Promise<Sensor | null> {
        
        let id = this.createIDServiceHelper.createID();
        const date = await this.getDateHelper.getDate();
        const hour = await this.getDateHelper.getHour();
        
        try {
            const eventSensor : any = await this.sensorRepository.createEventSensor(
                id,
                data,
                date,
                hour
            );
            return eventSensor;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}