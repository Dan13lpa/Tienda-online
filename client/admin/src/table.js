class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
        this.currentPage = 1
        this.totalPages = null
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {

        document.addEventListener("refreshTable", async event =>{
            await this.loadData()
            await this.render()
        });
        document.addEventListener("filterResults", async event =>{
            await this.loadData()
            await this.render()
        });
    }
    

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
    }
      
    loadData = async () => {
        try{
            const response = await fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}`);
            const data = await response.json()
            this.data = data;  
            this.currentPage = data.meta.currentPage
            this.totalPages = data.meta.pages

        }catch(err){
            console.log(err)
        }
    }

    async render() {

        this.shadow.innerHTML = 
        `
        <style>
            .panel-table{
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .panel-contact{
                display: flex;
                flex-direction: column;
                width: 100%;
            
            }
            .panel-contact-button{
                background-color: hsl(207, 85%, 69%);
                display: flex;
                justify-content: flex-end;
               
            }
            .panel-contact-button-edit {
                width: 3rem;
            }
            .panel-contact-button-delete {
                width: 3rem;
            }
            
            .panel-contact-button-edit svg{
                fill: hsl(0, 0%, 100%);
                width: 2rem;
                padding: 0.5rem 0;
                margin-left: auto;
                cursor: pointer;
            }
            
            .panel-contact-button-delete svg{
                fill: hsl(0, 0%, 100%);
                width: 2rem;
                padding: 0.5rem 0;
                margin-left: auto;
                cursor: pointer;
            }
            
            .panel-contact-info{
                background-color: hsl(226, 64%, 66%);
            
            }
            .panel-contact-info ul{
                list-style: none;
                padding-left: 0;
            }
            
            .panel-contact-info li{
                color:hsl(0, 0%, 100%);
                font-size: 1.7rem;
                font-family: "Poppins", sans-serif;
                margin-bottom: 2px;
                padding-left: 15px;
            }

            .panel-contact-info li strong::after{
                content: ":";
                margin-right: 0.5rem;
            }

            .buttons{
                display: flex;
                gap: 10px;
                width: 100%;
                justify-content: space-between;
               padding: 1rem 0;
            }

            .button {
                background-color: hsl(207, 85%, 69%);
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
              }
              
              .button:hover {
                background-color: hsl(207, 85%, 59%);
              }
            
            
        </style>

        <div class="panel-table">
            
        </div>
        
        <div class="buttons">
            <div class="button first">Primera</div>

            <div class="button prev">Anterior</div>

            <div class="button next">Siguiente</div>

            <div class="button last">Última</div>
        </div>`


        this.data.rows.forEach(element => {

            const panelTable = this.shadow.querySelector('.panel-table');

            const panelContact = document.createElement('div');
            panelContact.classList.add('panel-contact');
            panelTable.appendChild(panelContact);

            const panelContactButton = document.createElement('div');
            panelContactButton.classList.add('panel-contact-button');
            panelContact.appendChild(panelContactButton);
            
            panelContactButton.innerHTML =  `
                <div class="panel-contact-button-edit" data-id="${element.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                </div>
                <div class="panel-contact-button-delete " data-id="${element.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                </div>
            `

            const panelContactInfo = document.createElement('div');
            panelContactInfo.classList.add('panel-contact-info');
            panelContact.appendChild(panelContactInfo);

            const ul = document.createElement('ul');

            Object.entries(element).forEach(([key, value]) => {
                const li = document.createElement('li');
                const strong = document.createElement('strong');
                const span = document.createElement('span');

                li.appendChild(strong);
                li.appendChild(span);
            
                strong.textContent = key;
                span.textContent = value;

                ul.appendChild(li);
            });

            
            panelContactInfo.appendChild(ul);
        });

        this.renderButtons();
        this.renderPagination();
    }

    renderPagination(){

        const firstButton = this.shadow.querySelector('.button.first');
        const prevButton = this.shadow.querySelector('.button.prev');
        const nextButton = this.shadow.querySelector('.button.next');
        const lastButton = this.shadow.querySelector('.button.last');

        firstButton.addEventListener('click', async () => {
            try {
              const response = await fetch('http://127.0.0.1:8080/api/admin/users?page=1');
              const data = await response.json();
              this.data = data;
              this.currentPage = parseInt(data.meta.currentPage);

              this.render();

            } catch (err) {
                console.log(err);
            }
        });  

        prevButton.addEventListener('click', async () => {
            try {
              if (this.currentPage > 1) {
                const response = await fetch(`http://127.0.0.1:8080/api/admin/users?page=${this.currentPage - 1}`);
                const data = await response.json();
                this.data = data;
                this.currentPage = parseInt(data.meta.currentPage);

                this.render();
              }
            } catch (err) {
              console.log(err);
            }
        });

        nextButton.addEventListener('click', async () => {
            try {
              if (this.currentPage <  this.data.meta.pages) {
                const response = await fetch(`http://127.0.0.1:8080/api/admin/users?page=${this.currentPage + 1}`);
                const data = await response.json();
                this.data = data;
                this.currentPage = parseInt(data.meta.currentPage);

                this.render();
              }
            } catch (err) {
              console.log(err);
            }
        });

        lastButton.addEventListener('click', async () => {
            try {
              const response = await fetch(`http://127.0.0.1:8080/api/admin/users?page=${this.totalPages}`);
              const data = await response.json();
              this.data = data;
              this.currentPage = parseInt(data.meta.currentPage);
               
              this.render();
            } catch (err) {
              console.log(err);
            }
        });
    }

    renderButtons = async () => {

        let editButtons = this.shadow.querySelectorAll('.panel-contact-button-edit');
        
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('loadData', {
                    detail: {
                        id: editButton.dataset.id
                    }
                }));
            });
        });

        let deleteButtons = this.shadow.querySelectorAll('.panel-contact-button-delete');

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('openModal', {
                    detail: {
                        id: deleteButton.dataset.id
                    }
                }));
            });
        });
    }
}

customElements.define('table-component', Table);