let cartCount = 0;
function addToCart(productName, productPrice) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

