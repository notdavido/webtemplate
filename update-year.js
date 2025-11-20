document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('copyright-year');
    
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});