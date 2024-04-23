
import { Contact } from "../../domain/entity/Contact";
import { ContactRepository } from "../../domain/interface/ContactRepository";

export class GetContactsByIDUserUseCase {
    constructor(readonly contactRepository: ContactRepository){}

    async run( id_user: string ): Promise<Contact[] | null> {
        try {
            const result = await this.contactRepository.getContactsByIDUser(id_user);
            return result;
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}