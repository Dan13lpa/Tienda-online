(()=>{var n={582:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style> \n            \n        .header-panel-button{\n            align-items: center;\n            background-color: hsl(226, 63%, 45%);\n            border-radius: 50px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            gap: 0.1rem;\n            height: 4rem;\n            width: 4rem;\n            transition: all 0.5s ease-in-out;\n        }\n        \n        .header-panel-button span{\n            background-color: hsl(0, 0%, 100%);\n            display: block;\n            height: 3px;\n            margin: 1.5px auto;\n            transition: all 0.3s ease-in-out;\n            width: 50%;\n        }\n            \n        </style>\n\n            <div class="header-panel-button">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        \n        '}}customElements.define("button-component",n)},523:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML='\n            <div class="image-section">\n                <button type="button" id="button-image">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>\n                </button>\n            </div>\n\n            <style>\n                *{\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }   \n                .image-section {\n                    width: 70%;\n                }\n\n                .image-section button {\n                    cursor: pointer;\n                    padding: 2rem;\n                }\n\n                .image-section button svg{\n                    width: 2rem;\n                }\n            </style>\n        ',this.shadow.querySelector("#button-image").addEventListener("click",(()=>{document.dispatchEvent(new CustomEvent("openGalleryModal"))}))}}customElements.define("image-button-component",n)},18:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style> \n            \n            .header-panel-left h1{\n                color:hsl(0, 0%, 100%);\n                margin: 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 2.5rem;\n                font-weight: 600;\n                text-decoration: none;\n            }\n            \n        </style>\n            <div class="header-panel-left">\n                <h1 slot="logo">Detectib</h1>\n            </div>\n            \n        '}}customElements.define("logo-component",n)},397:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style> \n            \n            .header-panel-title h1{\n                color:hsl(0, 0%, 100%);\n                margin: 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 2.5rem;\n                font-weight: 600;\n                text-decoration: none;\n            }\n            \n        </style>\n            <div class="header-panel-title">\n                <h1 slot="titulo">Clientes</h1>\n            </div>\n            \n        '}}customElements.define("title-component",n)}},e={};function t(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return n[a](o,o.exports,t),o.exports}(()=>{"use strict";t(18),t(397),t(582);const n="http://127.0.0.1:8080";class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render(),this.filterData=[]}render(){this.shadow.innerHTML='\n      <style>\n          *{\n              margin: 0;\n              padding: 0;\n              box-sizing: border-box;\n              list-style: none;\n          }\n\n          .filter-section {\n              position: relative;\n              overflow: hidden;\n          }\n\n          .filter-button {\n              width: 100%;\n              display: flex;\n              justify-content: center;\n              cursor: pointer;\n              background-color: white;\n              transition: 0.5s;\n          }\n\n          .filter-button.active {\n              margin-top: 10rem;\n          }\n\n          .filter-icon {\n              transition: 0.5s\n          }\n\n          .filter-icon svg {\n              width: 2rem;\n              fill: rgba(109,183,243,255);\n          }\n\n          .filter-icon:hover svg {\n              transform: scale(110%);\n          }\n\n          .filter-form {\n              width: 100%;\n              position: absolute;\n              z-index: -1\n          }\n\n          .filter-form.active {\n              z-index: 0\n          }\n\n          hero {\n              color: white;\n              font-family: "Poppins", sans-serif;\n              font-size: 1.5rem;\n              font-weight: 500;\n          }\n\n          .filter-form form {\n              padding: 1rem 0;\n              display: flex;\n              justify-content: center;\n              gap: 4rem;\n          }\n\n          form label {\n              color: white;\n              font-family: "Poppins", sans-serif;\n              font-size: 25px;\n              font-weight: 500;\n          }\n\n          form input {\n              width: 100%;\n              font-size: 20px;\n              color: black;\n              padding: 0.2rem;\n              padding-left: 1rem;\n          }\n\n          input[type="text"] {\n              border: none;\n              border-bottom: 1px solid white;\n              background-color:  hsl(216, 94%, 67%);\n              box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n              width: 100%;\n              height: 2.5rem;\n              outline: none;\n          }\n      </style>\n\n      <section class="filter-section">\n          <div class="filter-form">\n              <div>\n                  <hero>Filtra los registros:</hero>\n              </div>\n              <form id="filter-form">\n                  <div class="campo">\n                      <label>Nombre</label>\n                      <input name="name" type="text"></input>\n                  </div>\n                  <div class="campo">\n                      <label>Email</label>\n                      <input name="email" type="text"></input>\n                  </div>\n              </form>\n          </div>\n          <div class="filter-button">\n              <div class="filter-icon">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>\n              </div>\n          </div>\n      </section>\n      ',this.renderFilter()}renderFilter=()=>{const e=this.shadow.querySelector(".filter-button");e.addEventListener("click",(()=>{const t=this.shadow.querySelector(".filter-form");if(e.classList.toggle("active"),t.classList.contains("active")?t.classList.remove("active"):setTimeout((()=>{t.classList.add("active")}),300),e.classList.contains("active")){const n=this.shadow.querySelector("#filter-form"),t=this.shadow.querySelector(".filter-form");e.classList.add("active"),n.classList.contains("active")?(t.classList.remove("active"),setTimeout((()=>{n.classList.remove("active")}),300)):(t.classList.add("active"),setTimeout((()=>{n.classList.add("active")}),300))}else{const e=this.shadow.querySelector("#filter-form"),t=Object.fromEntries(new FormData(e)),a=new URLSearchParams(t).toString();fetch(`${n}/api/admin/users?${a}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("accessToken")}`}}).then((async n=>{if(!n.ok)throw new Error("error: "+n.status);{const e=await n.json();this.filterData=e,console.log(this.filterData)}})).then((()=>{document.dispatchEvent(new CustomEvent("filterResults",{detail:{data:this.filterData}}))})).catch((n=>{console.error(n)}))}}))}}customElements.define("filter-component",e);class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.data=[],this.currentPage=1,this.totalPages=null}static get observedAttributes(){return["url"]}async connectedCallback(){document.addEventListener("refreshTable",(async n=>{await this.loadData(),await this.render()})),document.addEventListener("filterResults",(async n=>{this.data=n.detail.data,await this.render()}))}async attributeChangedCallback(n,e,t){await this.loadData(),await this.render()}loadData=async()=>{try{const e=await fetch(`${n}/api${this.getAttribute("url")}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("accessToken")}`}}),t=await e.json();this.data=t,this.currentPage=t.meta.currentPage,this.totalPages=t.meta.pages}catch(n){console.log(n)}};async render(){this.shadow.innerHTML='\n        <style>\n            :host {\n                width: 35%;\n            }\n\n            .cards{\n                width: 60vh;\n            }\n            .card{\n                width:100%;\n                margin-bottom: 2.5rem;\n\n            }\n            .card-header{\n                background-color: hsl(207, 85%, 69%);\n                height: 4rem;\n                display: flex;\n                justify-content: end;\n                cursor: pointer;\n            }\n            .card-header svg{\n                height: 3.5rem;\n                fill: hsl(0, 0%, 100%);\n            }\n            .card-info{\n                background-color: rgb(113,139,224);\n                color: white;\n                padding: 2rem 1.5rem;\n                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);\n                margin: 0;\n            }\n\n            .card-info-tag{\n                margin-left: 0.5rem;\n\n            }\n            li {\n                font-family: \'Roboto\', sans-serif;\n                font-weight: 600;\n                font-size: 21px;\n                line-height: 0.75;\n                margin-top: 0;\n                margin-bottom: 0.5rem;\n                list-style: none;\n\n            }\n            .button{\n                width: 100%;\n                display: flex;\n                gap: 1rem;\n                justify-content: space-around;\n            }\n            button{\n                width: 20%;\n                height: 50px;\n                font-size: 18px;\n                margin: 14px;\n            }\n            button:hover{\n                cursor: pointer;\n            }\n        </style>\n        <div class="cards">\n        </div>\n        <div class="button">\n            <button class="primera">Primera</button>\n            <button class="anterior">Anterior</button>\n            <button class="siguiente">Siguiente</button>\n            <button class="ultima">Última</button>\n        </div>\n        ',this.data.rows.forEach((n=>{let e=this.shadow.querySelector(".cards"),t=document.createElement("div");t.classList.add("card"),e.appendChild(t);let a=document.createElement("div");a.classList.add("card-header"),t.appendChild(a),a.innerHTML=`\n                <svg class="load-data" data-id="${n.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>\n                <svg class="delete" data-id="${n.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>\n            `;let s=document.createElement("ul");s.classList.add("card-info"),t.appendChild(s),Object.entries(n).forEach((([n,e])=>{let t=document.createElement("li");s.appendChild(t),t.textContent=`${n}: ${e}`}))})),this.renderButtons(),this.renderPagination()}renderPagination=()=>{let e=this.shadow.querySelector(".primera"),t=this.shadow.querySelector(".anterior"),a=this.shadow.querySelector(".siguiente"),s=this.shadow.querySelector(".ultima");e.addEventListener("click",(async()=>{try{const e=await fetch(`${n}/api/admin/users?page=1`),t=await e.json();this.data=t,this.currentPage=parseInt(t.meta.currentPage),this.render()}catch(n){console.log(n)}})),t.addEventListener("click",(async()=>{try{if(this.currentPage>1){const e=await fetch(`${n}/api/admin/users?page=${this.currentPage-1}`),t=await e.json();this.data=t,this.currentPage=parseInt(t.meta.currentPage),this.render()}}catch(n){console.log(n)}})),a.addEventListener("click",(async()=>{try{if(this.currentPage<this.data.meta.pages){const e=await fetch(`${n}/api/admin/users?page=${this.currentPage+1}`),t=await e.json();this.data=t,this.currentPage=parseInt(t.meta.currentPage),this.render()}}catch(n){console.log(n)}})),s.addEventListener("click",(async()=>{try{const e=await fetch(`${n}/api/admin/users?page=${this.totalPages}`),t=await e.json();this.data=t,this.currentPage=parseInt(t.meta.currentPage),this.render()}catch(n){console.log(n)}}))};renderButtons=async()=>{this.shadow.querySelectorAll(".load-data").forEach((n=>{n.addEventListener("click",(()=>{document.dispatchEvent(new CustomEvent("loadData",{detail:{id:n.dataset.id}}))}))})),this.shadow.querySelectorAll(".delete").forEach((n=>{n.addEventListener("click",(()=>{document.dispatchEvent(new CustomEvent("openModal",{detail:{id:n.dataset.id}}))}))}))}}customElements.define("table-component",a);class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["url"]}async connectedCallback(){document.addEventListener("loadData",(async n=>{await this.loadData(n.detail.id)}))}async attributeChangedCallback(n,e,t){await this.render()}async loadData(e){try{const t=await fetch(`${n}/api${this.getAttribute("url")}/${e}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("accessToken")}`}});this.data=await t.json(),Object.entries(this.data).forEach((([n,e])=>{const t=this.shadow.querySelector("#form").elements[n];t&&(t.value=e),console.log(`${n}: ${e}`)}))}catch(n){console.log(n)}}render(){this.shadow.innerHTML='\n        <style>\n            :host {\n                width: 60%;\n            }\n\n            .form{\n                width: 100%;\n\n            }\n            .form-header{\n                background-color: white;\n                display: flex;\n                justify-content: space-between;\n                margin-bottom:6rem ;\n                height: 4rem;\n            }\n            .form-tabs{\n                display: flex;\n                align-items: center;\n                gap: 1rem;\n                max-width: 100%;\n                overflow:hidden;\n            }\n            .form-tabs button:first-child{\n                color: white;\n                background-color: hsl(207, 85%, 69%);\n                height: 4rem;\n                display: flex;\n                align-items: center;\n                padding: 0 1.5rem;\n            }\n            .form-icons{\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n                cursor: pointer;\n                margin-right: 1rem;\n            }\n            .form-icons svg{\n                height: 4rem;\n                fill: hsl(207, 85%, 69%);\n            }\n            .form-tabs button{\n                font-family: \'Roboto\', sans-serif;\n                font-weight: 600;\n                font-size: 24px;\n                color:#808080 ;\n                cursor: pointer;\n                height: 100%;\n                margin: 0;\n                padding: 0 1.5rem;\n            }\n\n            .form-tabs button.active {\n                color: hsl(209, 100%, 50%);\n                border-bottom: none;\n                border-top-color: $primary-color;\n                border-right-color: transparent;\n                border-left-color: transparent;\n            }\n\n            .form-tabs button:hover {\n                background-color: hsl(0, 0%, 87%);\n                border-top-color:hsl(209, 100%, 50%);\n                color: hsl(209, 100%, 50%);\n            }\n\n            .tab-contents > div{\n                display: none;\n                width: 100%;\n            }\n\n            .tab-contents > div.active{\n                display: block;\n            }\n\n            button{\n                overflow: hidden;\n                border: none;\n\n            }\n            .validation-errors{\n                border-color: red;\n            }\n\n            .section-inputs-form {\n                position: relative;\n                margin: 1rem 0;\n\n            }\n\n            .row{\n                display: flex;\n                gap: 2rem;\n                margin-bottom: 5rem;\n                width: 100%;\n            }\n\n            .form-element {\n                width: 100%;\n            }\n\n            \n            .form-element-label {\n                margin-bottom: 0.5rem;\n                width: 100%;\n            }\n\n            .form-element-label label {\n                color:  hsl(0, 100%, 100%);\n                font-family:  \'Roboto\', sans-serif;\n                font-weight: 600;\n                width: 100%;\n            }\n\n            .form-element-input {\n                width: 100%;\n            }\n\n            .form-element-input input{\n                background-color: rgb(113,139,224);\n                border-bottom: 1px solid hsl(0, 0%, 100%);\n                color: hsl(0, 100%, 100%);\n                font-family: \'Roboto\', sans-serif;\n                font-size: 1.2rem;\n                padding: 0.5rem;\n                width: 100%;\n            }\n\n            .add-image{\n                display:flex;\n                flex-direction: column;\n                align-items: flex-start;\n\n            }\n            .add-image active{\n\n            }\n            .add-image button{\n                width:6%;\n                margin-left: 5%;\n                padding: 1.5rem;\n                background-color: white;\n\n            }\n            .button-image:hover{\n                cursor:pointer;\n            }\n\n            .add-image h2{\n                color:white;\n                font-size: 30px;\n            }\n\n        </style>\n        <div class="form">\n            <div class="form-header">\n                <div class="form-tabs">\n                    <button class="active" data-tab="main">\n                        Principal\n                    </button>\n                    <button data-tab="images">\n                        Imágenes\n                    </button>\n                </div>\n                <div class="form-icons">\n                    <div id="clean-button">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>\n                    </div>\n                    <div id="send-form-button">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>\n                    </div>\n                </div>\n            </div>\n            <div class="validation-errors">\n                <ul>\n                </ul>\n            </div>\n            <form>\n                <div class="tab-contents">\n                    <div class="tab-content active" data-tab="main">\n                        <input type="hidden" name="id"/>\n                        <div class="row">\n                            <div class="form-element">\n                                <div class="form-element-label">\n                                    <label for="name">\n                                        Nombre\n                                    </label>\n                                </div>\n                                <div class="form-element-input">\n                                    <input type="text" name="name" />\n                                </div>\n                            </div>\n                                \n                            <div class="form-element">\n                                <div class="form-element-label">\n                                    <label for="email">\n                                        Email\n                                    </label>\n                                </div>\n                                <div class="form-element-input">\n                                    <input type="text" name="email" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row">\n                            <div class="form-element">\n                                <div class="form-element-label">\n                                    <label for="password">\n                                        Contraseña\n                                    </label>\n                                </div>\n                                <div class="form-element-input">\n                                    <input type="password" name="password" />\n                                </div>\n                            </div>\n                                \n                            <div class="form-element">\n                                <div class="form-element-label">\n                                    <label for="repeatPassword">\n                                        Repetir Contraseña\n                                    </label>\n                                </div>\n                                <div class="form-element-input">\n                                    <input type="password" name="repeatPassword" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="tab-content" data-tab="images">\n                        <div class="row">\n                            <div class="form-element">\n                                <div class="form-element-label">\n                                    <label for="file">\n                                        Añadir imagen\n                                    </label>\n                                </div>\n                                <div class="form-element-input">\n                                    <image-button-component></image-button-component>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        ',this.renderTabs(),this.renderButtons()}renderButtons=()=>{const e=this.shadow.querySelector("form"),t=this.shadow.getElementById("send-form-button"),a=this.shadow.getElementById("clean-button");t.addEventListener("click",(t=>{if(t.preventDefault(),!this.validateForm(e.elements))return;let a=e.elements.id.value,s=new FormData(e),o=Object.fromEntries(s.entries()),i=a?`${n}/api/admin/users/${a}`:`${n}/api/admin/users`,r=a?"PUT":"POST";delete o.id,fetch(i,{method:r,headers:{Authorization:`Bearer ${sessionStorage.getItem("accessToken")}`},body:JSON.stringify(o)}).then((n=>n.json())).then((n=>{document.dispatchEvent(new CustomEvent("refreshTable")),e.reset()})).catch((async n=>{const e=await n.json(),t=this.shadow.querySelector("#form"),a=this.shadow.querySelector(".validation-errors ul");a.innerHTML="",e.message.forEach((n=>{t.elements[n.path].classList.add("validation-error");const e=document.createElement;a.appendChild(e),e.textContent=n.messagge}))}))})),a.addEventListener("click",(n=>{n.preventDefault(),e.reset()}))};renderTabs=()=>{const n=this.shadow.querySelector(".form-tabs"),e=this.shadow.querySelector(".tab-contents");n.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(()=>{n.querySelector(".active").classList.remove("active"),e.querySelector(".active").classList.remove("active"),t.classList.add("active"),e.querySelector(`[data-tab="${t.dataset.tab}"]`).classList.add("active")}))}))};validateForm=n=>{let e=!0,t={"only-letters":{regex:/^[a-zA-Z\s]+$/g,message:'Por favor, rellena el campo "Nombre".'},"only-numbers":{regex:/\d/g,message:"Solo números"},telephone:{regex:/^\d{9}$/g,message:"Solo telefono"},email:{regex:/\w+@\w+\.\w+/g,message:'Por favor, rellena el campo "Email".'},password:{regex:/^.{1}$/g,message:"No es una contraseña válida."}};const a=this.shadow.querySelector(".validation-errors ul");a.innerHTML="";for(let s=0;s<n.length;s++){const o=n[s],i=o.dataset.validate;if(i&&""!==i){const n=t[i];if(n&&null==o.value.match(n)){o.classList.add("validation-error"),e=!1;const t=document.createElement("li");a.appendChild(t),t.textContent=n.message}else o.classList.remove("validation-error")}}return e?document.dispatchEvent(new CustomEvent("message",{detail:{text:"El formulario se envió correctamente",type:"success"}})):document.dispatchEvent(new CustomEvent("message",{detail:{text:"Los datos del formulario no son válidos",type:"error"}})),console.log(e),e}}customElements.define("form-component",s);class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){document.addEventListener("openModal",(n=>{this.shadow.querySelector(".modal").classList.toggle("active"),this.id=n.detail.id}))}render(){this.shadow.innerHTML='\n        <style>\n            .modal{\n                background-color: hsla(0, 0%, 100%, 0.541);\n                height: 100vh;\n                position: fixed;\n                left: 0;\n                opacity: 0;\n                top: 0;\n                transition: all 0.2s ease-in-out;\n                width: 100%;\n                z-index: -1;\n            }\n            \n            .modal.active{\n                opacity: 1;\n                z-index: 2000;\n            }\n            \n            .message-box{\n                position: absolute;\n                height: 15vh;\n                width: 25%;\n                top: 30%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);\n                align-items: center;\n                background-color: hsl(0, 0%, 100%);\n                border: 2px solid hsl(34, 91%, 68%);\n            }\n            \n            .message-box h5{\n                position: relative;\n                text-align: center;\n                margin-top: 2rem;\n                font-size: 1rem;\n                font-family: "Poppins", sans-serif;\n                font-weight: 500;\n                \n            }\n            \n            .buttons {\n                display: flex;\n                justify-content: center;\n                gap: 2rem;\n                margin-top: 2rem;\n            }\n            \n            .buttons button {\n                padding: 0.5rem 2rem;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n                font-size: 1rem;\n                font-family: "Poppins", sans-serif;\n            }\n            \n            .buttons button.yes {\n                background-color: hsl(134, 61%, 41%);\n                color: hsl(0, 0%, 100%);\n            }\n            \n            .buttons button.no {\n                background-color: hsl(354, 70%, 54%);\n                color: hsl(0, 0%, 100%);\n            }\n            \n            .close-button {\n                position: absolute;\n                top: 10px;\n                right: 10px;\n                cursor: pointer;\n            }\n            \n            .close-button svg {\n                fill: hsl(0, 0%, 40%);\n                width: 1.5rem;\n                height: 1.5rem;\n            }\n            \n            .close-button:hover svg {\n                fill: hsl(0, 0%, 0%);\n            } \n        </style>\n        <div class="modal">\n            <div class="message-box">\n                <h5>¿Desea eliminar los datos?</h5>\n                <div class="buttons">\n                    <button type="button" class="yes">Sí</button>\n                    <button type="button" class="no modal-button">No</button>\n                </div>\n                <div class="close-button modal-button">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>\n                </div>\n            </div>\n        </div>\n        ';const e=this.shadow.querySelector(".modal"),t=this.shadow.querySelectorAll(".modal-button");this.shadow.querySelector(".yes").addEventListener("click",(async()=>{try{await fetch(`${n}/api/admin/users/${this.id}`,{method:"DELETE"}),e.classList.toggle("active"),document.dispatchEvent(new CustomEvent("refreshTable"))}catch(n){console.log(`Error al eliminar el registro con ID ${this.id}.`,n)}})),t.forEach((n=>{n.addEventListener("click",(()=>{e.classList.toggle("active")}))}))}}customElements.define("modal-component",o);class i extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n          .form {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            margin-top: 100px;\n          }\n  \n          .login-input {\n            margin-bottom: 20px;\n            padding: 10px;\n            width: 200px;\n          }\n  \n          .login-button {\n            padding: 20px 30px;\n            background-color: hsl(189, 57%, 49%);\n            color: white;\n            border: none;\n            cursor: pointer;\n            width: 220px;\n          }\n  \n          .login-button:hover {\n            background-color: hsl(182, 26%, 63%);\n          }\n        </style>\n  \n        <div class="form">\n          <form id="loginForm" action="/api/auth/users/signin" method="POST">\n            <input type="text" id="username" class="login-input" placeholder="Usuario"><br>\n            <input type="password" id="password" class="login-input" placeholder="Contraseña"><br>\n            <button type="submit" id="loginButton" class="login-button">Iniciar sesión</button>\n          </form>\n        </div>\n      ',this.shadow.querySelector("#loginButton").addEventListener("click",(e=>{e.preventDefault();const t=this.shadow.getElementById("username"),a=this.shadow.getElementById("password"),s=t.value,o=a.value;console.log(n),fetch(`${n}/api/auth/users/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:o})}).then((n=>n.json())).then((n=>{sessionStorage.setItem("accessToken",n.accessToken),window.location.href=this.getAttribute("redirection")})).catch((n=>{console.error("Error:",n)}))}))}}customElements.define("login-component",i);class r extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){document.addEventListener("openGalleryModal",(n=>{this.shadow.querySelector(".gallery-modal").classList.toggle("active")}))}render(){this.shadow.innerHTML='\n        <style>\n            .gallery-modal{\n                background-color: white;\n                height: 90vh;\n                position: fixed;\n                opacity: 0;\n                transition: all 0.2s ease-in-out;\n                width: 90%;\n                z-index: -1;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n            \n            .gallery-modal.active{\n                opacity: 1;\n                z-index: 2000;\n                position: absolute;\n                display: flex;\n                flex-direction: column; \n                align-items: center; \n                justify-content: space-between; \n            }\n\n            .gallery-modal.active h5{\n                font-family: "Poppins", sans-serif;\n                font-size: 1.5rem;\n                position: absolute;\n                top: 0;\n                left: 0;\n                margin: 2rem;\n            }\n            .modal-tabs {\n                display: flex;\n                gap: 1rem;\n                align-self: flex-start;\n                top: 0;\n                left: 0;\n                margin: 6.5rem;\n              }\n            \n            .modal-tabs button {\n                padding: 0.5rem 1rem;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n                font-size: 1.2rem;\n                font-family: "Poppins", sans-serif;\n                background-color: rgb(249, 249, 249);\n            }\n            \n            .modal-tabs button.active {\n                background-color: rgb(109,183,243);\n                \n            }\n\n            .tab-contents{\n                height: 100%;\n                margin-top: 7rem;\n            }\n\n            .tab-content{\n                display: none;\n            }\n\n            .tab-content.active{\n                display: block;\n            }\n                \n            .upload {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            \n            .upload input {\n                padding: 0.5rem 2rem;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n                font-size: 1rem;\n                font-family: "Poppins", sans-serif;\n                color: hsl(0, 0%, 100%);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            \n            .close-button {\n                position: absolute;\n                top: 10px;\n                right: 10px;\n                cursor: pointer;\n            }\n            \n            .close-button svg {\n                fill: hsl(0, 0%, 40%);\n                width: 1.5rem;\n                height: 1.5rem;\n            }\n            \n            .close-button:hover svg {\n                fill: hsl(0, 0%, 0%);\n            } \n            .gallery-image {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: flex-start;\n                margin: 1.5rem;\n              }\n              .\n              .image-container {\n                padding: 10px;\n              }\n              \n              .image-container img {\n                width: 100%;\n                height: auto;\n              }\n\n        </style>\n        <div class="gallery-modal active">\n            <h5>Añadir imagen</h5>\n            <div class="modal-tabs">\n                <button class="active" data-tab="main">\n                    Subir archivo\n                </button>\n                <button data-tab="gallery">\n                    Galería\n                </button>\n            </div>\n            <div class="tab-contents">\n                <div class="tab-content active" data-tab="main">\n                    <div class="upload">\n                        <input type="file" class="upload-image" name="file"></input>\n                    </div>\n                </div>\n                <div class="tab-content" data-tab="gallery">\n                    <div class="gallery-image"></div>\n                </div>\n            </div>\n            <div class="close-button" id="close-button">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>\n            </div>\n        </div>\n        ',this.renderTabs(),this.uploadImage()}renderTabs=()=>{const n=this.shadow.querySelector(".modal-tabs"),e=this.shadow.querySelector(".tab-contents");n.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(()=>{n.querySelector(".active").classList.remove("active"),e.querySelector(".active").classList.remove("active"),t.classList.add("active"),e.querySelector(`[data-tab="${t.dataset.tab}"]`).classList.add("active")}))})),this.shadow.querySelector("#close-button").addEventListener("click",(()=>{this.shadow.querySelector(".gallery-modal").classList.toggle("active")}))};uploadImage=async()=>{this.shadow.querySelector(".upload-image").addEventListener("change",(async e=>{let t=e.target.files[0],a=new FormData;a.append("file",t);try{const e=await fetch(`${n}/api/admin/images`,{method:"POST",headers:{Authorization:`Bearer ${sessionStorage.getItem("accessToken")}`},body:a}),t=await e.json(),s=this.shadow.querySelector(".gallery-image");t.forEach((e=>{const t=document.createElement("div"),a=document.createElement("img");t.classList.add("image-container"),a.src=`${n}/api/admin/images/${e}`,t.appendChild(a),s.prepend(t)}));const o=this.shadow.querySelectorAll('[data-tab="main"]'),i=this.shadow.querySelectorAll('[data-tab="gallery"]');o.forEach((n=>{n.classList.remove("active")})),i.forEach((n=>{n.classList.add("active")}))}catch(n){}}))}}customElements.define("image-modal-component",r),t(523)})()})();