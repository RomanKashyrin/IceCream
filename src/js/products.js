(() => {
  {
  const refs = {
    iceCreamBtn: document.querySelector('[ice-cream-btn]'),
    iceCreamOverlay: document.querySelector('[ice-cream-overlay]'),
    iceCreamBtnRotate: document.querySelector('[ice-cream-btn-rotate]'),
    iceCreamCardActive: document.querySelector('[ice-cream-card-activation]'),
  };

  refs.iceCreamBtn.addEventListener('click', toggleOverlay);

  function toggleOverlay() {
    refs.iceCreamOverlay.classList.toggle('overlay-shown');
    refs.iceCreamBtnRotate.classList.toggle('btn-icon-rotetion');
    refs.iceCreamCardActive.classList.toggle('card-is-active');
    }
  }

  {
    const refs = {
      iceCoffeeBtn: document.querySelector('[ice-coffee-btn]'),
      iceCoffeeOverlay: document.querySelector('[ice-coffee-overlay]'),
      iceCoffeeBtnRotate: document.querySelector('[ice-coffee-btn-rotate]'),
      iceCoffeeCardActive: document.querySelector('[ice-coffee-card-activation]'),
    };

    refs.iceCoffeeBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.iceCoffeeOverlay.classList.toggle('overlay-shown');
      refs.iceCoffeeBtnRotate.classList.toggle('btn-icon-rotetion');
      refs.iceCoffeeCardActive.classList.toggle('card-is-active');
    }
  }

  {
    const refs = {
      milkshakesBtn: document.querySelector('[milkshakes-btn]'),
      milkshakesOverlay: document.querySelector('[milkshakes-overlay]'),
      milkshakesBtnRotate: document.querySelector('[milkshakes-btn-rotate]'),
      milkshakesCardActive: document.querySelector('[milkshakes-card-activation]'),
    };

    refs.milkshakesBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.milkshakesOverlay.classList.toggle('overlay-shown');
      refs.milkshakesBtnRotate.classList.toggle('btn-icon-rotetion');
      refs.milkshakesCardActive.classList.toggle('card-is-active');
    }
  }
}
)();