class ImageButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback()  {
        this.render()
    }
    
    render() {

        this.shadow.innerHTML =
        `
            <div class="image-section">
                <button type="button" id="button-image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>
                </button>
            </div>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }   
                .image-section {
                    width: 70%;
                }

                .image-section button {
                    cursor: pointer;
                    padding: 2rem;
                }

                .image-section button svg{
                    width: 2rem;
                }
            </style>
        `

        const buttonImage = this.shadow.querySelector("#button-image")
            
        buttonImage.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent('openGalleryModal', {
                detail: {
                    name: this.getAttribute("name")
                }
            }))
        })
    }

}


customElements.define('image-button-component', ImageButton);