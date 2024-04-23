import { Reading } from "../entity/Reading";

export interface ReadingRepository {
    createReading(
        date: string,
        time: string,
        weight: number
    ): Promise<Reading | null>;
    getAllByDate(date: string): Promise<Reading[] | null>;
}