let buyBtns = document.querySelectorAll('.tour-buy')
let modalTicket = document.querySelector('.modal-ticket')
let modalClose = document.querySelector('.modal-close')
let modalContainer = document.querySelector('#modal-container')


for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function(ev) {
        modalTicket.classList.add("open");
    })
}
modalClose.addEventListener('click', function(ev) {
    modalTicket.classList.remove("open");
})
modalTicket.addEventListener('click', function() {
    modalTicket.classList.remove("open");

})
modalContainer.addEventListener('click', function(ev) {
    ev.stopPropagation();
})