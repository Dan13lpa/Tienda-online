class ModalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html {
                line-height: 1.15; 
                -webkit-text-size-adjust: 100%; 
            }
            .header-checkout-button button{
                border-radius: 30px;
                color: white;
                background-color:   hsl(18, 100%, 57%);
                padding: 10px  30px;
                border: none;
                cursor: pointer;
                font-stack: "Poppins",sans-serif; 
                font-size: 100%; 
                margin: 0; 
                overflow: visible;
                text-transform: none;
                line-height: 1.5;
                font-weight: bold;
               
            }
            .header-checkout-button button:hover{
                background-color:  hsl(0, 1%, 26%);
            }
            
        </style>

            <div class="header-checkout-button modal-button">
                <button type="button">ORDER NOW</button>
            </div>
         
        `;
    }
}

customElements.define('modal-button-component',ModalButton);