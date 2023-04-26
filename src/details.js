class Details extends HTMLElement {

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
            .details{
                display: flex;
                justify-content: space-between;
                width: 70%;
                padding: 5% 15%;
                gap: 2rem;
                
            }
            
            .details-column{
                display: flex;
                flex-direction: column;
                gap:2rem;
                width: 35%;
            }
            
            .details-item{
                display: flex; 
                justify-content: space-between;
                gap: 1rem;
            }
            
            .details-item-icon{
                width: 25%;
                height:25%;
                filter: invert(0.4) sepia(1) saturate(4) hue-rotate(175deg);
            }
            
            .details-text {
                display: flex;
                flex-direction: column;
                gap: 2rem;  
                text-align: left;
            }
            .details-title h4{
                font-size: 1.5rem;
                font-weight: 600;
                text-decoration: none;
                margin: 0;
                font-family: "Poppins", sans-serif;
            }
            
            .details-description p{
                justify-content: space-between;
                color:hsl(208, 5%, 54%);
                font-family: "Poppins", sans-serif;
            
            }
            
            .details-icon{
                width: 25%;
                height: 25%;
                filter: invert(0.4) sepia(1) saturate(4) hue-rotate(175deg);
                
            
            }
            
            .details-image{
                max-width: 100%;
                max-height: 100%;
                border-style: none;
            }
                
        </style>

        <div class="details">
                <div class="details-column">
                    <div class="details-item">
                        <div class="details-item-icon">
                            <img src="./../images/icons/key-variant.svg"alt="key-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="../images/icons/phone-bluetooth.svg"alt="phone-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="../images/icons/diamond-stone.svg"alt="diamond-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-image">
                        <img src="../images/slider-image.webp"alt="key-image">
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="../images/icons/atv.svg"alt="motorbike-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="../images/icons/shield-lock-outline.svg"alt="shield-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="../images/icons/medal.svg"alt="medal-image">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h4>Fast and secure</h4>
                            </div>
                            <div class="details-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('details-component', Details);