// Находим кнопки New и Sale
newButtonNode = document.querySelector(`#new-btn`);
saleButtonNode = document.querySelector(`#sale-btn`);
// Находим карточки New и Sale
newContainerNode = document.querySelector(`#new-container`);
saleContainerNode = document.querySelector(`#sale-container`);

newButtonNode.addEventListener(`click`, function(){
    if (newContainerNode.classList.contains(`d-none`)) {
        newContainerNode.classList.remove(`d-none`);
    }
    if (!(saleContainerNode.classList.contains(`d-none`))) {
        saleContainerNode.classList.add(`d-none`);
    }
});

saleButtonNode.addEventListener(`click`, function(){
    if (saleContainerNode.classList.contains(`d-none`)) {
        saleContainerNode.classList.remove(`d-none`);
    }
    if (!(newContainerNode.classList.contains(`d-none`))) {
        newContainerNode.classList.add(`d-none`);
    }
});