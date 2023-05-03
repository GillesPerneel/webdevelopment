const prices = {
    espresso: {
        small: 2.5,
        medium: 3,
        large: 3.5
    },
    cappuccino: {
        small: 3,
        medium: 3.5,
        large: 4
    },
    latte: {
        small: 3.5,
        medium: 4,
        large: 4.5
    }
};

const orders = JSON.parse(localStorage.getItem('orders')) || [];
let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
let totalPriceToday = JSON.parse(localStorage.getItem('totalPriceToday')) || 0;

function calculateTotalPrice() {
    const type = document.getElementById('type').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const price = prices[type][size];
    const orderPrice = price * quantity;
    localStorage.setItem('totalPriceToday',JSON.stringify(totalPriceToday));
    totalPriceToday += orderPrice;
    document.getElementById('total-price').textContent = totalPriceToday.toFixed(2);
    totalPrice += orderPrice;
    const order = { type, size, quantity, price, orderPrice };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    updateOrdersList();
}

function resetTotalPrice() {
    localStorage.removeItem('orders');
    localStorage.removeItem('totalPrice');
    orders.length = 0;
    totalPrice = 0;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    updateOrdersList();
}

function updateOrdersList() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';
    orders.forEach((order) => {
        const orderElement = document.createElement('li');
        orderElement.textContent = `${order.quantity} ${order.size} ${order.type} - $${order.orderPrice.toFixed(2)}`;
        ordersList.appendChild(orderElement);
    });
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    calculateTotalPrice();
});

// Reset the total price and orders list at the end of the day
const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const timeUntilTomorrow = tomorrow.getTime() - now.getTime();
setTimeout(resetTotalPrice, timeUntilTomorrow);
