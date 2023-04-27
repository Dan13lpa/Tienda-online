class ContactMap extends HTMLElement {

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
             
            .contact-map{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
             }
        </style>

        <div class="contact-map">
            <iframe  width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=2.5489997863769536%2C39.556338932988446%2C2.835674285888672%2C39.676145005898455&amp;layer=mapnik&amp;marker=39.61626788999703%2C2.6923370361328125"></iframe>
        </div>
        `;
    }
}

customElements.define('contact-map-component',ContactMap);