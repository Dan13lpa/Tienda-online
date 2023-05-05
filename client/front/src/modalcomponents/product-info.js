class ProductInfo extends HTMLElement {

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
            flex-direction: column;
            justify-content: space-evenly;
            height: 100%;
            width: 100%;
            padding: 0.5rem;
        }
        .title{
            display: flex;
            gap: 0.1rem;
            flex-direction: column;
            border-bottom: 1px solid hsl(210, 15%, 79%);
            
        }
        
        </style>
        
        <div class="product">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="tabs">    
                <slot name="tabs"></slot>
            </div>
            <div class="plusminus-button">    
                <slot name="plusminus-button"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('product-info-component',ProductInfo);