let cart = [];

function addToCart() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (quantity > 0) {
        const item = { product, quantity };
        cart.push(item);
        alert(`${quantity} ${product}(s) added to the cart!`);
    } else {
        alert('Please enter a valid quantity.');
    }
}