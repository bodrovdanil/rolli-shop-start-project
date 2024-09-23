function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    

    // общая стоимость товаров.
    let priceTotal = 0;
    
    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function (item) {
        // Находим количество товара
        const amountEll = item.closest('.cart-item').querySelector('[data-counter]');
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        priceTotal += parseInt(item.innerText) * parseInt(amountEll.innerText);
    });

    // отображаем цену на странице.
    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        // Скрываем / Показываем блок со стоимостью доставки.
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add("none");
    }
    // Указываем стоимость доставки.
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove("free");
        deliveryCost.innerText = "250 ₽";
    }

};