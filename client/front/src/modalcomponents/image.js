class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .image{
                background-color:  hsl(210, 8%, 67%);
                display: flex;
                justify-content: center;
                height: 100%;
                align-items: center;
                position:absolute;
                width: 50%;
                z-index: 2000;
                border-style: none;
            }
            img {
                border-style: none;
                object-fit: cover;
                max-width: 100%;
            }
        </style>
        <div class="image">
            <img src="../images/slider-image.webp" alt="motorbike">
        </div>
        `;
    }
}

customElements.define('image-component',Image);