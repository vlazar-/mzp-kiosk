document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.timeline-item').forEach(item => {
    
    const overlay = item.querySelector('.timeline-items-overlay');
    if(overlay){
      const closeButton = item.querySelector('.timeline-overlay-close-button');

      item.addEventListener('click', function () {
        overlay.style.display = 'flex';
      });

      closeButton.addEventListener('click', function (e) {
        overlay.style.display = 'none';
        e.stopPropagation();
      });

      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }
  });
});