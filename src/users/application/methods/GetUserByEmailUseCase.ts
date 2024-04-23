
import { UserRepository } from "../../domain/interface/UserRepository";
import { EncryptServiceHelper } from "../../infrastructure/helpers/EncryptServiceHelper";
import { CreateTokenServiceHelper } from "../../infrastructure/helpers/CreateTokenServiceHelper";

export class GetUserByEmailUseCase {
    constructor(readonly userRepository: UserRepository, readonly encryptServiceHelper: EncryptServiceHelper,
        readonly createTokenServiceHelper: CreateTokenServiceHelper
    ){}

    async run( email: string, password: string ): Promise<string | null> {
        try {
            const result: any | null = await this.userRepository.getUserByEmail(email);
    
            if (result) {
                const verify: boolean = await this.encryptServiceHelper.authPassword(password, result[0].password);
                if (verify) {
                    const token = await this.createTokenServiceHelper.createToken(result[0].id_user);
                    return token;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}