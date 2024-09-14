function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
      const file = el.getAttribute('data-include');
      if (file) {
        fetch(file)
          .then(response => response.text())
          .then(data => {
            el.innerHTML = data;
          })
          .catch(err => {
            console.error(`Error loading file ${file}:`, err);
            el.innerHTML = "Failed to load content";
          });
      }
    });
  }
  document.addEventListener('DOMContentLoaded', includeHTML);