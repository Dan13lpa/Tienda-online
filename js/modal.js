export default (() => {

    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach(modalButton => {
        modalButton.addEventListener("click", function(){
            console.log("hola");
        })
    });
})();