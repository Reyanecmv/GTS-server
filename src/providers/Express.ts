

import * as express from 'express';

import Locals from './Locals';
import Routes from './Routes';
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from '../exception/Handler';
import Log from '../middlewares/Log';

class Express {
	/**
	 * Create the express object
	 */
	public express: express.Application;

	/**
	 * Initializes the express server
	 */
	constructor () {
		this.express = express()

		this.mountDotEnv();
		this.mountMiddlewares();
		this.mountRoutes();
	}

	private mountDotEnv (): void {
		this.express = Locals.init(this.express);
	}

	/**
	 * Mounts all the defined middlewares
	 */
	private mountMiddlewares (): void {
		this.express = Bootstrap.init(this.express);
	}

	/**
	 * Mounts all the defined routes
	 */
	private mountRoutes (): void {
		this.express = Routes.mountApi(this.express);
	}

	/**
	 * Starts the express server
	 */
	public init (): any {

		const port: number = Locals.config().port;

		// Registering Exception / Error Handlers
		this.express.use(ExceptionHandler.logErrors);
		this.express.use(ExceptionHandler.clientErrorHandler);
		this.express.use(ExceptionHandler.errorHandler);
		this.express = ExceptionHandler.notFoundHandler(this.express);

		this.express.listen(port, () => {
			Log.info(`⚡️[server]: Server is running at https://localhost:${port}`)
		});
	}
}

/** Export the express module */
export default new Express();
