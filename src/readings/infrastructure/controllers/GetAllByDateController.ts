import { Request, Response } from "express";
import { GetAllByDateUseCase } from "../../application/methods/GetAllByDateUseCase";

export class GetAllByDateController {
    constructor (readonly getAllByDateUseCase: GetAllByDateUseCase){}

    async run(req: Request, res: Response) {
        const date = req.params.date;
        try {
            const readings = await this.getAllByDateUseCase.run(date);
            if (readings) {
                res.status(200).json({
                    status: "success",
                    data: readings.map((reading: any) => {
                        return {
                            id: reading.id,
                            date: reading.date,
                            time: reading.time,
                            weight: reading.weight
                        };
                    })
                });
            }else{
                res.status(204).send({
                    status: "error",
                    message: "There are no records of that date"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error, sin contenido",
                message: error
            })
        }
    }
}