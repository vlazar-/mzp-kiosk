document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.catalog-item').forEach(item => {    
    
    const overlay = item.querySelector('.items-overlay');
    const closeButton = item.querySelector('.overlay-close-button');

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
  });
});