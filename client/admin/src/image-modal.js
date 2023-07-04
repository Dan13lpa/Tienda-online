import { API_URL } from '../config/config.js'

class ImageModal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.name;
        this.render();
    }

    connectedCallback() {
        document.addEventListener('openGalleryModal', event => {
            this.name = event.detail.name;
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
            .modal-header{
                width: 100%;
                height: 20%;
            }

            .modal-body {
                display: flex;
                flex-direction: column;
                height: 60%;
                width: 100%;
                height: 70%;
            }    
            
            .modal-tabs {
                display: flex;
                gap: 0.5rem;
                align-self: flex-start;
                margin-left: 2rem;
                margin-top: 6rem;
              }
            
            .modal-tabs button {
                padding: 0.5rem 1rem;
                border: none;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                cursor: pointer;
                font-size: 1.2rem;
                font-family: "Poppins", sans-serif;
                background-color: rgb(249, 249, 249);
            }
            
            .modal-tabs button.active {
                background-color: rgb(109,183,243);
                border-color: 
            }

            .tab-contents{
                height: 100%;
                border-top: 1px solid rgb(180, 180, 180);
            }

            .tab-content{
                display: none;
            }

            .tab-content.active{
                display: block;
            }
            

            .tab-inputs{
                display: flex;
                flex-direction: column;
                position: absolute;
                width: 25%;
                height: 80%;
                right: 0%;
                background-color: rgb(180, 180, 180);
                gap: 2rem;
                margin-top: 8.9rem;
                
            }
            .tab-inputs input{
                display: flex;
                flex-direction: column;
                margin-left: 1rem;
                padding: 0.4rem 4rem;

                
            }
            .tab-inputs span{
                font-family: "Poppins", sans-serif;
                font-size: 1rem;
                margin: 1.5rem;
            }

            .upload {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 15rem;
               
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
            .gallery-image {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin: 1.5rem;
                align-self: flex-start;
                align-items: flex-start;
            }
            form{
                margin: 1.5rem

            }
            .image-container {
                border: 0.2rem solid green;
                margin-right: 1rem;
            }
              
            .image-container img {
                width: 100%;
                height: auto;
            }
            
            .buttonContainer {
                display: flex;
                justify-content: center;
                position: absolute;
                bottom: 0;
                width: 100%;
                box-sizing: border-box;
                padding-top: 10rem;
            }
            
            .buttonContainer button {
                padding: 1rem;
                margin: 1.5rem 2rem;
                color: hsl(0, 0%, 100%);
                background-color:rgb(109,183,243);
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
            }

        </style>
        <div class="gallery-modal active">
            <div class="modal-header">
                <div>
                    <h5>Añadir imagen</h5>
                </div>
                <div class="close-button" id="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
            <div class="modal-body">
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
                            <input type="file" class="upload-image" name="file"></input>
                        </div>
                    </div>
                    <div class="tab-content" data-tab="gallery">
                        <div class="gallery-image"></div>
                    </div>
                </div>
                <div class="tab-inputs">
                    <form>
                        <label class="section-inputs-form" for="title">
                            <span>Título</span>
                            <input type="text" name="title" />
                        </label>
                        <label class="section-inputs-form" for="text">
                            <span>Texto alternativo</span>
                            <input type="text" name="alt"/>
                        </label>
                        <div class="buttonContainer" >
                            <button>Elegir Imagen</button>
                        </div>
                    </form>
                </div>
            </div>     
        </div>
        `;

        this.renderTabs()
        this.uploadImage()
        this.sendImageToForm()
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

    sendImageToForm() {
        const imageSelectButton = this.shadow.querySelector('.buttonContainer button');
    
        imageSelectButton.addEventListener('click', (event) => {

            event.preventDefault();

            const titleInput = this.shadow.querySelector('input[name="title"]');
            const altInput = this.shadow.querySelector('input[name="alt"]');
            const selectedImage = this.shadow.querySelector('.selected');
    
            if (selectedImage) {
                const title = titleInput.value;
                const alt = altInput.value;
                const imageSrc = selectedImage.src;
                const filename = selectedImage.dataset.filename;
                const name = this.name;
    
                console.log('Título:', title);
                console.log('Texto alternativo:', alt);
                console.log('Imagen:', imageSrc);
                console.log('Nombre de la Imagen:', filename);
                console.log(name)

                image = {
                    title: title,
                    alt: alt,
                    imageSrc: imageSrc,
                    filename: filename,
                    name: name
                }

                document.dispatchEvent(new CustomEvent('sendImageToForm', {
                    detail: {
                        image: image
                    }
                }));


            } else {
                console.log('No se ha seleccionado ninguna imagen.');
            }
        });
    }

    uploadImage = async () => {

        const uploadButton = this.shadow.querySelector('.upload-image')

        uploadButton.addEventListener("change", async event => {

            let file = event.target.files[0]

            let formData = new FormData()
            formData.append('file', file)
            

            try{
                const response = await fetch( `${API_URL}/api/admin/images`, {
                    method: 'POST',
                    headers: { 
                        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                    },
                    body: formData
                })
    
                const data = await response.json()
                const imagesContainer = this.shadow.querySelector('.gallery-image');

                data.forEach( newFilename => {

                    const imageContainer = document.createElement('div');
                    const image = document.createElement('img');

                    imageContainer.classList.add('image-container');
                    image.src = `${API_URL}/api/admin/images/${newFilename}`;
                    image.dataset.filename = newFilename;
                    image.classList.add('selected');

                    imageContainer.appendChild(image);
                    imagesContainer.prepend(imageContainer);
                })

                const uploadTabs = this.shadow.querySelectorAll('[data-tab="main"]')
                const galleryTabs = this.shadow.querySelectorAll('[data-tab="gallery"]')

                uploadTabs.forEach( tab => {
                    tab.classList.remove('active')
                })

                galleryTabs.forEach( tab => {
                    tab.classList.add('active')
                })

            }catch(err){

            }
            
        })
    }
}


customElements.define('image-modal-component', ImageModal);