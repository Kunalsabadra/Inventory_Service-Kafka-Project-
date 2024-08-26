class PaymentEvent {

    constructor(orderId, status, amount, quantity, itemId) {
        this.order = orderId,
            this.status = status,
            this.amount = amount,
            this.quantity = quantity,
            this.itemId = itemId
    }


};