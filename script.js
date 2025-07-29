// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission - Redirige directamente a WhatsApp
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const plan = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Create WhatsApp message
    const planText = plan === 'plus' ? 'ChatGPT Plus - Bs 35' : 'ChatGPT Pro - Bs 60';
    const whatsappMessage = `🚀 *Nueva Solicitud IAmigo*\n\n👤 *Nombre:* ${name}\n📋 *Plan:* ${planText}\n💬 *Mensaje:* ${message || 'Sin mensaje adicional'}\n\n📱 *Contacto solicitado*`;
    
    const myWhatsAppNumber = '59162499637';
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 140, 66, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U keys to prevent devtools
document.addEventListener('keydown', function(event) {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
    }
});
