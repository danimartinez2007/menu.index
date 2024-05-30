let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`Se añadió ${item} al carrito.`);
}
