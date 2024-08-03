
import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";

export class GetEventSensorByIDUseCase {
    constructor(readonly sensorRepository: SensorRepository){}

    async run( id_user: string ): Promise<Sensor[] | null> {
        
        try {
            const result = await this.sensorRepository.getAllEventsSensor(id_user);
            return result;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}