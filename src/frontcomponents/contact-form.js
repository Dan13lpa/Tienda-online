class ContactForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html {
                line-height: 1.15; 
                -webkit-text-size-adjust: 100%; 
            }
            .contact-flipbox-back{
                background-color: hsl(0, 0%, 100%);
                padding: 3rem;
                position: absolute;
                width: 80%;
                height: 100%;
                top: 0;   
                left: 0;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(-180deg);
                transition: 1s;
            }
            
            .contact-flipbox.active .contact-flipbox-back{
                transform: perspective(1000px) rotateY(0deg);
            }
            
            .contact-flipbox-back form{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                gap: 1rem;
            }
            
            .contact-flipbox-back .name-email {
                display: flex;
                gap: 1rem;
            }
            
            .contact-flipbox-back input {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border: 1px solid rgba(232,238,242,255);
                background-color: rgba(248,251,253,255);
                padding: 15px 10px;
                font-size: 1rem;
            }
            
            .contact-flipbox-backback .message {
                height: 100%;
            }
            
            .contact-flipbox-back .message input {
                position: relative;
            }
            
            .contact-flipbox-back input::placeholder {
                color: rgba(203,212,217,255); 
                position: absolute;
            }
            
            .contact-flipbox-back button {
                width: 100%;
                height: 100%;
                background-color: hsl(209, 100%, 50%);
                color: white;
                border: none;
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 1.5rem;
                padding: 1rem 2rem;
                transition: 0.5s;
                cursor: pointer;
            }
            
            .contact-flipbox-back button:hover {
                background-color: hsl(0, 1%, 26%);
            }
            
            .close-button{
                cursor: pointer;
                right: 1rem;
                top: 1rem;
                position: absolute;
            }
            
            .contact-flipbox-back .close-button svg{
                fill: hsl(203, 15%, 78%);
                width: 1.5rem;
                height: 2rem;
            }
            
            .contact-flipbox-back .close-button svg:hover{
                fill: hsl(202, 4%, 61%);
            }
        
        </style>
            <div class="contact-flipbox-back">
                <form>
                    <div class="name-email">
                        <input type="text" data-validate="only-letters" placeholder="Name">
                        <input type="text" placeholder="E-mail adress">
                    </div>
                    <div class="subject">
                        <input type="text" placeholder="subject">
                    </div>
                    <div class="message">
                        <input type="text" placeholder="Message">
                    </div>
                    <div class="send-button">
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </form>
                <div class="close-button flip-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-form-component', ContactForm);