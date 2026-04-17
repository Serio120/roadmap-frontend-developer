document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains('active');

    // 1. Close all other accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    // 2. If the clicked item wasn't already active, open it
    if (!isActive) {
      currentItem.classList.add('active');
    }
  });
});