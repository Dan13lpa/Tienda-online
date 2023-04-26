class Featured extends HTMLElement {

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
            .featured{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                width: 70%;
                padding: 5% 15%;
            }
            
            .featured-title h2{
                text-align: center;
                color:hsl(208, 13%, 25%);
                font-weight: 600;
                font-size: 3rem;
                font-family: "Poppins", sans-serif;
                text-decoration: none;
            }
            
            .featured-description p{
                text-align: center;
                font-weight: 300;
                font-size: 1.2rem;
                color: hsl(210, 7%, 49%);
                width: 70%;
                padding: 0 15%;
                font-family: "Poppins", sans-serif;
            }
            
            .featured-description::after{
                background-color:hsl(0, 0%, 93%) ;
                content: " ";
                display: block;
                height: 0.4rem;
                width: 7%;
                margin: 2rem auto;
            }
            
            .featured-items{
                display: flex;
                gap: 2em;
                justify-content: space-between;
            }
            
            .featured-item{
                display: flex; 
                flex-direction: column;
                justify-content: space-between;
                gap: 2rem;
            }
            
            .featured-item-image{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            
            .featured-item-title{
                text-align: center;
            }
            
            .featured-item-title h3{
                font: 600 20px/32px; 
                font-stack: "Poppins",sans-serif;
                font-weight: 600;
                text-decoration: none;
            }
            
            .featured-item-description p{
                text-align: center;
                color: hsl(210, 7%, 49%);
                font-family: "Poppins", sans-serif;
            }
           
        </style>
        <div class="featured">
            <div class="featured-title">
                <h2>HOW IT WORKS</h2>    
            </div>
            <div class="featured-description">
                <p>
                    Everybody loves tech gadgets, But our’s is different. Here is how it works. Its should be simple. Add how easy is to install your product
                </p>
            </div>
            <div class="featured-items">
                <div class="featured-item">
                    <div class="featured-item-image">
                        <img src="../images/desktop-106x106.png" alt="card-image">
                    </div>
                    <div class="featured-item-title">
                        <h3>Connect Device</h3>
                    </div>
                    <div class="featured-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                    </div>
                </div>
                <div class="featured-item">
                    <div class="featured-item-image">
                        <img src="../images/toggles-106x106.png" alt="card-image">
                    </div>
                    <div class="featured-item-title">
                        <h3>Configure it</h3>
                    </div>
                    <div class="featured-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                    </div>
                </div>
                <div class="featured-item">
                    <div class="featured-item-image">
                        <img src="../images/trophy-106x106.png" alt="card-image">
                    </div>
                    <div class="featured-item-title">
                        <h3>Yay! Done.</h3>
                    </div>
                    <div class="featured-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                    </div>
                </div>
            </div>
        </div>   
        `;

    }
}

customElements.define('featured-component', Featured);