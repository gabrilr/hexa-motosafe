import { Reading } from "../../domain/entity/Reading";
import { ReadingRepository } from "../../domain/interface/ReadingRepository";

export class GetAllByDateUseCase {
    constructor (readonly readingRepository: ReadingRepository){}

    async run(
        date: string
    ): Promise<Reading[] | null>{
        try {
            const result = await this.readingRepository.getAllByDate(date);
            
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}