///////burger/////////////////////////////////////////////////////////////

const navigation = document.querySelector('.nav');
const burgerIcon = document.querySelector('.burger');

if (burgerIcon) {
    burgerIcon.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        navigation.classList.toggle('open');
        burgerIcon.classList.toggle('open');
    });
}

/////trees and donation///////////////////////////////////////////////////

const trees = document.querySelector('.trees-planted');
const donation = document.querySelector('.donation-collected');
let treesValue = 23145;
let donationValue = 5823;

function treesGenerate(){
    treesValue += Math.floor(Math.random() * 5);
    trees.innerHTML = treesValue.toLocaleString('en');

    if(treesValue > 99998){
        treesValue == 23145;
    }
}

function donatioGenerate(){
    donationValue += Math.floor(Math.random() * 3);
    donation.innerHTML = donationValue.toLocaleString('en');

    if(donationValue  > 9998){
        donationValue  == 5823;
    }
}

if(trees){
    window.setInterval(treesGenerate, 2000);
}

if(donation){
    window.setInterval(donatioGenerate, 4000);
}

/////tabs/////////////////////////////////////////////////////////////////

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');;

tabsBtn.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        let currentBtn = btn;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(btn) {
                btn.classList.remove('active');
            });
            tabsItems.forEach(function(tab) {
                tab.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

// document.querySelector('.tabs__nav-btn').click(); add class active to 1-st tab( if 2-nd add :nth-child(2) )

/////tabs/////////////////////////////////////////////////////////////////

const popupBtns = document.querySelectorAll('.popup-btn');
const popupCloseBtns = document.querySelectorAll('.popup__close');

function getCurrentPopup(elem, dataAtribute){
    let popupId = elem.getAttribute(dataAtribute);
    return document.querySelector(popupId);
}


popupBtns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        document.body.classList.add('lock');
        getCurrentPopup(button, 'data-popup').classList.add('open');
        getCurrentPopup(button, 'data-popup-menu').classList.add('open');
    });
});

popupCloseBtns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        document.body.classList.remove('lock');
        getCurrentPopup(button, 'data-popup').classList.remove('open');
        getCurrentPopup(button, 'data-popup-menu').classList.remove('open');
    });
});

// document.addEventListener('click', (e) => {  // Вешаем обработчик на весь документ
//     if(e.target === document.querySelector('[data-popup]')){
//         document.body.classList.remove('lock');
//         document.querySelector('[data-popup]').classList.remove('open');
//         popup.classList.remove('open');
//     }
// });


/////Set current year/////////////////////////////////////////////////////////////////

const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();
