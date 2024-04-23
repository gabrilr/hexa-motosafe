import { EncryptService } from "../../application/services/EncryptService";
import * as bcrypt from 'bcrypt';

const auxSaltRounds = process.env.SALT_ROUNDS ?? "";
const saltRounds = Number(auxSaltRounds);

export class EncryptServiceHelper implements EncryptService{
    encryptPassword(password: string): string {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        return hashedPassword;
    }

    authPassword(providePassword: string, encryptPassword: string): boolean {
        const auth: boolean = bcrypt.compareSync(providePassword, encryptPassword);
        
        return auth;
    }
}