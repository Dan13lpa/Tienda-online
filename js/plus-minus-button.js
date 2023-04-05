export default (() => {

    let plusMinusButtons = document.querySelectorAll('.plus-minus-button');

    plusMinusButtons.forEach(plusMinusButton => {
        plusMinusButton.addEventListener('click', () => {
            if (plusMinusButton.textContent === '+') {
                plusMinusButton.parentElement.querySelector('input').value = parseInt(plusMinusButton.parentElement.querySelector('input').value) + 1;
            }
            else if(parseInt(plusMinusButton.parentElement.querySelector('input').value) > 1){


            if(plusMinusButton.textContent === '-')
                 plusMinusButton.parentElement.querySelector('input').value = parseInt(plusMinusButton.parentElement.querySelector('input').value) - 1;
                
            }
        });
    });
})();