class Button extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style> 
            
        .header-panel-button{
            align-items: center;
            background-color: hsl(226, 63%, 45%);
            border-radius: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.1rem;
            height: 4rem;
            width: 4rem;
            transition: all 0.5s ease-in-out;
        }
        
        .header-panel-button span{
            background-color: hsl(0, 0%, 100%);
            display: block;
            height: 3px;
            margin: 1.5px auto;
            transition: all 0.3s ease-in-out;
            width: 50%;
        }
            
        </style>

            <div class="header-panel-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
        
        `;
    }
}

customElements.define('button-component', Button);