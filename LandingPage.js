document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // Typewriter effect
    const typewriterText = "Hola, soy Erick Alejandro";
    let i = 0;
    const speed = 100; // Velocidad de escritura en milisegundos
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
