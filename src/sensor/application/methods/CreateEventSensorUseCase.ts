import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";
import { CreateIDServiceHelper } from "../../infrastructure/helpers/CreateIDServiceHelper";
import { GetDateHelper } from "../../infrastructure/helpers/GetDateHelper";

export class CreateEventSensorUseCase {
    constructor( readonly userRepository: SensorRepository, readonly createIDServiceHelper: CreateIDServiceHelper, 
        readonly getDateHelper: GetDateHelper ){ }

    async run(data: string): Promise<Sensor | null> {
        
        let id = this.createIDServiceHelper.createID();
        const date = await this.getDateHelper.getDate();
        
        try {
            const eventSensor : any = await this.userRepository.createEventSensor(
                id,
                data, 
                date
            );
            return eventSensor;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}