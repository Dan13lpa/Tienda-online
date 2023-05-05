export default (() => {
    // Aquí añadimos el código de nuestra función 
    const sendButtons  = document.querySelectorAll('.send-button');

    sendButtons.forEach(sendButton => {
        sendButton.addEventListener("click", event => {
            event.preventDefault();
            const form = sendButton.closest('form');
            validateForm(form.elements)
        })
    })
})();

let validateForm = (elements) => {

    let validForm = true;

    let validators = {
        "only-letters": {
            regex: /^[a-zA-Z\s]+$/g,
            message: "Solo letras"
        },
        "only-numbers": {
            regex: /\d/g,
            message: "Solo números"
        },
        "telephone":{ 
            regex:/^\d{9}$/g,
            message: "Solo telefono"
        },
        "email": {
            regex:/\w+@\w+\.\w+/g,
            message:"solo email"
        },
        "web": /^(http|https):\/\/\w+\.\w+/g,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
        "date": /^\d{4}-\d{2}-\d{2}$/g,
        "time": /^\d{2}:\d{2}$/g
    }

    for(let i=0; i < elements.length ; i++) {

        const element = elements[i];
        const validationName = element.dataset.validate;

        if (validationName && validationName !== '') {

            const validationRegex = validators[validationName];

            if (validationRegex && element.value.match(validationRegex) == null) {
                element.classList.add('invalid');
                validForm = false; 
            } else {
                element.classList.remove('invalid');    
            } 
        }
    }
    
    if (!validForm) {
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Los datos del formulario no son válidos',
                type: 'error'
            }
        }));
    } else {
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'El formulario se envió correctamente',
                type: 'success'
            }
        }));
    }

    return validForm;
};