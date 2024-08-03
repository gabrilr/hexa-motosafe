import { Request, Response } from "express";
import { CreateEventSensorUseCase } from "../../application/methods/CreateEventSensorUseCase";

export class CreateEventSensorController {
    constructor(readonly createEventSensorUseCase: CreateEventSensorUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;
        console.log(data);

        try {
            const sensor = await this.createEventSensorUseCase.run(
                data.id_user,
                data.event,
                data.x,
                data.y,
                data.dist,
                data.lat,
                data.lng,
                data.spd,
                data.datetime,
            );
            
            if (sensor) {
                res.status(201).send({
                    status: "success",
                    data: {
                        id: sensor?.id,
                        id_user: sensor?.id_user,
                        event: sensor?.event,
                        lat: sensor?.lat,
                        lng: sensor?.lng
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