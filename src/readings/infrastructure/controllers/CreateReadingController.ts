import { Request, Response } from "express";
import { CreateReadingUseCase } from "../../application/methods/CreateReadingUseCase";

export class CreateReadingController {
    constructor(readonly createreadingUseCase: CreateReadingUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try {
            const reading = await this.createreadingUseCase.run(
                data.weight
            );

            if (reading) {
                res.status(201).send({
                    status: "success",
                    data: {
                        date: reading?.date,
                        time: reading?.time,
                        weight: reading?.weight
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: "Non-aggregated reading"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}