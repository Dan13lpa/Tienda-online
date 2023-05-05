export default (() => {
    const formInputs = document.querySelectorAll('.form-input');
  
    formInputs.forEach(input => {
      if (input.maxLength > 0) {
        input.addEventListener('input', () => {
          if (input.value.length > 0) {
            const counterSpan = input.parentElement.querySelector('.form-element-counter');
            counterSpan.textContent = `${input.value.length} / ${input.maxLength}`;
          } else {
            const counterSpan = input.parentElement.querySelector('.form-element-counter');
            counterSpan.textContent = '0 / ' + input.maxLength;
          }
        });
      }
    });
  
  })();