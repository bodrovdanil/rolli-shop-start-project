function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper'); // вызов товаров в корзине.
    const cartEmptyBadge = document.querySelector('[data-cart-empty]'); // вызов сообщения "корзина пуста".
    const orderForm = document.querySelector('#order-form'); // вызов формы заказа.
    // проверяем > товаров в корзине чем 0.
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    // если товаров в корзине не осталось.
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
};