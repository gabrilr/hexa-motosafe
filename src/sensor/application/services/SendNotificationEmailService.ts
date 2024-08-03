export interface SendNotificationEmailService {
    sendNotificationEmail(
        email: string, namecli: string, name: string, event: string, date: string, vel: string, lat: string, lng: string
    ): boolean;
}