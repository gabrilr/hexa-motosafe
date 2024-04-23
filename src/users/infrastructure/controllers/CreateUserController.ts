import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/methods/CreateUserUseCase";

export class CreateUserController {
    constructor(readonly createUserUseCase: CreateUserUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try {
            const user = await this.createUserUseCase.run(
                data.email,
                data.name,
                data.cellphone,
                data.password
            );

            if (user) {
                res.status(201).send({
                    status: "success",
                    data: {
                        id_user: user?.id_user,
                        email: user?.email,
                        username: user?.name,
                        cellphone: user?.cellphone,
                        password: user?.password
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