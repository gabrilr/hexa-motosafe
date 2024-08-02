import { query } from "../../../database/database";
import { Contact } from "../../domain/entity/Contact";
import { ContactRepository } from "../../domain/interface/ContactRepository";

export class MySqlContactRepository implements ContactRepository {
    
    async createContact( id: string, id_user: string, name: string, email: string ): Promise<Contact | null> {

        const sql = "INSERT INTO contacts (id, id_user, name, email) VALUES (?, ?, ?, ?)";
        const params: any[] = [id, id_user, name, email];

        try {
            const [result]: any = await query(sql, params);
            return new Contact(id, id_user, name, email);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getContactsByIDUser( id_user: string ): Promise<Contact[] | null> {
        
        const sql = "SELECT * FROM contacts WHERE id_user = ?";
        const params: any[] = [id_user];
        
        try {
            const [result]: any = await query(sql, params);
            // Convertir cada objeto en instancias de Contacts
            const contactsArray = result.map((item: any) => {
                return new Contact(
                    item.id,
                    item.id_user,
                    item.name,
                    item.email
                );
            });
            console.log(contactsArray);
            
                // Utiliza contactsArray según tus necesidades, por ejemplo, devolverlo desde una función
            return contactsArray;
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}