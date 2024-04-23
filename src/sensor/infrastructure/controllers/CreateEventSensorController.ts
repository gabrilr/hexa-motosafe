import { Request, Response } from "express";
import { CreateEventSensorUseCase } from "../../application/methods/CreateEventSensorUseCase";

export class CreateUserController {
    constructor(readonly createEventSensorUseCase: CreateEventSensorUseCase){}

    async run(req: Request, res: Response){
        const data = req.body.data;
        console.log(data);
        
        try {
            const sensor = await this.createEventSensorUseCase.run(
                data
            );

            if (sensor) {
                res.status(201).send({
                    status: "success",
                    data: {
                        id: sensor?.id,
                        data: sensor?.data,
                        date: sensor?.date
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: {
                        error: "Usuario no registrado"
                    }
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: {
                    error: "Error."
                },
                messages: error
            });
        }
    }
}