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
            .product{
                display: flex;
            }
   

        </style>

        <div class="product">
            <div class="product-image">
                <slot name="product-image"></slot>
            </div>
            <div class="product-content">
                <slot name="product-content"></slot>
            </div>
        </div>        
        
        `;
    }
}

customElements.define('product-component',Product);