class Modal extends HTMLElement {

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
            list-style: none;
        }
           
            .modal{
                background-color: hsla(0, 0%, 100%, 0.8);
                height: 100vh;
                position: fixed;
                left: 0;
                opacity: 0;
                top: 0;
                transition: all 0.2s ease-in-out;
                width: 100%;
                z-index: -1;
            }
            
            .modal.active{
                opacity: 1;
                z-index: 2000;
            }

            
    
        
            .modal-product-gallery{
                display: flex;
                left: 50%;
                position: absolute;
                width: 100%;
                height: 100%;
                transition: left 0.3s ease-in;
            }
            
            .modal-product-gallery.active{
                left: 0;
            }
            
           
            .modal-form-gallery{
                background-color: hsla(0, 0%, 100%);
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                overflow: hidden;
                padding: 2rem;
            }
            
            .form-element {
                position: relative;
                width: 100%;
              }
            
            .form-element span {
                position: absolute;
                bottom: -1.25rem;
                right: 0;
                width: 3.75rem;
                text-align: right;
                color: hsl(203, 15%, 78%);
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
            
            
        </style>

        <div class="modal active">
            <slot name="box"></slot>
        </div>

            
        `;
    }
}

customElements.define('modal-component', Modal);

