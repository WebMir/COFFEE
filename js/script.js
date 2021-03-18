"use strict"

let drinkLink = document.querySelector('.drink-link');
let bakeLink = document.querySelector('.bake-link');
let dessertLink = document.querySelector('.dessert-link');

let sliderDrink = document.querySelector('.slider__drink');
let sliderBake = document.querySelector('.slider__bake');
let sliderDessert = document.querySelector('.slider__dessert');



let animaCover1 = document.querySelector('.anima-cover1');
let animaPrice1 = document.querySelector('.anima-price1');

let animaCover2 = document.querySelector('.anima-cover2');
let animaPrice2 = document.querySelector('.anima-price2');

let animaCover3 = document.querySelector('.anima-cover3');
let animaPrice3 = document.querySelector('.anima-price3');


// sliderDrink.setAttribute('style', 'opacity: 1;')
drinkLink.classList.add('activ');

// animaCover1.setAttribute('style', 'transform: translateX(0px);')
// animaPrice1.setAttribute('style', 'transform: translateX(0px);')

function functionDrinkLink(){
    // sliderDrink.setAttribute('style', 'opacity: 1;')
    // sliderBake.setAttribute('style', 'opacity: 0;')
    // sliderDessert.setAttribute('style', 'opacity: 0;')
    drinkLink.classList.add('activ');
    bakeLink.classList.remove('activ');
    dessertLink.classList.remove('activ');

    // animaCover1.setAttribute('style', 'transform: translateY(0px);')
    // animaPrice1.setAttribute('style', 'transform: translateY(0px);')

    // animaCover2.setAttribute('style', 'transform: translateY(-800px);')
    // animaPrice2.setAttribute('style', 'transform: translateY(600px);')

    // animaCover3.setAttribute('style', 'transform: translateY(-800px);')
    // animaPrice3.setAttribute('style', 'transform: translateY(600px);')

    animaCover1.classList.add('menu__cover-activ');
    animaPrice1.classList.add('menu__price-activ');

    animaCover2.classList.add('menu__cover-none');
    animaPrice2.classList.add('menu__price-none');

    animaCover3.classList.add('menu__cover-none');
    animaPrice3.classList.add('menu__price-none');

    animaCover1.classList.remove('menu__cover-none');
    animaPrice1.classList.remove('menu__price-none');

    animaCover2.classList.remove('menu__cover-activ');
    animaPrice2.classList.remove('menu__price-activ');

    animaCover3.classList.remove('menu__cover-activ');
    animaPrice3.classList.remove('menu__price-activ');

}
function functionBakeLink(){
    // sliderDrink.setAttribute('style', 'opacity: 0;')
    // sliderBake.setAttribute('style', 'opacity: 1;')
    // sliderDessert.setAttribute('style', 'opacity: 0;')
    drinkLink.classList.remove('activ');
    bakeLink.classList.add('activ');
    dessertLink.classList.remove('activ');

    // animaCover2.setAttribute('style', 'transform: translateY(0px);')
    // animaPrice2.setAttribute('style', 'transform: translateY(0px);')

    // animaCover1.setAttribute('style', 'transform: translateX(-800px);')
    // animaPrice1.setAttribute('style', 'transform: translateX(600px);')

    // animaCover3.setAttribute('style', 'transform: translateX(-800px);')
    // animaPrice3.setAttribute('style', 'transform: translateX(6000px);')

    animaCover1.classList.add('menu__cover-none');
    animaPrice1.classList.add('menu__price-none');

    animaCover2.classList.add('menu__cover-activ');
    animaPrice2.classList.add('menu__price-activ');

    animaCover3.classList.add('menu__cover-none');
    animaPrice3.classList.add('menu__price-none');


    animaCover1.classList.remove('menu__cover-activ');
    animaPrice1.classList.remove('menu__price-activ');

    animaCover2.classList.remove('menu__cover-none');
    animaPrice2.classList.remove('menu__price-none');

    animaCover3.classList.remove('menu__cover-activ');
    animaPrice3.classList.remove('menu__price-activ');

}

function functionListener(){
    // sliderDrink.setAttribute('style', 'opacity: 0;')
    // sliderBake.setAttribute('style', 'opacity: 0;')
    // sliderDessert.setAttribute('style', 'opacity: 1;')
    drinkLink.classList.remove('activ');
    bakeLink.classList.remove('activ');
    dessertLink.classList.add('activ');

    // animaCover3.setAttribute('style', 'transform: translateX(0px);')
    // animaPrice3.setAttribute('style', 'transform: translateX(0px);')

    // animaCover2.setAttribute('style', 'transform: translateX(-800px);')
    // animaPrice2.setAttribute('style', 'transform: translateX(600px);')

    // animaCover1.setAttribute('style', 'transform: translateX(-800px);')
    // animaPrice1.setAttribute('style', 'transform: translateX(600px);')

    animaCover1.classList.add('menu__cover-none');
    animaPrice1.classList.add('menu__price-none');

    animaCover2.classList.add('menu__cover-none');
    animaPrice2.classList.add('menu__price-none');

    animaCover3.classList.add('menu__cover-activ');
    animaPrice3.classList.add('menu__price-activ');


    animaCover1.classList.remove('menu__cover-activ');
    animaPrice1.classList.remove('menu__price-activ');

    animaCover2.classList.remove('menu__cover-activ');
    animaPrice2.classList.remove('menu__price-activ');

    animaCover3.classList.remove('menu__cover-none');
    animaPrice3.classList.remove('menu__price-none');

}


drinkLink.addEventListener('click', () => {

    functionDrinkLink()

})

bakeLink.addEventListener('click', () => {

    functionBakeLink()

})

dessertLink.addEventListener('click', () => {

    functionListener()

})



let buttonLeft = document.querySelector('.button-left');
let buttonRight = document.querySelector('.button-right');



buttonLeft.addEventListener('click', () => {

    if (drinkLink.classList[2] === 'activ') {
        functionListener()
    } else if (bakeLink.classList[2] === 'activ') {
        functionDrinkLink()
    } else{
        functionBakeLink()
    }

})


buttonRight.addEventListener('click', () => {

    if (drinkLink.classList[2] === 'activ') {
        functionBakeLink()
    } else if (bakeLink.classList[2] === 'activ') {
        functionListener()
    } else{
        functionDrinkLink()
    }

})





















let mMenuOpen = document.querySelector('.m-menu__open'); //Кнопка открытия моб меню, находится в в header, в моб версии
let mMenu = document.querySelector('.m-menu__wrapper'); // Мобильное меню, пока что спрятано
let mMenuClose = document.querySelector('.m-menu__close-svg');//Кнопка закрытия моб меню, находится в m-menu, внутри моб меню
let body = document.querySelector('body'); //для отключение скрола под меню


mMenuOpen.addEventListener('click', clickMenuOpen );
mMenuClose.addEventListener('click', clickMenuClose );

function clickMenuOpen() {
    mMenu.setAttribute('style', 'transform: translateX(0%)');
    body.setAttribute('style', 'overflow-y: hidden');

}
function clickMenuClose() {
    mMenu.setAttribute('style', 'transform: translateX(-100%)');
    body.setAttribute('style', 'overflow-y: auto');
}





let button1 = document.querySelectorAll('.button');
let windowMod = document.querySelector('.window');
let windowForm = document.querySelector('.window__form');
let windowClase = document.querySelector('.window__clase-svg');

button1[0].addEventListener('click', buttonOpen );
button1[1].addEventListener('click', buttonOpen );
button1[2].addEventListener('click', buttonOpen );
windowMod.addEventListener('click', buttonClose );
windowForm.addEventListener('click', windowFormfun );
windowClase.addEventListener('click', buttonClose );

function buttonOpen() {
    windowMod.setAttribute('style', 'display: flex;');
    body.setAttribute('style', 'overflow-y: hidden');
}
function buttonClose() {
    windowMod.setAttribute('style', 'display: none;');
    body.setAttribute('style', 'overflow-y: auto');
}
function windowFormfun() {
    event.stopPropagation();

}