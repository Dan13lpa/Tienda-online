export default (() => {
    // Aquí añadimos el código de nuestra función 
    const swipeButtons  = document.querySelectorAll('.swipe-button');

    swipeButtons.forEach(swipeButton => {
        swipeButton.addEventListener("click", () => {
            swipeButton.closest('.swipe-element').classList.toggle("active");
        })
    })
})();