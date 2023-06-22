class ImageModal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('openGalleryModal', event => {
            const modal = this.shadow.querySelector('.gallery-modal');
            modal.classList.toggle('active');
            this.id = event.detail.id;
        });
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .gallery-modal{
                background-color: white;
                height: 70vh;
                position: fixed;
                opacity: 0;
                transition: all 0.2s ease-in-out;
                width: 60%;
                z-index: -1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .gallery-modal.active{
                opacity: 1;
                z-index: 2000;
                position: absolute;
                display: flex;
                flex-direction: column; 
                align-items: center; 
                justify-content: space-between; 
            }

            .gallery-modal.active h5{
                font-family: "Poppins", sans-serif;
                font-size: 1.5rem;
            }
                
            .buttons {
                gap: 2rem;
                position: absolute;
                bottom: 0;
                margin-bottom: 1rem;
                
              }
            
            .buttons button {
                padding: 0.5rem 2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
                font-family: "Poppins", sans-serif;
                
            }
            
            .buttons button. {
                background-color: hsl(134, 61%, 41%);
                color: hsl(0, 0%, 100%);
            }
            
            .buttons button {
                background-color: hsl(354, 70%, 54%);
                color: hsl(0, 0%, 100%);
            }
            
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            
            .close-button svg {
                fill: hsl(0, 0%, 40%);
                width: 1.5rem;
                height: 1.5rem;
            }
            
            .close-button:hover svg {
                fill: hsl(0, 0%, 0%);
            } 
        </style>
        <div class="gallery-modal">
            <h5>Añadir imagen</h5>
            <div class="buttons">
                <button type="button" class="upload">Cargar archivo</button>
            </div>
            <div class="close-button modal-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
        </div>
        `;


       
    }
}

customElements.define('image-modal-component', ImageModal);