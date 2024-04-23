import { Request, Response } from "express";
import { GetSensorByDateUseCase } from "../../application/methods/GetSensorByDateUseCase";

export class GetUserByEmailController {
    constructor(readonly getSensorByDateUseCase: GetSensorByDateUseCase){}

    async run(req: Request, res: Response){
        
        const date = req.body;

        if (!date) {
            return res.status(400).send({
                status: "error",
                message: "email o contraseña estan incorrectos",
            });
        }

        try {
            const eventSensor = await this.getSensorByDateUseCase.run(
                date
            );
            
            if (eventSensor) {
                res.status(200).send({
                    status: "success",
                    data: eventSensor.map((contact: any) => {
                        return{
                            id: contact.id,
                            id_user: contact.id_user,
                            name: contact.name,
                            cellphone: contact.cellphone
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