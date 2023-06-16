class Table extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      this.loadData();
    }
  
    loadData() {
        fetch('http://localhost:8080/api/admin/productos/detalles')
          .then(response => response.json())
          .then(data => {
            this.data = data;
            this.renderTable(data);
          })
          .catch(error => console.error(error));
      }
  
    renderTable(data) {
      const table = document.createElement('table');
      table.classList.add('my-table');
  
      data.forEach(item => {
        const tableRow = document.createElement('tr');
        const tdNombreProducto = document.createElement('td');
        const tdNombreCategoria = document.createElement('td');
        const tdPrecioBase = document.createElement('td');
        const tdTipoIva = document.createElement('td');
  
        tdNombreProducto.textContent = item.nombreProducto;
        tdNombreCategoria.textContent = item.nombreCategoria;
        tdPrecioBase.textContent = item.precioBase;
        tdTipoIva.textContent = item.tipoIva;
  
        tableRow.appendChild(tdNombreProducto);
        tableRow.appendChild(tdNombreCategoria);
        tableRow.appendChild(tdPrecioBase);
        tableRow.appendChild(tdTipoIva);
  
        table.appendChild(tableRow);
      });
  
      this.shadow.innerHTML = '';
      this.shadow.appendChild(table);
    }
  
    render() {
      this.shadow.innerHTML = `
        <style> 
          .my-table {
            background-color: white;
            color: black;
          }
        </style>
        <table class="my-table"></table>
      `;
    }
  }
  
  customElements.define('table-component', Table);
  