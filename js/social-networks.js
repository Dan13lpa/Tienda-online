export default (() => {

    const hamburguerButtons = document.querySelectorAll('.hamburguerButton');
    

    hamburguerButtons.forEach(hamburguerButton => {
        hamburguerButton?.addEventListener("click", () => {
            hamburguerButton.classList.toggle('active');
            hamburguerButton.parentElement.classList.toggle('active');
            console.log("active");
        })
    });
    
})();