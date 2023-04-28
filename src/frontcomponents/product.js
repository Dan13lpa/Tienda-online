class Product extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            
        .modal-content{
            background-color: hsla(0, 0%, 100%);
            left: 25%;
            height: 70vh;
            position: fixed;
            top: 15%;
            width: 50%;
            overflow: hidden;
        }

        .modal-close-button{
            cursor: pointer;
            right: 1rem;
            top: 1rem;
            position: absolute;
            z-index: 2000;
        }
        
        .modal-close-button svg{
            fill: hsl(203, 15%, 78%);
            width: 1.5rem;
            height: 1.5rem;
            transition: 0.3s;
        }
        
        .modal-close-button svg:hover{
            fill: hsl(210, 1%, 33%);
        }

        </style>

        <div class="modal-content">
            <slot name="product-image"></slot>
            <slot name="product-content"></slot>
        </div>

        <div class="modal-close-button modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        </div>

        
        `;
    }
}

customElements.define('product-component',Product);