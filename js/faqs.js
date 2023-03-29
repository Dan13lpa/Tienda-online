export default (() => {

    const faqsButtons = document.querySelectorAll('.faqs-button');

    faqsButtons.forEach(faqsButton => {
        faqsButton.addEventListener("click", () => {
            faqsButton.classList.toggle('active');
            faqsButton.closest('.faqs-box').querySelector('.faqs-box-answer').classList.toggle('active');
            
            if (faqsButton.classList.contains('active')) {
                faqsButton.querySelector("img").src = "./../images/icons/plus.svg"
            } else {
                faqsButton.querySelector("img").src = "./../images/icons/minus.svg"
            }

    
        }) 
   });

})();