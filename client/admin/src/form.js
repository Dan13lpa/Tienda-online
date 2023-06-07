class Form extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
           
            .form-section {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            
            .form-section .form-selector {
                width: 100%;
                height: 5vh;
                background-color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .form-selector .selector {
                display: flex;
                height: 100%;
            }
            
            .selector div {
                height: 100%;
                width: 100%;
                padding: 0 1rem;
            }
            
            .selector div button {
                height: 5vh;
                width: 100%;
                background-color: transparent;
                border: none;
                height: 100%;
                cursor: pointer;
            }
            
            .selector div p {
                color: rgb(133, 133, 133);
                font-size: 1rem;
                font-weight: 600;
            }
            
            .selector div.active {
                background-color: rgb(109, 183, 243);
            }
            
            .selector div.active p {
                color: white;
            }
            
            .form-selector .options {
                height: 100%;
                display: flex;
                gap: 1rem;
                align-items: center;
                margin-right: 10px;
            }
            
            .options div {
                height: 2.5rem;
                width: 2.5rem;
                display: flex;
            }
            
            .options div button {
                width: 100%;
                height: 100%;
                cursor: pointer;
                background-color: transparent;
                border: none;
            }
            
            .options div svg {
                fill: rgb(109, 183, 243);
            }
           
            .form {
                display: none;
            }
            
            .form.active {
                display: flex;
            }
            
            .form form {
                display: grid;
                grid-template-columns: 1fr 1fr;
                width: 100%;
                gap: 2rem;
            }
            
            form div {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            
            form div label {
                color: white;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            form div input {
                background-color: rgb(113, 139, 224);
                font-size: 2rem;
                color: white;
                border: none;
                border-bottom: 1px solid white;
            }
            
        </style>
        <section class="form-section">
            <div class="form-selector">
                <div class="selector">
                    <div class="active" data-form="principal">
                        <button>
                            <p>Principal</p>
                        </button>
                    </div>
                    <div data-form="image">
                        <button>
                            <p>Imágenes</p>
                        </button>
                    </div>
                </div>
                <div class="options">
                    <div>
                        <button type="button" id="resetButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>                        </button>
                    </div>
                    <div>
                        <button type="button" id="submitButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,8V4H5V8H15M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18M17,2L21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V4A2,2 0 0,1 5,2H17M11,22H13V24H11V22M7,22H9V24H7V22M15,22H17V24H15V22Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="form-container">
                <div class="form active" data-form="principal">
                    <form id="form-principal">
                        <div>
                            <label>Nombre</label>
                            <input type="text" name="name"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email"></input>
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input type="password" name="password"></input>
                        </div>
                        <div>
                            <label>Confirme contraseña</label>
                            <input type="password" name="repeatPassword"></input>
                        </div>
                    </form>
                </div>
                <div class="form" data-form="image">
                    <div class="input-image">
                        <label>Seleccione una imagen</label>
                        <input type="file">
                    </div>
                </div>
            </div>
        </section>
        `;

        // tabs.forEach(tab => {
        //     tab.addEventListener('click', () => {
        //         tabsHeader.querySelector('.active').classList.remove('active');
        //         tabContents.querySelector('.active').classList.remove('active');
        //         tab.classList.add('active');
        //         tabContents.querySelector(`[data-num="${tab.dataset.num}"]`).classList.add('active');
        //     });
        // });

        const form = this.shadow.querySelector('form'); 
        const submitButton = this.shadow.querySelector("#submitButton");

        submitButton.addEventListener("click", event =>{

            event.preventDefault(); 

            const formData = new FormData(form); 

            for (let pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
        
            const formDataJson = Object.fromEntries(formData.entries());
                 
            fetch('http://localhost:8080/api/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataJson) 
            })
            .then(response => response.json())
            .then(data => {

                console.log(data)
                form.reset(); 
            })
            .catch(error => {
                console.log(error);
            });

        })    
    
    }
}


customElements.define('form-component', Form);
