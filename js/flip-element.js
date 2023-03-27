export default (() => {
    
    const flipButton = document.querySelector('.flip-button');
  
    flipButton?.addEventListener('click', () => {
      flipButton.closest('.flip-card').classList.toggle('active');
    });
  })();