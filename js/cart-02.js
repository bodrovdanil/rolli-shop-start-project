const cartWrapper = document.querySelector('.cart-wrapper');
// отслеживаем клик на странице.
window.addEventListener('click', function (event) {
// Проверяем что клик был совершен по кнопке "добавить в корзину".
    if (event.target.hasAttribute('data-cart')) {
        // находим карточку с товаром, внутри которой был совершен клик.
        const card = event.target.closest('.card');
        // собираем данные с этого товара и записываем их в единый объект.
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInbox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
		//проверяем есть ли уже такой товар в корзине 
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		// если товар есть в корзине.
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			//если товара нет в корзине.
		
			//  Собранные данные подставим в шаблон для товара в корзине.
       		 const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>
										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>`;

    		// отобразим товар в корзине
    		cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);
		}
		// сбрасываем счетчик добавленного товара на "1".
		card.querySelector('[data-counter]').innerText = '1';
		// отображение статуса корзины пустая / полная.
		toggleCartStatus();

		// пересчет общей стоимости товаров в корзине.
		calcCartPriceAndDelivery()
}
})