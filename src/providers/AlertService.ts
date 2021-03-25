import Alert from '../interfaces/models/alert';
import { MongoError } from 'mongodb';

export class AlertService {
    private static instance: AlertService;

    private constructor() {}

    public static getInstance(): AlertService {
        if (!AlertService.instance) {
            AlertService.instance = new AlertService();
        }

        return AlertService.instance;
    }

    public insert(alertContent : any): any {
        let alert = new Alert(alertContent);

        alert.save((err: MongoError) => {
            if (err) {
                throw err;
            }
        });

        return alert;
    }

    public get(): any {
        return new Promise( (resolve, reject) => {
            Alert.find((err: MongoError, response: any) => {
                if (err) {
                    throw err;
                }
                resolve(response);
            });
        });
    }
}
