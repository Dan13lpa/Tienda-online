class Tabs extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .tab{
                width: 80%;
                height: 20%;
            }
            .tabs{
                margin: 2rem 0; 
                width: 100%;
                border: 1px solid red;
            }
            
            .tabs-header{
                display: flex;
                margin: 0;
            }
            
            .tabs-header li{
                cursor: pointer;
                padding: 10px;
                background-color: hsl(0, 10%, 96%);
                border: 1px solid hsl(0, 0%, 100%);
                transition: 0.2s;
            }
            
            .tabs-header li.active {
                color: hsl(209, 100%, 50%);
                background-color: hsl(0, 0%, 87%);
                border-bottom: none;
                border-top-color: $primary-color;
                border-right-color: transparent;
                border-left-color: transparent;
            }
            
            .tabs-header li:hover {
                background-color: hsl(0, 0%, 87%);
                border-top-color:hsl(209, 100%, 50%);
                color: hsl(209, 100%, 50%);
            }
            
            .tab-contents{
                background-color: hsl(0, 0%, 87%);
                width: 90%;
                padding: 0 5%;
            }
            
            .tab-contents > div{
                padding: 20px;
                display: none;
                width: 100%;
            }
            
            .tab-contents > div.active{
                display: block;
            }
        
        </style>
        <div class="tab">
            <div class="tabs">
            <ul class="tabs-header">
                <li data-num="one" class="active">Description</li>
                <li data-num="two">Characteristics</li>
                <li data-num="three">Opinions</li>
            </ul>
            </div>
        </div> 
        <div class="tab-contents">
            <div class="active" data-num="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ex optio molestiae deleniti accusantium nobis hic, quia, quaerat ipsa numquam, eius expedita odit earum. Dolores dolore iusto est earum praesentium?</div>
            <div class="tab-content" data-num="two">holaa consectetur adipisicing elit. Quam ex optio molestiae deleniti accusantium nobis hic, quia, quaerat ipsa numquam, eius expedita odit earum. Dolores dolore iusto est earum praesentium?</div>
            <div class="tab-content" data-num="three">adiost amet, consectetur adipisicing elit. Quam ex optio molestiae deleniti accusantium nobis hic, quia, quaerat ipsa numquam, eius expedita odit earum. Dolores dolore iusto est earum praesentium?</div>
        </div>
        `;
    }
}

customElements.define('tabs-component',Tabs);