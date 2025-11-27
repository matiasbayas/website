document.addEventListener('DOMContentLoaded', function() {
  // Use event delegation for robustness
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('.abstract-trigger') || e.target.closest('.abstract-trigger')) {
      e.preventDefault();
      const trigger = e.target.matches('.abstract-trigger') ? e.target : e.target.closest('.abstract-trigger');
      const targetId = trigger.getAttribute('data-target');
      const target = document.getElementById(targetId);
      
      if (target) {
        if (target.style.display === 'none' || getComputedStyle(target).display === 'none') {
          target.style.display = 'block';
        } else {
          target.style.display = 'none';
        }
      }
    }
  });
});
