class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {

        document.addEventListener("refreshTable", async event =>{
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
            const response = await fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}`)
            this.data = await response.json()
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
            
            
        </style>

        <div class="panel-table">
            
        </div>  
        `;


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
    }

    renderButtons = async () => {

        let editButtons = this.shadow.querySelectorAll('.panel-contact-button-edit');
        let deleteButtons = this.shadow.querySelectorAll('.panel-contact-button-delete');
  
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('loadData', {
                    detail: {
                        id: editButton.dataset.id
                    }
                }));
            });
        });

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('deleteData', {
                    detail: {
                        id: deleteButton.dataset.id
                    }
                }));
            });
        }); 
    }
}

customElements.define('table-component', Table);