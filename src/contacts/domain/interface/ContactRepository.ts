import { Contact } from "../entity/Contact";

export interface ContactRepository{
    createContact(
        id: string, 
        id_user: string,
        name: string,
        cellphone: string,
    ): Promise<Contact | null>;
    
    getContactsByIDUser(
        id_user: string
    ): Promise< Contact[] | null>;
}