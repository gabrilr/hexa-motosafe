import { Contact } from "../../domain/entity/Contact";
import { ContactRepository } from "../../domain/interface/ContactRepository";
import { CreateIDServiceHelper } from "../../infrastructure/helpers/CreateIDServiceHelper";

export class CreateContactUseCase {
    constructor(readonly contactRepository: ContactRepository, readonly createIDServiceHelper: CreateIDServiceHelper ){ }

    async run( id_user: string, name: string, email: string): Promise<Contact | null> {
        
        let id = this.createIDServiceHelper.createID();
        try {
            const user: any = await this.contactRepository.createContact(
                id,
                id_user,
                name,
                email,
            );
            return user;
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}