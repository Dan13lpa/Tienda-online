class ProductAmount extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .plus-minus-buttons{
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
            }
            
            .plus-minus-buttons input{
                text-align: center;
                width: 10%;
            }
            
            .plus-minus-buttons button{
                cursor: pointer;
            }
                
        </style>
        <div class="plus-minus-buttons">
            <button class="plus-minus-button">-</button>
            <input type="number" value="1">
            <button class="plus-minus-button">+</button>
        </div>
        
        `;
    }
}

customElements.define('product-amount-component',ProductAmount);