export default (() => {
    let list = document.querySelectorAll("ul li");
    let content = document.querySelectorAll(".tab-contents");
  
    list.forEach((li) => {
        li.addEventListener("click", (e) => {
            list.forEach((li) => {
                li.classList.remove("active");
            });
            e.currentTarget.classList.add("active");

            content.forEach((tabContents) => {
                tabContents.classList.remove("active");
                document

    .querySelector(e.currentTarget.dataset.num)
            .classList.add("active");
            });
        });
    });
})();