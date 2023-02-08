buttonsPlus = document.querySelectorAll(`.plus`);
buttonsMinus = document.querySelectorAll(`.minus`);
buyButton = document.querySelector(`.by-btn`);
cardInfo = document.querySelector(`.card-info`);
buttonRemove = document.querySelectorAll(`.delete-button`);
items = document.querySelectorAll(`.item`);
checkboxes = document.querySelectorAll(`.include-box`);

buyButton.addEventListener(`click`, function(){
    cardInfo.classList.toggle(`opacity-0`);
});

allGoods = document.querySelector(`.all-goods`);
totalPrice = document.querySelector(`.total-price`);

buttonsPlus.forEach((bthPlus) => {
    bthPlus.addEventListener(`click`, fPlus)
})

buttonsMinus.forEach((bthMinus) => {
    bthMinus.addEventListener(`click`, fMinus)
})

for (let i = 0; i < buttonRemove.length; i++) {
    let button = buttonRemove[i];
    button.addEventListener(`click`, function(){
        let price = Number(items[i].querySelector(`.price-for-item`).innerHTML);
        let number = Number(items[i].querySelector(`.how-much-2`).innerHTML);
        if (items[i].querySelector(`#include${i + 1}`).checked){
            totalPrice.innerHTML = `${Number(totalPrice.innerHTML) - price * number}`;
            allGoods.innerHTML = Number(allGoods.innerHTML) - number;
        }
        items[i].innerHTML = ``;
    });
}

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    checkbox.addEventListener(`input`, function(){
        if (!checkbox.checked) {
            let price = Number(items[i].querySelector(`.price-for-item`).innerHTML);
            let number = Number(items[i].querySelector(`.how-much-2`).innerHTML);
            totalPrice.innerHTML = `${Number(totalPrice.innerHTML) - price * number}`;
            allGoods.innerHTML = Number(allGoods.innerHTML) - number;
        } else {
            let price = Number(items[i].querySelector(`.price-for-item`).innerHTML);
            let number = Number(items[i].querySelector(`.how-much-2`).innerHTML);
            totalPrice.innerHTML = `${Number(totalPrice.innerHTML) + price * number}`;
            allGoods.innerHTML = Number(allGoods.innerHTML) + number;
        }
    });
}

function fRemove(e) {
    let parent = e.target.parentElement;
    console.log(parent);
    parent.querySelector(`.item`).classList.add('d-none');
}

function fPlus(e) {
    let parent = e.target.parentElement;
    let count = Number(parent.querySelector(`.how-much`).innerHTML);
    parent.querySelector(`.how-much`).innerHTML = count + 1;
    parent.querySelector(`.how-much-2`).innerHTML = count + 1;
    if (parent.querySelector(`.include-box`).checked) {
        allGoods.innerHTML = Number(allGoods.innerHTML) + 1;
        let price = Number( parent.querySelector(`.price-for-item`).innerHTML);
        totalPrice.innerHTML = `${Number(totalPrice.innerHTML) + price}`;
    }
}

function fMinus(e) {
    let parent = e.target.parentElement;
    let count = Number(parent.querySelector(`.how-much`).innerHTML);
    let price = Number( parent.querySelector(`.price-for-item`).innerHTML);
    if (count - 1 > 0) {
        parent.querySelector(`.how-much`).innerHTML = count - 1;
        parent.querySelector(`.how-much-2`).innerHTML = count - 1;
        if (parent.querySelector(`.include-box`).checked) {
            allGoods.innerHTML = Number(allGoods.innerHTML) - 1;
            totalPrice.innerHTML = `${Number(totalPrice.innerHTML) - price}`;
        }
    }
}