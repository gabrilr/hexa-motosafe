import { Reading } from '../../domain/entity/Reading';

export interface SendDataService{
    sendData(reading: Reading): string;
}