import { Request, Response } from "express";
import { GetContactsByIDUserUseCase } from "../../application/methods/GetContactByIDUserUseCase";

export class GetContactByIDUserController {
    constructor(readonly getContactsByIDUserUseCase: GetContactsByIDUserUseCase){}

    async run(req: Request, res: Response){
        const id_user = req.params.id_user;
        
        if (!id_user) {
            return res.status(400).send({
                status: "error",
                message: "Error al obtener el id de busqueda",
            });
        }

        try {
            const contacts = await this.getContactsByIDUserUseCase.run(
                id_user
            );
            
            if (contacts) {
                res.status(200).send({
                    status: "success",
                    data: contacts.map((contact: any) => {
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