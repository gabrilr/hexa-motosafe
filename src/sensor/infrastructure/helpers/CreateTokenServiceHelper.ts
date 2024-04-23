import { CreateTokenService } from "../../application/services/CreateTokenService";
import jwt from "jsonwebtoken";
const secretWord = process.env.SECRET_WORD ?? "";

export class CreateTokenServiceHelper implements CreateTokenService{
    createToken(id:string): string {
        const token = jwt.sign({id}, secretWord, { expiresIn: '30m'});
        return token;
    }
}