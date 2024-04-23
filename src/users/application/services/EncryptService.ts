export interface EncryptService{
    encryptPassword(
        password: string
    ): string;
    authPassword(
        word: string,
        password: string
    ): boolean | null;
}