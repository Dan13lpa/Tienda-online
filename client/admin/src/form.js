class Form extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {

        document.addEventListener("loadData", async event => {
            await this.loadData(event.detail.id)
        });
    }
    async attributeChangedCallback (name, oldValue, newValue) {
        await this.render()
    }

    async loadData(id) {
        try {
            const response = await fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}/${id}`)
            this.data = await response.json()

            Object.entries(this.data).forEach( ([key, value]) => {

                const form = this.shadow.querySelector("#form");
                const inputElement = form.elements[key];

                if (inputElement) {
                    inputElement.value = value;
                }
                console.log(`${key}: ${value}`);
            });

        } catch (err) {
            console.log(err)
        }
    }

    render() {

        this.shadow.innerHTML =
        `
        <style>
            :host {
                width: 60%;
            }

            .form{
                width: 100%;

            }
            .form-header{
                background-color: white;
                display: flex;
                justify-content: space-between;
                margin-bottom:6rem ;
                height: 4rem;
            }
            .form-tabs{
                display: flex;
                align-items: center;
                gap: 1rem;
                max-width: 100%;
                overflow:hidden;
            }
            .form-tabs button:first-child{
                color: white;
                background-color: hsl(207, 85%, 69%);
                height: 4rem;
                display: flex;
                align-items: center;
                padding: 0 1.5rem;
            }
            .form-icons{
                display: flex;
                gap: 1rem;
                align-items: center;
                cursor: pointer;
                margin-right: 1rem;
            }
            .form-icons svg{
                height: 4rem;
                fill: hsl(207, 85%, 69%);
            }
            .form-tabs button{
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
                font-size: 24px;
                color:#808080 ;
                cursor: pointer;
                height: 100%;
                margin: 0;
                padding: 0 1.5rem;
            }

            .form-tabs button.active {
                color: hsl(209, 100%, 50%);
                border-bottom: none;
                border-top-color: $primary-color;
                border-right-color: transparent;
                border-left-color: transparent;
            }

            .form-tabs button:hover {
                background-color: hsl(0, 0%, 87%);
                border-top-color:hsl(209, 100%, 50%);
                color: hsl(209, 100%, 50%);
            }

            .tab-contents > div{
                display: none;
                width: 100%;
            }

            .tab-contents > div.active{
                display: block;
            }

            button{
                overflow: hidden;
                border: none;

            }
            .validation-errors{
                border-color: red;
            }

            .section-inputs-form {
                position: relative;
                margin: 1rem 0;

            }

            .row{
                display: flex;
                gap: 2rem;
                margin-bottom: 5rem;
                width: 100%;
            }

            .form-element {
                width: 100%;
            }

            
            .form-element-label {
                margin-bottom: 0.5rem;
                width: 100%;
            }

            .form-element-label label {
                color:  hsl(0, 100%, 100%);
                font-family:  'Roboto', sans-serif;
                font-weight: 600;
                width: 100%;
            }

            .form-element-input {
                width: 100%;
            }

            .form-element-input input{
                background-color: rgb(113,139,224);
                border-bottom: 1px solid hsl(0, 0%, 100%);
                color: hsl(0, 100%, 100%);
                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                padding: 0.5rem;
                width: 100%;
            }

            .add-image{
                display:flex;
                flex-direction: column;
                align-items: flex-start;

            }
            .add-image active{

            }
            .add-image button{
                width:6%;
                margin-left: 5%;
                padding: 1.5rem;
                background-color: white;

            }
            .button-image:hover{
                cursor:pointer;
            }

            .add-image h2{
                color:white;
                font-size: 30px;
            }

        </style>
        <div class="form">
            <div class="form-header">
                <div class="form-tabs">
                    <button class="active" data-tab="main">
                        Principal
                    </button>
                    <button data-tab="images">
                        Imágenes
                    </button>
                </div>
                <div class="form-icons">
                    <div id="clean-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                    </div>
                    <div id="send-form-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                    </div>
                </div>
            </div>
            <div class="validation-errors">
                <ul>
                </ul>
            </div>
            <form>
                <div class="tab-contents">
                    <div class="tab-content active" data-tab="main">
                        <input type="hidden" name="id"/>
                        <div class="row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="name">
                                        Nombre
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="name" />
                                </div>
                            </div>
                                
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="email">
                                        Email
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="email" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="password">
                                        Contraseña
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="password" name="password" />
                                </div>
                            </div>
                                
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="repeatPassword">
                                        Repetir Contraseña
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="password" name="repeatPassword" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" data-tab="images">
                        <div class="row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="file">
                                        Añadir imagen
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <image-button-component></image-button-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;

    this.renderTabs();
    this.renderButtons();

        const form = this.shadow.querySelector('form');
        const sendFormButton = this.shadow.getElementById('send-form-button');

        sendFormButton.addEventListener('click', event => {

            event.preventDefault();

            if(!this.validateForm(form.elements)) {
                return;
            }

            let id = form.elements.id.value;
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url = id ? `http://127.0.0.1:8080/api/admin/users/${id}` : `http://127.0.0.1:8080/api/admin/users`
            let method = id ? 'PUT':'POST'
            delete formDataJson.id

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataJson)

            }).then(response => {

                return response.json();

            }).then(data => {

                document.dispatchEvent(new CustomEvent('refreshTable'));

                form.reset();

            }).catch(async error => {

                const data = await error.json();
                const form = this.shadow.querySelector('#form');
                const errorMessageContainer = this.shadow.querySelector('.validation-errors ul')
                errorMessageContainer.innerHTML = ""

                data.message.forEach(error => {

                    form.elements[error.path].classList.add('validation-error')
                    const li = document.createElement;
                    errorMessageContainer.appendChild(li);
                    li.textContent = error.messagge;
                });

            });

        });
    }

    renderButtons = () => {

        const imageButton = this.shadow.querySelectorAll('.button-image');
            imageButton.addEventListener('click', () => {
                document.dispatchEvent( new CustomEvent('openModal',{
                    detail: {

                        id: imageButton
                    }
                }));
            });
        };


    renderTabs = () => {
        const tabsHeader = this.shadow.querySelector('.form-tabs');
        const tabContents = this.shadow.querySelector('.tab-contents');
        const tabs = tabsHeader.querySelectorAll('button');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabsHeader.querySelector('.active').classList.remove('active');
                tabContents.querySelector('.active').classList.remove('active');
                tab.classList.add('active');
                tabContents.querySelector(`[data-tab="${tab.dataset.tab}"]`).classList.add('active');
            });
        });
    };

    validateForm = elements => {

        let validForm = true;

        let validators = {
            "only-letters": {
                regex: /^[a-zA-Z\s]+$/g,
                message: 'Por favor, rellena el campo "Nombre".'
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
                message:'Por favor, rellena el campo "Email".'
            },
            "password": {
                regex: /^.{1}$/g,
                message:'No es una contraseña válida.'
            },
        }

        const errorMessageContainer = this.shadow.querySelector('.validation-errors ul')
        errorMessageContainer.innerHTML = ""

        for(let i=0; i < elements.length ; i++) {

            const element = elements[i];
            const validationName = element.dataset.validate;

            if (validationName && validationName !== '') {

                const validationRegex = validators[validationName];

                if (validationRegex && element.value.match(validationRegex) == null) {
                    element.classList.add('validation-error');
                    validForm = false;

                    const li = document.createElement('li');
                    errorMessageContainer.appendChild(li);
                    li.textContent = validationRegex.message;

                } else {
                    element.classList.remove('validation-error');
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

        console.log(validForm);

        return validForm;
    };

}

customElements.define('form-component', Form);