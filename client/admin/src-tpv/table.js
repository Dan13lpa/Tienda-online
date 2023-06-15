class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://127.0.0.1:8080/api-tpv/productos')
            .then(response => response.json())
            .then(data => {
                this.renderTable(data);
            })
            .catch(error => console.error(error));
    }

    renderTable(data) {
        const tdNombreProducto = this.shadow.querySelector('#nombreProducto');
        const tdNombreCategoria = this.shadow.querySelector('#nombreCategoria');
        const tdPrecioBase = this.shadow.querySelector('#precioBase');
        const tdTipoIva = this.shadow.querySelector('#tipoIva');

        tdNombreProducto.textContent = data[0].nombreProducto;
        tdNombreCategoria.textContent = data[0].nombreCategoria;
        tdPrecioBase.textContent = data[0].precioBase;
        tdTipoIva.textContent = data[0].tipoIva;
    }

    render() {
        this.shadow.innerHTML =
            `
            <style> 
                .my-table {
                    background-color: white;
                    color: black;
                }
            </style>
                <table class="my-table">
                    <tr> 
                        <td id="nombreProducto"></td>
                        <td id="nombreCategoria"></td>
                        <td id="precioBase"></td>
                        <td id="tipoIva"></td>
                    </tr>
                </table>
        `;
    }
}

customElements.define('table-component', Table);