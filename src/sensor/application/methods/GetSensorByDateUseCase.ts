
import { Sensor } from "../../domain/entity/Sensor";
import { SensorRepository } from "../../domain/interface/SensorRepository";
import { EncryptServiceHelper } from "../../infrastructure/helpers/EncryptServiceHelper";
import { CreateTokenServiceHelper } from "../../infrastructure/helpers/CreateTokenServiceHelper";

export class GetSensorByDateUseCase {
    constructor(readonly sensorRepository: SensorRepository,
        readonly createTokenServiceHelper: CreateTokenServiceHelper
    ){}

    async run( date: string ): Promise<Sensor[] | null> {
        try {
            const result: any | null = await this.sensorRepository.getAllEventsSensor(date);
    
            if (result) {
                
                return null;
            }
            return[];

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}