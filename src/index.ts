

import * as os from 'os';
import * as cluster from 'cluster';

import App from './providers/App';
import NativeEvent from './exception/NativeEvent';
import Queue from './providers/Queue';

App.clearConsole();
App.loadConfiguration();
App.loadServer();
App.loadDatabase();
App.loadQueue();

