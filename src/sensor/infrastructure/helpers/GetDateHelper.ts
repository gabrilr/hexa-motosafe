import { GetDateService } from "../../application/services/GetDateService";

export class GetDateHelper implements GetDateService{
    getDate(): string {
        const currentDate: Date = new Date();
        const year:number = currentDate.getFullYear();
        const month: number = currentDate.getMonth() + 1;
        const day: number = currentDate.getDate();

        const formattedMonth: string = String(month).padStart(2, '0');
        const formattedDay: string = String(day).padStart(2, '0');

        const date: string = `${year}-${formattedMonth}-${formattedDay}`;
        return date;
    }
    getHour(): string {
        const now: Date = new Date();
        const hours: number = now.getHours();
        const minutes: number = now.getMinutes();
        const seconds: number = now.getSeconds();
        
        const formattedHours: string = String(hours).padStart(2, '0');
        const formattedMinutes: string = String(minutes).padStart(2, '0');
        const formattedSeconds: string = String(seconds).padStart(2, '0');
        
        const time: string = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        return time;
    }
}