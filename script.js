// Función para enviar mensaje directo por WhatsApp según el plan
function sendWhatsApp(planName) {
    const phoneNumber = "+584262573709";
    const message = `Hola KTeleconexiones, estoy interesado en contratar el ${planName}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
}

// Efecto de scroll para la navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "0.5rem 0";
    } else {
        nav.style.padding = "1rem 0";
    }
});
