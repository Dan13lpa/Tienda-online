class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .panel-table{
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .panel-contact{
                display: flex;
                flex-direction: column;
                width: 100%;
            
            }
            .panel-contact-button{
                background-color: hsl(207, 85%, 69%);
                display: flex;
                justify-content: flex-end;
               
            }
            .panel-contact-button-edit {
                width: 3rem;
            }
            .panel-contact-button-delete {
                width: 3rem;
            }
            
            .panel-contact-button-edit svg{
                fill: hsl(0, 0%, 100%);
                width: 2rem;
                padding: 0.5rem 0;
                margin-left: auto;
                cursor: pointer;
            }
            
            .panel-contact-button-delete svg{
                fill: hsl(0, 0%, 100%);
                width: 2rem;
                padding: 0.5rem 0;
                margin-left: auto;
                cursor: pointer;
            }
            
            .panel-contact-info{
                background-color: hsl(226, 64%, 66%);
            
            }
            .panel-contact-info ul{
                list-style: none;
                padding-left: 0;
            }
            
            .panel-contact-info li{
                color:hsl(0, 0%, 100%);
                font-size: 1.7rem;
                font-family: "Poppins", sans-serif;
                margin-bottom: 2px;
                padding-left: 15px;
            }
            
            
        </style>
            <div class = "panel-table">
                <div class = "panel-contact">
                    <div class = "panel-contact-button">
                        <div class = "panel-contact-button-edit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                        </div>
                        <div class = "panel-contact-button-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </div>
                    </div>
                    <div class = "panel-contact-info">
                        <ul>
                            <li><strong>Nombre:</strong> KIM </li>
                            <li><strong>Apellidos:</strong> LEE</li>
                        </ul>
                    </div>
                </div>
                <div class = "panel-contact">
                    <div class = "panel-contact-button">
                        <div class = "panel-contact-button-edit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                        </div>
                        <div class = "panel-contact-button-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </div>
                    </div>
                    <div class = "panel-contact-info">
                        <ul>
                            <li><strong>Nombre:</strong> TOM</li>
                            <li><strong>Apellidos:</strong> PEARSON</li>
                        </ul>
                    </div>
                </div>
            </div>  
        `;
    }
}

customElements.define('table-component', Table);