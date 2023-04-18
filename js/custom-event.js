export let renderNotification = () => {

    document.addEventListener("message", (event =>{

        let notification = document.querySelector("notification-message");
        
        notification.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        setTimeout(() => {
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 5000);
    }))
}