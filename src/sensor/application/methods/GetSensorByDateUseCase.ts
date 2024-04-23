
import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";

export class GetSensorByDateUseCase {
    constructor(readonly sensorRepository: SensorRepository
    ){}

    async run( date: string ): Promise<Sensor[] | null> {
        try {
            const result = await this.sensorRepository.getAllEventsSensorByDate(date);
            return result;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}