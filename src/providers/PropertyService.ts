import Property from '../interfaces/models/filter';
import { MongoError } from 'mongodb';

export class PropertyService {
    private static instance: PropertyService;

    private constructor() {}

    public static getInstance(): PropertyService {
        if (!PropertyService.instance) {
            PropertyService.instance = new PropertyService();
        }

        return PropertyService.instance;
    }

    public remove(queryParams): any {
        return new Promise( (resolve, reject) => {
            Property.deleteOne(  { _id: queryParams.id }).then( () => {
                resolve();
            });
        });
    }

    public insert(propertyContent : any): any {
        let property = new Property(propertyContent);

        property.save((err: MongoError) => {
            if (err) {
                throw err;
            }
        });

        return property;
    }

    public get(): any {
        return new Promise( (resolve, reject) => {
            Property.find((err: MongoError, response: any) => {
                if (err) {
                    throw err;
                }
                resolve(response);
            });
        });
    }
}
