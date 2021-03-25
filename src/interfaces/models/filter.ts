
import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import * as assert from 'assert';
import Log from '../../middlewares/Log';
import Locals from '../../providers/Locals';
import { AlertType } from './alert'

export enum PropertyType {
    GREATER_THEN,
    LESSER_THEN,
    EQUAL,
    BETWEEN
}

export enum Operator {
    AND,
    OR
}

const DSN_URL = Locals.config().mongooseUrl;

mongoose.connect(DSN_URL, (err: MongoError) => {
    assert.strictEqual(null, err);
    Log.info('Connected to mongo server at: ' + DSN_URL);
});


const PropertyOptionsSchema = new mongoose.Schema({
    propertyName: { type: PropertyType },
    isBoolean: Boolean,
    booleanValue: Boolean,
    firstValue: Number,
    secondValue: Number,
    logicalOperator: { type: Operator }
});

const PropertiesSchema = new mongoose.Schema({
    property: String,
    selectedPropertyOptions: [PropertyOptionsSchema]
});

export const PropertySchema = new mongoose.Schema({
    name: String,
    alertType: { type: AlertType, required: true },
    properties: [PropertiesSchema]
});

const Property = mongoose.model('Property', PropertySchema)
export default Property;
