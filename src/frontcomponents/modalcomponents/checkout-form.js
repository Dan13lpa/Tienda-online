class CheckoutForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            form{
                display: flex;
                flex-direction: column;
                height: 100%;
                gap: 1.5rem;
                justify-content: start;
            }
            
            .form-row{
                display: flex;
                gap: 1.5rem;
                justify-content: space-between
            }
            
            .form-row-button{
                width: 100%;
            }
            
            .form-row-button button{
                background:  hsl(209, 100%, 50%);
                color: hsl(0, 0%, 100%);
                border: none;
                font-weight: 500;
                font-size: 1.7rem;
                padding: 5% 10%;
                text-transform: uppercase;
                width: 100%;
                border-radius: 3%;
                cursor: pointer;
            }
            
            .form-element{
                width: 100%;
            }
            
            .form-element input{
                box-sizing: border-box;
                padding: 0.8rem 1rem;
                width: 100%;
            }
            
            input.invalid{
                outline: none;
                border: 2px solid hsl(0, 100%, 50%);
            }
            
            input:focus, textarea:focus{
                outline: none;
                border: 2px solid hsl(209, 100%, 50%);
            }
       
        </style>
        <div class="go-back-button swipe-button">
            <slot name="goback"></slot>
        </div>    

        <form>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" data-validate="only-letters" placeholder="Name">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" data-validate="only-letters" placeholder="Last name">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" data-validate="email" placeholder="E-mail adress">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" data-validate="telephone"placeholder="Telephone">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>      
            </div>
        </div>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20"type="text" placeholder="Address Line 1">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" placeholder="Address Line 2">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text"data-validate="only-letters" placeholder="State">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
            <div class="form-element">
                <input class="form-input" maxlength="20" type="text" data-validate="only-numbers"placeholder="Zip Code">
                <span class="form-element-counter">0/20</span>
                <span class="error-message"></span>
            </div>
        </div>
        <div class="form-row-button">
            <div class="send-button">
                <button>FINISH PURCHASE</button>
            </div>
        </div>
        </form>
        
        `;
    }
}

customElements.define('checkoutform-component',CheckoutForm);