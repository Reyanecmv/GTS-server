import * as Amqp from "amqp-ts";
import { Message } from 'amqp-ts';
import { AlertService } from './AlertService';

class Queue {
	connection = new Amqp.Connection("amqps://digtmuzi:WOolK8L8EHqfQXmbCcsOALxMOUIoAt8a@cow.rmq2.cloudamqp.com/digtmuzi");
	exchange = this.connection.declareExchange("Test1");
	queue = this.connection.declareQueue("test1");
	alertService = AlertService.getInstance();
	public jobs: any;

	constructor() {
		this.queue.bind(this.exchange);
		this.queue.activateConsumer((message:Message) => {
			this.alertService.insert(message.getContent());
		}, {noAck: true}).then()
	}
}

export default new Queue;
