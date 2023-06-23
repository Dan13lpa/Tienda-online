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
        });
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .gallery-modal{
                background-color: white;
                height: 90vh;
                position: fixed;
                opacity: 0;
                transition: all 0.2s ease-in-out;
                width: 90%;
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
                position: absolute;
                top: 0;
                left: 0;
                margin: 2rem;
            }
            .modal-tabs {
                display: flex;
                gap: 1rem;
                align-self: flex-start;
                top: 0;
                left: 0;
                margin: 6.5rem;
              }
            
            .modal-tabs button {
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1.2rem;
                font-family: "Poppins", sans-serif;
                background-color: rgb(249, 249, 249);
            }
            
            .modal-tabs button.active {
                background-color: rgb(109,183,243);
                
            }

            .tab-contents{
                height: 100%;
                margin-top: 7rem;
            }

            .tab-content{
                display: none;
            }

            .tab-content.active{
                display: block;
            }
                
            .upload {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .upload input {
                padding: 0.5rem 2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 100%);
                display: flex;
                justify-content: center;
                align-items: center;
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
        <div class="gallery-modal active">
            <h5>Añadir imagen</h5>
            <div class="modal-tabs">
                <button class="active" data-tab="main">
                    Subir archivo
                </button>
                <button data-tab="gallery">
                    Galería
                </button>
            </div>
            <div class="tab-contents">
                <div class="tab-content active" data-tab="main">
                    <div class="upload">
                        <input type="file" class="upload-image"></input>
                    </div>
                </div>
                <div class="tab-content" data-tab="gallery">
                    <p> lorem ipsum dolor sit</p>
                </div>
            </div>
            <div class="close-button" id="close-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
        </div>
        `;

        this.renderTabs()
        this.uploadImage()
    }

            
    renderTabs = () => {
        const tabsHeader = this.shadow.querySelector('.modal-tabs');
        const tabContents = this.shadow.querySelector('.tab-contents');
        const tabs = tabsHeader.querySelectorAll('button');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabsHeader.querySelector('.active').classList.remove('active');
                tabContents.querySelector('.active').classList.remove('active');
                tab.classList.add('active');
                tabContents.querySelector(`[data-tab="${tab.dataset.tab}"]`).classList.add('active');
            });
        });

        const closeButton = this.shadow.querySelector("#close-button")

        closeButton.addEventListener("click", () => {
            const modal = this.shadow.querySelector('.gallery-modal');
            modal.classList.toggle('active');
        })
    };

    uploadImage = async () => {

        const uploadButton = this.shadow.querySelector('.upload-image')

        uploadButton.addEventListener("change", async () => {

            let file = null

            console.log(file)

            let formData = new FormData()
            formData.append('file', file)

            await fetch( `http://127.0.0.1:8080/api/admin/images`, {
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
                },
                body: formData
            })
        })
    }
}

customElements.define('image-modal-component', ImageModal);