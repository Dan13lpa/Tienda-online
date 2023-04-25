class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .header-menu ul {
                display: flex; 
                gap: 1.5rem;
                justify-content: space-between; 
                list-style: none;
            }

            .header-menu ul li a {
                color:grey;
                font-family: "Poppins",sans-serif;
                text-decoration: none;
                font-size: 1.2rem;
            }
        </style>
         
        <div class="header-menu">
            <ul> 
                <li> 
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#product">PRODUCT</a>
                </li>
                <li>
                    <a href="#features">FEATURES</a>
                </li>
                <li>
                    <a href="#details">DETAILS</a>
                </li>
                <li>
                    <a href="#team">TEAM</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
                <li>
                    <a href="#social">SOCIAL</a>
                </li> 
            </ul>
        </div>

        `;

    }
}

customElements.define('menu-component', Menu);