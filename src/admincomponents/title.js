class Title extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style> 
            
            .header-panel-title h1{
                color:hsl(0, 0%, 100%);
                margin: 0;
                font-family: "Poppins", sans-serif;
                font-size: 2.5rem;
                font-weight: 600;
                text-decoration: none;
            }
            
        </style>
            <div class="header-panel-title">
                <h1 slot="titulo">Clientes</h1>
            </div>
            
        `;
    }
}

customElements.define('title-component', Title);