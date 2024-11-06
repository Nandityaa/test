document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.scroll-fade-in');
  
    const handleScrollAnimation = () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          element.classList.add('show');
        }
      });
    };
  
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Call on load in case some elements are already in view
  });
  

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}