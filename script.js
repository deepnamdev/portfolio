// Select all navigation items and add click event listeners
document.querySelectorAll('.nav-link').forEach(navItem => {
  navItem.addEventListener('click', () => {
    // Get the text content of the clicked navigation item and convert it to lowercase
    const targetId = navItem.textContent.trim().toLowerCase();
    console.log(targetId)

    // Remove 'active' class from all content sections
    document.querySelectorAll('.content').forEach(content => {
      content.classList.remove('active');
    });

    // Find the content section with the matching ID and show it
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});



  const hamburger = document.querySelector('.hamburger');
  const rightMenu = document.querySelector('.hamselect');

  hamburger.addEventListener('click', () => {
      rightMenu.classList.toggle('show');
  });

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied to clipboard: ${text}`);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}
// Each email is wrapped in a div with an onclick handler.
// The onclick handler calls the copyToClipboard function with the respective email text.
// The navigator.clipboard.writeText method copies the text to the clipboard.
// A confirmation alert is shown once the text is copied successfully.
// You can customize the appearance and functionality as needed!
