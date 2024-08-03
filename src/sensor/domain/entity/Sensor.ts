export class Sensor {
    constructor(
        readonly id: string,
        readonly id_user: string,
        readonly event: string,
        readonly x: string,
        readonly y: string,
        readonly dist: string,
        readonly lat: string,
        readonly lng: string,
        readonly spd: string,
        readonly date: string
    ){}
}