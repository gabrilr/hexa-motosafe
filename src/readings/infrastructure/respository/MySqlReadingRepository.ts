import { query } from "../../../database/database";
import { Reading } from "../../domain/entity/Reading";
import { ReadingRepository } from "../../domain/interface/ReadingRepository";

export class MySqlReadingRepository implements ReadingRepository{
    async createReading(
        date: string,
        time: string,
        weight: number
    ): Promise<Reading | null>{
        const sql = "INSERT INTO readings (date,time, weight) VALUES (?,?,?)";
        const params: any[] = [date, time, weight];

        try {
            const [result]: any = await query(sql, params);
            return new Reading(result.insertId, date, time, weight);  
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getAllByDate(
        date: string
    ): Promise<Reading[] | null> {
        const sql = "SELECT * FROM readings WHERE date = ? ";
        const params: any[] = [date];

        try {
            const [data]: any = await query(sql, params);
            if (!data || data.length === 0) {
                return [];
            }

            const readings = Object.values(JSON.parse(JSON.stringify(data)));
            return readings.map((reading: any) => 
                new Reading(
                    reading.id,
                    reading.date,
                    reading.time,
                    reading.weight
                )
            );
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}