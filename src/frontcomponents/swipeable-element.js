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

        </style>

        <div class="modal-product-gallery swipe-element">
        <slot name="primary-swipe-content"></slot>

        `;
    }
}

customElements.define('swipeable-element-component',SwipeableElement);