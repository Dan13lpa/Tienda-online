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
        .modal-product{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100%;
            width: 100%;
            padding: 1rem;
        }
        
        .modal-product-info{
            display: flex;
            gap: 0.1rem;
            flex-direction: column;
            border-bottom: 1px solid hsl(210, 15%, 79%);
            padding-bottom: 0.5rem;
        }
        
        .modal-product-title h4{
            color: hsl(210, 8%, 67%);
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 400;
            text-align: left;
        }
        
        .modal-product-subtitle h2{
            color:$hover-color;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 2rem;
            text-align: left;
        }
        
        .modal-product-model h5{
            font-weight: 300;
            text-align: left;
            color: hsl(210, 8%, 67%);
            font-size: 1rem;
            text-transform: uppercase;
        }
        
        .modal-product-price{ 
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        
        .modal-no-price {
            color: hsl(210, 8%, 67%);
        }
        
        .modal-no-price p{
            color: hsl(210, 8%, 67%);
            font-size: 1.3rem;
        
        }
        
        .modal-price p{
            font-size: 1.7rem;
            color: $primary-color;
            font-weight: 600;
        }
        
        .modal-offer-price p{
            background: hsl(34, 100%, 50%);
            color: hsl(0, 0%, 100%);
            border: none;
            font-size: 0.7rem;
            font-weight: 400;
            padding: 3px 15px 0;
            border-radius: 5%;
        
        }
        
        .modal-description{
            border-bottom: 1px solid hsl(210, 15%, 79%);
            padding-bottom: 1.5rem;
        }
        
        .modal-description-text p{
            color: hsl(210, 8%, 67%);
            line-height: 1.5;
            font-size: 1rem;
            font-weight: 300;
        }
        
        .modal-details{
            display: flex;
            gap: 1rem;
            justify-content: space-between;
            border-bottom: 1px solid hsl(210, 15%, 79%);
            padding-bottom: 2rem;
        }
        
        .modal-details-box-color{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .modal-details-text-color p{
            color:hsl(213, 4%, 58%);
            text-transform: uppercase;
        
        }
        
        .modal-details-box-stock{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .modal-details-text-stock p{
            color:hsl(213, 4%, 58%);
            text-transform: uppercase;
        }
        
        .modal-details-number-stock p{
            color:$primary-color;
            text-transform: uppercase;
        }
        
        .modal-details-box-size{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .modal-details-text-size p{
            color:hsl(213, 4%, 58%);
            text-transform: uppercase;
        }
        
        .modal-details-option-size p{
            color:$primary-color;
            text-transform: uppercase;
        
        }
        .modal-footer-button{
            width: 100%;
            padding: 5% 0;
        }
        
        .modal-checkout-button{
           background: $primary-color;
           color: hsl(0, 0%, 100%);
           border: none;
           font-weight: 500;
           font-size: 1.7rem;
           padding: 5% 0%;
           text-transform: uppercase;
           width: 100%;
           border-radius: 3%;
           cursor: pointer;
        }
        
        .modal-checkout-button:hover{
            background-color: $hover-color;
            transition: 0.3s;
        }
               
        </style>
        
        <div class="modal-product">
            <div class="modal-product-info">
                <div class="modal-product-title">
                    <h4>SMART WATCH</h4>
                </div>
                <div class="modal-product-subtitle">
                    <h2>WATCH LIMITED EDITION</h2>
                </div>
                <div class="modal-product-model">
                    <h5>MODEL AS1500</h5>
                </div>
                <div class="modal-product-price">
                    <del class="modal-no-price">
                        <p>10.000€</p>
                    </del>
                    <div class="modal-price">
                        <p>9.000€</p>
                    </div>
                    <div class="modal-offer-price">
                        <p>EARLY BIRD OFFER</p>
                    </div>
                </div> 
            </div>
        </div>
        `;
    }
}

customElements.define('product-info-component',ProductInfo);