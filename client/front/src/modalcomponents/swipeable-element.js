class SwipeableElement  extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family:"Poppins", sans-serif;

        }
            
        .swipe-element{
            display: flex;
            left: 50%;
            position: absolute;
            width: 200%;
            height: 100%;
            transition: left 0.3s ease-in;
            padding: 1rem 1rem;
        }
        .primary-content{
            height: 80%;
            width: 100%;
        }
        
        .swipe-element.active{
            left: 0;
        }

        .go-back-button{
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            margin: 0.7rem 0;
        }
        
        .go-back-button button{
            border: 1px solid hsl(0, 0%, 80%);
            background-color: transparent;
            color: hsl(0, 0%, 80%);
            padding: 7px 7%;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 0.4s;
        }
        
        .go-back-button button:hover{
            background: $hover-color;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
        }

        .swipe-button{
            width: 100%;
            height: 20%;
          
        }
        
        
        .modal-swipe-button{
           background: hsl(209, 100%, 50%);
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
        
        .modal-swipe-button:hover{
            background-color: hsl(0, 1%, 26%);
            transition: 0.3s;
        }

        </style>

        <div class="swipe-element ">
            <div class="primary-swipe-content">
                <div class="primary-content">
                    <slot name="primary-swipe-content"></slot>
                </div>    
                <div class="swipe-button">
                    <button class="modal-swipe-button">CHECKOUT</button>
                </div>
            </div>
            <div class="secondary-swipe-content">
                <div class="go-back-button swipe-button">
                    <button>Go Back</button>
                </div>
                <slot name="secondary-swipe-content"></slot>
            </div>
        </div>  
        `;
    }
}

customElements.define('swipeable-element-component',SwipeableElement);