import { Request, Response } from "express";
import { CreateContactUseCase } from "../../application/methods/CreateContactUseCase";

export class CreateContactController {
    constructor(readonly createContactUseCase: CreateContactUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try {
            const user = await this.createContactUseCase.run(

                data.id_user,
                data.name,
                data.cellphone,
            );

            if (user) {
                res.status(201).send({
                    status: "success",
                    data: {
                        id: user?.id,
                        id_user: user?.id_user,
                        name: user?.name,
                        cellphone: user?.cellphone
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