export default (() => {

    document.addEventListener("message", (event =>{

        let notification = document.querySelector(".notification-message");
        let message = document.querySelector(".notification-message p");
        
        notification.classList.add(event.detail.type);
        notification.classList.add("active");
        message.innerHTML = event.detail.text;


        setTimeout(() => {
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 5000);
    }))
})();