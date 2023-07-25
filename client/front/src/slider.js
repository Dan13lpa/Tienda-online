class Slider extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            html {
                line-height: 1.15; 
                -webkit-text-size-adjust: 100%; 
            }
            .slider{
                display: flex;
                flex-direction: column;
                position: relative;
                height: 95vh;
                align-items: center;
            }
            
            .slider .slider-background  {
                position: absolute;
                width: 100%;
                height: 95vh;
                z-index: -1;
            }
            
            .slider-background img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-style: none;
            }
            .slider-image{
                position: absolute;
                bottom: 5%;
                width: 22%;
                z-index: -1;
            }
            
            .slider-image img{
                width: 100%;
                border-style: none;
                
            }
            .slider .slider-title{
                position: absolute;
                top: 10%;
            }
            
            .slider .slider-title h1{
                text-align: center;
                font-size: 5rem;
                color: rgb(77, 75, 75);
                margin: 0;
                font-weight: 600;
                text-decoration: none;
            }
            
            .slider .slider-description{
                position: absolute;
                top: 20%;
            }
            
            .slider .slider-description p{
                text-align: center;
                font-size: 1.6rem;
                padding: 0 25%;
                color:rgb(151, 129, 129);
                margin: 1px
                font-family: "Poppins", sans-serif;
            }
            
            .slider .slider-button{
                position: absolute;
                top: 35%;
            }
            
            .slider .slider-button button {
                display: flex;
                justify-content: center;
                border-radius: 80px;
                padding: 20px 80px;
                border: none;
                background-color: hsl(209, 100%, 50%);;
                color:white;
                cursor: pointer;
                font-size: 1.5rem;
                font-stack: "Poppins",sans-serif;
                text-transform: none;
                --webkit-appearance: button;
            }
            .slider .slider-button button:hover{
                background-color: #374048;
            }

        </style>

        <div class="slider">
            <div class="slider-background">
                <img src="./images/road.webp" alt="Background">
            </div>
                <div class="slider-title">  
                    <h1>The future of motorbikes</h1>
                </div>
            <div class="slider-description">
                <p>
                    Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users.
                    Actual focused services before highly efficient human capital.
                </p>
            </div>
            <div class="slider-button modal-button">
                <button type="button">BUY IT NOW</button>
            </div>
            <div class="slider-image">
                <img src="./images/slider-image.webp" alt="image motorbike">
            </div>
        </div>
        `;
    }
}

customElements.define('slider-component',Slider);