export default (() => {

    let plusMinusButtons = document.querySelectorAll('.plus-minus-button');

    plusMinusButtons.forEach(plusMinusButton => {
        plusMinusButton.addEventListener('click', () => {
            if (plusMinusButton.textContent === '+') {
                plusMinusButton.parentElement.querySelector('input').value = parseInt(plusMinusButton.parentElement.querySelector('input').value) + 1;
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'El producto ha sido añadido a tu cesta correctamente',
                        type: 'success'
                    }
                }));
            }
            if(plusMinusButton.textContent === '-' && parseInt(plusMinusButton.parentElement.querySelector('input').value) > 1){
                plusMinusButton.parentElement.querySelector('input').value = parseInt(plusMinusButton.parentElement.querySelector('input').value) - 1;
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Su producto ha sido eliminado',
                        type: 'error'
                    }
                }));
            }
        });
    });
})();