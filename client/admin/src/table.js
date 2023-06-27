import { API_URL } from '../config/config.js'

class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
        this.currentPage = 1;
        this.totalPages = null;
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {

        document.addEventListener("refreshTable", async event => {
            await this.loadData()
            await this.render()
        });

        document.addEventListener("filterResults", async event => {
            this.data = event.detail.data
            await this.render()
        });




    }

    async attributeChangedCallback (name, oldValue, newValue) {

        await this.loadData()
        await this.render()
    }

    loadData = async() => {
        try {
            const response = await fetch(`${API_URL}/api${this.getAttribute('url')}`,{
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
                }
            });
            const data = await response.json()
            this.data = data;
            this.currentPage = data.meta.currentPage
            this.totalPages = data.meta.pages

        } catch (err) {
            console.log(err)
        }

    }

    async render() {

        this.shadow.innerHTML =
        `
        <style>
            :host {
                width: 35%;
            }

            .cards{
                width: 60vh;
            }
            .card{
                width:100%;
                margin-bottom: 2.5rem;

            }
            .card-header{
                background-color: hsl(207, 85%, 69%);
                height: 4rem;
                display: flex;
                justify-content: end;
                cursor: pointer;
            }
            .card-header svg{
                height: 3.5rem;
                fill: hsl(0, 0%, 100%);
            }
            .card-info{
                background-color: rgb(113,139,224);
                color: white;
                padding: 2rem 1.5rem;
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
                margin: 0;
            }

            .card-info-tag{
                margin-left: 0.5rem;

            }
            li {
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
                font-size: 21px;
                line-height: 0.75;
                margin-top: 0;
                margin-bottom: 0.5rem;
                list-style: none;

            }
            .button{
                width: 100%;
            }
            button{
                width: 20%;
                height: 50px;
                font-size: 18px;
                margin: 14px;
            }
            button:hover{
                cursor: pointer;
            }
        </style>
        <div class="cards">
        </div>
        <div class="button">
            <button class="primera">Primera</button>
            <button class="anterior">Anterior</button>
            <button class="siguiente">Siguiente</button>
            <button class="ultima">Última</button>
        </div>
        `;


        this.data.rows.forEach(element => {

            let cards = this.shadow.querySelector('.cards');
            let card = document.createElement('div');
            card.classList.add('card');
            cards.appendChild(card);

            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            card.appendChild(cardHeader);

            cardHeader.innerHTML = `
                <svg class="load-data" data-id="${element.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                <svg class="delete" data-id="${element.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            `;

            let cardInfo = document.createElement('ul');
            cardInfo.classList.add('card-info')
            card.appendChild(cardInfo);

            Object.entries(element).forEach( ([key, value]) => {

                let li = document.createElement('li');
                cardInfo.appendChild(li);
                li.textContent = `${key}: ${value}`
            })
        });

        this.renderButtons();
        this.renderPagination();

    }

    renderPagination =  () => {

        let primerapagina = this.shadow.querySelector('.primera');
        let anteriorpagina = this.shadow.querySelector('.anterior');
        let siguientepagina = this.shadow.querySelector('.siguiente');
        let ultimapagina = this.shadow.querySelector('.ultima');

        primerapagina.addEventListener('click', async () => {
            try {
                const response = await fetch(`${API_URL}/api/admin/users?page=1`);
                const data = await response.json();
                this.data = data;
                this.currentPage = parseInt(data.meta.currentPage);

                this.render();

            } catch (err) {
                console.log(err);
            }
        });

        anteriorpagina.addEventListener('click', async () => {
            try {
                if (this.currentPage > 1) {
                    const response = await fetch(`${API_URL}/api/admin/users?page=${this.currentPage - 1}`);
                    const data = await response.json();
                    this.data = data;
                    this.currentPage = parseInt(data.meta.currentPage);

                    this.render();
                }
                } catch (err) {
                console.log(err);
            }
        });

        siguientepagina.addEventListener('click', async () => {
            try {
                if (this.currentPage <  this.data.meta.pages) {
                    const response = await fetch(`${API_URL}/api/admin/users?page=${this.currentPage + 1}`);
                    const data = await response.json();
                    this.data = data;
                    this.currentPage = parseInt(data.meta.currentPage);

                    this.render();
                }
            } catch (err) {
                console.log(err);
                }
        });

        ultimapagina.addEventListener('click', async () => {
                try {
                    const response = await fetch(`${API_URL}/api/admin/users?page=${this.totalPages}`);
                    const data = await response.json();
                    this.data = data;
                    this.currentPage = parseInt(data.meta.currentPage);
                    this.render();
                } catch (err) {
                    console.log(err);
            }
        });
    }

    renderButtons = async() => {

        let loadDataButtons = this.shadow.querySelectorAll('.load-data');


        loadDataButtons.forEach(loadDataButton => {

            loadDataButton.addEventListener("click", () => {
                document.dispatchEvent(new CustomEvent('loadData', {
                    detail: {
                        id: loadDataButton.dataset.id
                    }
                }));
            });
        });
        let deleteButtons = this.shadow.querySelectorAll('.delete');

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', () => {
                document.dispatchEvent( new CustomEvent('openModal',{
                    detail: {

                        id: deleteButton.dataset.id
                    }
                }));
            });
        });
    };
}



customElements.define('table-component', Table);