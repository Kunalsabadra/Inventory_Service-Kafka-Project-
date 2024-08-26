const kafka = require('kafka-node');
const Producer = kafka.Producer;

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const producer = new Producer(client);

producer.on('ready', () => {
    const paymentEvent = JSON.stringify({
        orderId: 'order-123',
        status: 'SUCCESS',
        amount: 150.0,
        quantity: 120,
        itemId: 'item-1'
    })


    const payLoads = [{ topic: 'payments', message: paymentEvent }];

    //below function sends the payload to kafka broker using send method
    producer.send(payLoads, (err, data) => {
        if (err) {
            console.log('Error in sending message', err);
        }
        else {
            console.log('Message sent Successfully', data)
        }
    })
});

producer.on('error', (err) => {
    console.log("Error with kafka producer", err);
})