import { Reading } from "../../domain/entity/Reading";
import { ReadingRepository } from "../../domain/interface/ReadingRepository";
import { GetDateHelper } from "../../infrastructure/helpers/GetDateHelper";
import { SendDataServiceSocket } from "../../infrastructure/serviceSendData/SendDataServiceSocket";

export class CreateReadingUseCase {
    constructor(readonly readingRepository: ReadingRepository, readonly getDateHelper: GetDateHelper,
        readonly sendDataServiceSocket: SendDataServiceSocket
    ){}

    async run(
        weight: number
    ): Promise <Reading | null> {
        const nowDate = await this.getDateHelper.getDate();
        const nowTime = await this.getDateHelper.getHour();
        try {
            const reading: any = await this.readingRepository.createReading(
                nowDate,
                nowTime,
                weight
            );
            console.log(reading);
            if (reading) {
                this.sendDataServiceSocket.sendData(reading);
            }
            return reading;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}