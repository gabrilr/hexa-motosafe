import { User } from "../entity/User";

export interface UserRepository{
    createUser(
        id_user: string,
        email: string,
        name: string,
        cellphone: string,
        password: string
    ): Promise<User | null>;
    getUserByEmail(email: string): Promise< User | null>;
}