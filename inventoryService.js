const kafka = require('kafka-node');
const consumer = require('./kafkaConsumer')

const PaymentEvent = require('./paymentEvent')

//Simulate inventory storage
const inventory = {
    'item-1': 100,
    'item-2': 200,
    'item-3': 150
}

const updateInventory = () => {
    const quantityReduce = PaymentEvent.quantity;
    const item = PaymentEvent.itemId
    console.log("processing payment for order id:", PaymentEvent.orderId);

    if (inventory[[item] && PaymentEvent.status === 'SUCCESS']) {
        inventory[item] -= quantityReduce;
    }
    else if (inventory[[item] && PaymentEvent.status !== 'SUCCESS']) {
        console.log("Payment failed Inventory not updated")
    }
    console.log(inventory);
}

consumer.on('message', (message) => {
    try {
        const paymentEvent = JSON.parse(message.value);
        updateInventory(paymentEvent)
    }
    catch (err) {
        console.log('Error processing message:', err);
    }
})

consumer.on('error', (err) => {
    console.log("Error with kafka consumer", err);
})
