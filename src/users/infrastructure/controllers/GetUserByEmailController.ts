import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "../../application/methods/GetUserByEmailUseCase";

export class GetUserByEmailController {
    constructor(readonly getUserByEmailUseCase: GetUserByEmailUseCase){}

    async run(req: Request, res: Response){
        const email = req.params.email;
        const data = req.body;

        if (!email || !data.password) {
            return res.status(400).send({
                status: "error",
                message: "email o contraseña estan incorrectos",
            });
        }

        try {
            const result = await this.getUserByEmailUseCase.run(
                email,
                data.password
            );
            if (result != null) {
                res.status(200).send({
                    status: "success",
                    data: {
                        message: "Conectado",
                        token: result
                    },
                });
            }else{
                res.status(204).send({
                    status: "error",
                    data: {
                        message: "email no registrado o contraseña incorrecta."
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