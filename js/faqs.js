export default (() => {

    const faqsButtons = document.querySelectorAll('.plus-minus-toggle');

    faqsButtons.forEach(faqsButton => {
        faqsButton.addEventListener("click", () => {
            faqsButton.classList.toggle('active');
            faqsButton.closest('.faqs-box').querySelector('.faqs-box-answer').classList.toggle('active');
        }) 
   });

})();