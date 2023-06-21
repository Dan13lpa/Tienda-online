class Image extends HTMLElement {

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
                    display: flex; 
                    justify-content: center
                }
                .image-section button {
                    width: 10%;
                    cursor: pointer;
                }
            </style>
        `

        const Image = this.shadow.querySelector("#button-image")
            
        Image.addEventListener("click", () => {
            const addActive = new CustomEvent('add-active', { detail: {detail : "image-component" }});
            document.dispatchEvent(addActive)
        })
    }

}


customElements.define('image-component', Image);