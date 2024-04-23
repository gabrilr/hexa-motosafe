import { query } from "../../../database/database";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";

export class MySqlUserRepository implements UserRepository {
    
    async createUser( id_user: string, email: string, name: string, cellphone: string, password: string ): Promise<User | null> {

        const sql = "INSERT INTO users (id_user, email, name, cellphone, password) VALUES (?, ?, ?, ?, ?)";
        const params: any[] = [id_user, email, name, cellphone, password];

        try {
            const [result]: any = await query(sql, params);
            return new User(id_user, email, name, cellphone, password);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getUserByEmail(
        email: string
    ): Promise<User | null> {
        const sql = "SELECT id_user, email, name, password FROM users WHERE email = ?";
        const params: any[] = [email];
        
        try {
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}