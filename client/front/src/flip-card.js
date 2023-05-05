class FlipCard extends HTMLElement {

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
            .contact{
                height: 60vh;
                position: relative;
            }
            
            .contact-flipbox.flip-card{
                width: 30%;
                height: 40vh;
                position: absolute;
                left: 33%;
                top: 10%;
                z-index: 2;
            }
            
            .contact-flipbox-front{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                height: 100%;
                gap: 2.5rem;
                padding: 2rem;
                position: relative;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(0deg);
                transition: 1s;
            }
            
            .contact-flipbox.active .contact-flipbox-front{
                transform: perspective(1000px) rotateY(180deg);
            }
            
            .contact-flipbox-title{
                font-weight: 300;
                font-size: 2rem;
            }
            
            .contact-flipbox-title h2{
                text-align: center;
                text-transform: uppercase;
                font-family: "Poppins", sans-serif;
                margin: 0;
                color: hsl(208, 13%, 25%);
            }
            
            .contact-flipbox-item{
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .contact-flipbox-item-icon{
                align-items: left;
            }
            
            .contact-flipbox-item-icon svg{
                color:hsl(207, 5%, 56%);
                height: 1rem;
                width: 1rem;
            }
            
            .contact-flipbox-item-description p{
                color: hsl(0, 0%, 50%);
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            
            .contact-flipbox-front-button{
                width: 100%;
                height: 3rem;
                font-family: "Poppins", sans-serif;
                font-size: 100%; 
                line-height: 1.15; 
                margin: 0;
                --webkit-appearance: button;
            }
            .contact-flipbox-front-button button{
                background: hsl(209, 100%, 50%);
                color: hsl(0, 0%, 100%);
                border: none;
                font-weight: 500;
                font-size: 1.4rem;
                padding: 3% 0;
                text-transform: uppercase;
                width: 100%;
                cursor: pointer;
                font-family: inherit; 
                line-height: 1.4; 
                margin: 0; 
                --webkit-appearance: button;
            }
            
            .contact-flipbox-front-button button:hover{
                background-color: hsl(0, 1%, 26%);
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
        <div class="contact-flipbox flip-card">
            <div class="contact-map> 
                <slot name="map"></slot>
            </div>
            <div class="flip-card-front">
                <slot name="front"></slot>
            </div>
            <div class="flip-card-back">
                <slot name="back"></slot>
                <div class="close-button flip-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </div>
            </div>
        </div>

        `;
    }
}

customElements.define('flip-card-component', FlipCard);