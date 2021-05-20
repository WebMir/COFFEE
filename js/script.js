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

drinkLink.classList.add('activ');
sliderDrink.classList.add('activ-slider');

function functionDrinkLink(){

    drinkLink.classList.add('activ');
    bakeLink.classList.remove('activ');
    dessertLink.classList.remove('activ');

    sliderDrink.classList.add('activ-slider');
    sliderBake.classList.remove('activ-slider');
    sliderDessert.classList.remove('activ-slider');

    animaCover1.classList.add('menu__cover-activ');
    animaPrice1.classList.add('menu__price-activ');

    animaCover2.classList.remove('menu__cover-activ');
    animaPrice2.classList.remove('menu__price-activ');

    animaCover3.classList.remove('menu__cover-activ');
    animaPrice3.classList.remove('menu__price-activ');

}
function functionBakeLink(){

    drinkLink.classList.remove('activ');
    bakeLink.classList.add('activ');
    dessertLink.classList.remove('activ');

    sliderDrink.classList.remove('activ-slider');
    sliderBake.classList.add('activ-slider');
    sliderDessert.classList.remove('activ-slider');

    animaCover2.classList.add('menu__cover-activ');
    animaPrice2.classList.add('menu__price-activ');

    animaCover1.classList.remove('menu__cover-activ');
    animaPrice1.classList.remove('menu__price-activ');

    animaCover3.classList.remove('menu__cover-activ');
    animaPrice3.classList.remove('menu__price-activ');

}

function functionListener(){

    drinkLink.classList.remove('activ');
    bakeLink.classList.remove('activ');
    dessertLink.classList.add('activ');

    sliderDrink.classList.remove('activ-slider');
    sliderBake.classList.remove('activ-slider');
    sliderDessert.classList.add('activ-slider');

    animaCover3.classList.add('menu__cover-activ');
    animaPrice3.classList.add('menu__price-activ');

    animaCover1.classList.remove('menu__cover-activ');
    animaPrice1.classList.remove('menu__price-activ');

    animaCover2.classList.remove('menu__cover-activ');
    animaPrice2.classList.remove('menu__price-activ');

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

/***************************************************************************/

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
/***************************************************************************/

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

/***************************************************************************/

let button1 = document.querySelectorAll('.button');
let windowMod = document.querySelector('.window');
let windowForm = document.querySelector('.window__form');
let windowClose = document.querySelector('.window__close-svg');

button1[0].addEventListener('click', buttonOpen );
button1[1].addEventListener('click', buttonOpen );
button1[2].addEventListener('click', buttonOpen );
windowMod.addEventListener('click', buttonClose );
windowForm.addEventListener('click', windowFormfun );
windowClose.addEventListener('click', buttonClose );

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