export class User {
    constructor(
        readonly id_user: string,
        readonly email: string,
        readonly name: string,
        readonly cellphone: string,
        readonly password: string
    ){}
}