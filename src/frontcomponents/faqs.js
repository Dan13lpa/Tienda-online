class Faqs extends HTMLElement {

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

            .faqs{
                background-color:  hsl(204, 56%, 98%);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                width: 70%;
                padding: 5% 15%;
            }
            .faqs-header{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                margin-bottom: 3rem;
            }
            .faqs-title{
                text-align: center;
                position: relative;
            }
            
            .faqs-title h2{
                text-align: center;
                font-weight: 600, bold;
                font-size: 3rem;
                color: hsl(226, 38%, 25%);
                text-transform: uppercase;
                font-family: "Poppins", sans-serif;
                text-decoration: none;
            }
            
            .faqs-description p{
                text-align: center;
                font-weight: 300, bold;
                font-size: 1.3rem;
                padding: 0 15%;
                color:hsl(225, 12%, 66%);
                margin: 1px;
                letter-spacing: 1.5px;
                font-family: "Poppins", sans-serif;
            }
            
            .faqs-list{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                
            }
            
            .faqs-box{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                gap: 1rem;
            }
            
            .faqs-box-question{
                border-bottom: 1px solid rgb(184, 184, 184);
                display: flex;
                justify-content: space-between;
                position: relative;
                padding: 1rem 0;
            }
            
            .faqs-box-question h3{
                display: flex;
                justify-content: space-between;
                color: hsl(226, 38%, 25%);
                font-size: 2.5rem;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
}
            }
            
            .faqs-box-icon {
                filter: invert(0.6) sepia(0) saturate(0.50) hue-rotate(0.210deg);
                height: 3vh;
                width: 2rem;
                width: 2%;
                height:5%;
            }
            
            .faqs-box-answer {
                overflow: hidden;
                max-height: 0;
                transition: all 0.5s;
            }
            
            .faqs-box-answer.active{
                max-height: 50vh;
            }
            
            .faqs-box-answer p{
                color: hsl(210, 3%, 59%);
                font-weight: 300, bold;
                font-size: 1.2rem;
                line-height: 175%;
                padding: 2rem 0;
            }
            
            .plus-minus-toggle {
                cursor: pointer;
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
            }
            
            .plus-minus-toggle::before,
            .plus-minus-toggle::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80%;
                height: 2px;
                background-color: hsl(210, 3%, 59%);
                transform: translate(-50%, -50%);
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            
            .plus-minus-toggle::before {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(0deg);
            }
            
            .plus-minus-toggle::after {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(90deg);
            }
            
            .plus-minus-toggle.active::after {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            
            .plus-minus-toggle.active::before {
                opacity: 0;
            }
        
           
        </style>

        <div class="faqs">
                <div class="faqs-header">
                    <div class="faqs-title">
                        <h2>Bootstrap 5 FAQ</h2>
                    </div>
                    <div class="faqs-description">
                        <p>A lot of people don´t appreciate the moment until it´s passed. I´m not trying my hardest, and I´m not trying to do</p>
                    </div>
                </div>   
                <div class="faqs-list">
                    <div class="faqs-box"> 
                        <div class="faqs-box-question">
                            <div class="faqs-box-title">
                                <h3>What is Bootstrap 5?</h3>
                            </div>
                            <div class="faqs-box-icon">
                                <div class="plus-minus-toggle"></div>
                            </div>
                        </div>
                        <div class="faqs-box-answer">
                            <p>We´re not always in the position that we want to be at. We´re constantly growing. We´re constantly making mistakes. we´re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. Alot of people don´t appreciate the moment until it´s passed.</p>
                        </div>    
                    </div>
                    <div class="faqs-box"> 
                        <div class="faqs-box-question">
                            <div class="faqs-box-title">
                                <h3>How do I order?</h3>
                            </div>
                            <div class="faqs-box-icon">
                                <div class="plus-minus-toggle">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="faqs-box-answer">
                            <p>We´re not always in the position that we want to be at. We´re constantly growing. We´re constantly making mistakes. we´re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. Alot of people don´t appreciate the moment until it´s passed.</p>
                        </div>    
                    </div>
                    <div class="faqs-box"> 
                        <div class="faqs-box-question">
                            <div class="faqs-box-title">
                                <h3>How can i make the payment?</h3>
                            </div>
                            <div class="faqs-box-icon">
                                <div class="plus-minus-toggle">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="faqs-box-answer">
                            <p>We´re not always in the position that we want to be at. We´re constantly growing. We´re constantly making mistakes. we´re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. Alot of people don´t appreciate the moment until it´s passed.</p>
                        </div>    
                    </div>
                    <div class="faqs-box"> 
                        <div class="faqs-box-question">
                            <div class="faqs-box-title">
                                <h3>How much time does it take to receive the order?</h3>
                            </div>
                            <div class="faqs-box-icon">
                                <div class="plus-minus-toggle">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="faqs-box-answer">
                            <p>We´re not always in the position that we want to be at. We´re constantly growing. We´re constantly making mistakes. we´re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. Alot of people don´t appreciate the moment until it´s passed.</p>
                        </div>    
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('faqs-component', Faqs);