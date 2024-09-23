//добавляем прослушку на всем окне.
window.addEventListener("click", function (event) {
    // объявляем переменную для счетчика.
    let counter;
    // проверяем клик строго по кнопкам плюс или минус.
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим обертку счетчика.
        const counterwrapper = event.target.closest('.counter-wrapper');
        // находим див с числом счетчика.
        counter = counterwrapper.querySelector('[data-counter]');
    }
    //проверяем является ли элемент по которому был совершен клик кнопкой плюс.
    if (event.target.dataset.action === 'plus') {
        // увеличиваем текст в счетчике на 1.
        counter.innerText = ++counter.innerText;
    }
    //проверяем является ли элемент по которому был совершен клик кнопкой минус.
    if (event.target.dataset.action === 'minus') {

        // проверяем чтобы счетчик был больше чем 1.
        if (parseInt(counter.innerText) > 1) {
            // уменьшаем текст в счетчике на 1.
            counter.innerText = --counter.innerText;
            // проверка на товар который находится в корзине.
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            //удаляем товар из корзины.
            event.target.closest('.cart-item').remove();

            // отображение статуса корзины пустая / полная.
            toggleCartStatus();
            // Пересчет общей стоимости товаро в вкорзине.
            calcCartPriceAndDelivery();
        }
        
    }
    // Проверяем клик на + или - внутри корзины.
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      // Пересчет общей стоимости товаро в вкорзине.
      calcCartPriceAndDelivery();
    }
});
