import { Request, Response } from "express";
import { GetEventSensorByIDUseCase } from "../../application/methods/GetSensorByIDUseCase";

export class GetEventSensorByIDController {
    constructor(readonly getEventSensorByIDUseCase: GetEventSensorByIDUseCase){}

    async run(req: Request, res: Response){
        const id_user = req.params.id;
        
        if (!id_user) {
            return res.status(400).send({
                status: "error",
                message: "email o contraseña estan incorrectos",
            });
        }

        try {
            const eventSensor = await this.getEventSensorByIDUseCase.run(
                id_user
            );
            
            if (eventSensor) {
                res.status(200).send({
                    status: "success",
                    data: eventSensor.map((sensor: any) => {
                        return{
                            id: sensor.id,
                            id_user: sensor.id_user,
                            event: sensor.event,
                            lat: sensor.lat,
                            lng: sensor.lng,
                            spd: sensor.spd,
                            datetime: sensor.date
                        }
                    })
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: {
                        message: "Contactos de emergencia no obtenidos."
                    },
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrio un error.",
                message: error,
            });
        }
    }
}