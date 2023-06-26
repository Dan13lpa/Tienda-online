import { API_URL } from '../config/config.js'

class Login extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadow.innerHTML = `
        <style>
          .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
          }
  
          .login-input {
            margin-bottom: 20px;
            padding: 10px;
            width: 200px;
          }
  
          .login-button {
            padding: 20px 30px;
            background-color: hsl(189, 57%, 49%);
            color: white;
            border: none;
            cursor: pointer;
            width: 220px;
          }
  
          .login-button:hover {
            background-color: hsl(182, 26%, 63%);
          }
        </style>
  
        <div class="form">
          <form id="loginForm" action="/api/auth/users/signin" method="POST">
            <input type="text" id="username" class="login-input" placeholder="Usuario"><br>
            <input type="password" id="password" class="login-input" placeholder="Contraseña"><br>
            <button type="submit" id="loginButton" class="login-button">Iniciar sesión</button>
          </form>
        </div>
      `;
  
      const handleLogin = (event) => {
        event.preventDefault();
  
        const usernameInput = this.shadow.getElementById('username');
        const passwordInput = this.shadow.getElementById('password');
  
        const username = usernameInput.value;
        const password = passwordInput.value;
  
        fetch('${API_URL}/api/auth/users/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: username,
            password: password
          })
        })
          .then(response => response.json())
          .then(data => {
            sessionStorage.setItem('accessToken', data.accessToken)
            
            window.location.href = this.getAttribute('redirection')
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };
  
      this.shadow.querySelector('#loginButton').addEventListener('click', handleLogin);
    }
  }
  
  customElements.define('login-component', Login);