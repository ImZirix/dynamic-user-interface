export const toggleDropdown = {
  setupDropdown(buttonSelector, contentSelector) {
    const dropdownBtn = document.querySelector(buttonSelector);
    const dropdownContent = document.querySelector(contentSelector);

    if (!dropdownBtn || !dropdownContent) {
      console.log('dropdown button or content not found.');
      return;
    }
    dropdownBtn.addEventListener('click', () => {
      const currentStyle = getComputedStyle(dropdownContent).display;
      dropdownContent.style.display = currentStyle === 'none' ? 'block' : 'none';
    });
  },
};
