document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('click', function() {
            this.style.fontStyle = this.style.fontStyle === 'italic' ? 'normal' : 'italic';
        });
    });
});