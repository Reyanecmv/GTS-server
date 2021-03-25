
import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import * as assert from 'assert';
import Log from '../../middlewares/Log';
import Locals from '../../providers/Locals';

export enum AlertType {
    ACCESS,
    FIRE,
    SENSOR
}

const DSN_URL = Locals.config().mongooseUrl;
const ALERT_COLLECTION = Locals.config().mongooseCollection;

mongoose.connect(DSN_URL, (err: MongoError) => {
    assert.equal(null, err);
    Log.info('Connected to mongo server at: ' + DSN_URL);
})

export const AlertSchema = new mongoose.Schema({
    alertType: { type: AlertType, required: true },
    doorStatus: { type: Boolean},
    accessAllowed: { type: Boolean},
    doorTooOpen: { type: Boolean},
    date: { type: Date},
    temperature: { type: Number},
    co2Lvl: { type: Number},
    smokeDetectorStatus: { type: Boolean},
    sprinklerStatus: { type: Boolean},
    status: { type: Boolean},
    currentValue: { type: Number},
    alarmStatus: { type: Boolean},
    batteryLevel: { type: Number}
});

const Alert = mongoose.model('Alert', AlertSchema)
export default Alert;
