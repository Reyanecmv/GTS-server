import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';
import * as bodyParser from "body-parser";

import apiRouter from './../routes/Api';

class Routes {
	public mountApi(_express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;
		Log.info('Routes :: Mounting API Routes...');

        _express.use(bodyParser.json());
        _express.use(bodyParser.urlencoded({'extended':true}));
        _express.use(bodyParser.json({ type: 'application/vnd.api+json' }));

		return _express.use(`/${apiPrefix}`, apiRouter);
	}
}

export default new Routes;
