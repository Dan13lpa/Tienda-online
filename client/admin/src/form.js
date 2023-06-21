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

                const form = this.shadow.querySelector('#form');
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
           
            .form-section {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
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

            .validation-error {
                border-color: red;
            }

            li {
              list-style: none;
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>                        
                        </button>
                    </div>
                    <div>
                        <button type="button" id="submitButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,8V4H5V8H15M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18M17,2L21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V4A2,2 0 0,1 5,2H17M11,22H13V24H11V22M7,22H9V24H7V22M15,22H17V24H15V22Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="validation-errors">
                <ul>
                </ul>
            </div>
            <form id="form">
                <div class="tab-contents">
                    <div class="tab-content active" data-tab="main">
                        <input type="hidden" name="id"/>
                        <div class="section-inputs">
                            <label class="section-inputs-form" for="name">
                                <span>Nombre</span>
                                <input type="text" name="name" />
                            </label>
                            <label class="section-inputs-form" for="email">
                                <span>Email</span>
                                <input type="email" name="email" data-validate="email" />
                            </label>
                        </div>
                        <div class="section-inputs">
                            <label class="section-inputs-form" for="password">
                                <span>Password</span>
                                <input type="password" name="password"/>
                            </label>
                            <label class="section-inputs-form" for="password">
                                <span>Repeat password</span>
                                <input type="password" name="repeat-password"/>
                            </label>
                        </div>
                    </div>
                    <div class="tab-content" data-tab="images">
                        <div class="add-image">
                            <h2>Añadir imagen</h2>
                            <button type="button" id="button-image">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    `;
    this.renderTabs();

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


      const form = this.shadow.querySelector("form");
      const submitButton = this.shadow.querySelector("#submitButton");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (!this.validateForm(form.elements)) {
        return;
      }

      let id = form.elements.id.value;
      let formData = new FormData(form);
      let formDataJson = Object.fromEntries(formData.entries());
      let url = id ? `http://127.0.0.1:8080/api/admin/users/${id}`: `http://127.0.0.1:8080/api/admin/users`;
      let method = id ? "PUT" : "POST";
      delete formDataJson.id;

      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJson),
      })
      .then(response => {

        return response.json();
        
      }).then((data) => {

          document.dispatchEvent(new CustomEvent("refreshTable"));

          form.reset();
        })
        .catch(async (error) => {
          const data = await error.json();
          const form = this.shadow.querySelector("#form");
          const errorMessageContainer = this.shadow.querySelector(
            ".validation-errors ul"
          );
          errorMessageContainer.innerHTML = "";

          data.message.forEach((error) => {
            form.elements[error.path].classList.add("validation-error");
            const li = document.createElement("li");
            errorMessageContainer.appendChild(li);
            li.textContent = error.message;
          });
        });
    });
  }

  validateForm =  elements => {
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
    
          message:'No es una contraseña válida.'
      },
    };

    const errorMessageContainer = this.shadow.querySelector(
      ".validation-errors ul");

    errorMessageContainer.innerHTML = "";

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

customElements.define("form-component", Form);