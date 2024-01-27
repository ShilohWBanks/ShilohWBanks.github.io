document.addEventListener('DOMContentLoaded', displayCart);

function displayCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.quantity} ${item.product}(s)`;
            cartList.appendChild(li);
        });
    }
}