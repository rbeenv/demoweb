// Bar Demo Website - Main JavaScript

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
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

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(245, 245, 220, 0.98)';
                navbar.style.boxShadow = '0 4px 16px rgba(75, 55, 40, 0.15)';
            } else {
                navbar.style.backgroundColor = 'rgba(245, 245, 220, 0.95)';
                navbar.style.boxShadow = '0 2px 8px rgba(75, 55, 40, 0.1)';
            }
        }
    });

    // Reservation Form Validation
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        initReservationForm();
    }
});

// Reservation Form Functions
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Set minimum date to today
    const dateInput = document.getElementById('fecha');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.parentElement.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitReservation();
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    let message = '';

    // Remove previous error state
    formGroup.classList.remove('error');

    // Check if field is required
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        message = 'Este campo es obligatorio';
    } else {
        // Specific validations
        switch (field.type) {
            case 'email':
                if (field.value && !isValidEmail(field.value)) {
                    isValid = false;
                    message = 'Por favor, introduce un email válido';
                }
                break;
            
            case 'tel':
                if (field.value && !isValidPhone(field.value)) {
                    isValid = false;
                    message = 'Por favor, introduce un teléfono válido';
                }
                break;
            
            case 'date':
                if (field.value) {
                    const selectedDate = new Date(field.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (selectedDate < today) {
                        isValid = false;
                        message = 'La fecha debe ser hoy o posterior';
                    }
                }
                break;
            
            case 'number':
                if (field.id === 'personas') {
                    const value = parseInt(field.value);
                    if (value < 1 || value > 20) {
                        isValid = false;
                        message = 'El número de personas debe estar entre 1 y 20';
                    }
                }
                break;
        }

        // Name validation
        if (field.id === 'nombre' && field.value) {
            if (field.value.length < 3) {
                isValid = false;
                message = 'El nombre debe tener al menos 3 caracteres';
            }
        }
    }

    if (!isValid) {
        formGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    // Spanish phone format: allows various formats
    const re = /^[\d\s\+\-\(\)]{9,15}$/;
    return re.test(phone);
}

function submitReservation() {
    const form = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');
    
    // Get form data
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        personas: document.getElementById('personas').value,
        ocasion: document.getElementById('ocasion').value,
        comentarios: document.getElementById('comentarios').value
    };

    // Simulate API call
    console.log('Reservation data:', formData);

    // Show success message
    form.style.display = 'none';
    successMessage.classList.add('show');
    successMessage.innerHTML = `
        <h3 style="margin-bottom: 1rem;">¡Reserva Confirmada!</h3>
        <p>Gracias <strong>${formData.nombre}</strong>, tu reserva ha sido registrada.</p>
        <p><strong>Fecha:</strong> ${formatDate(formData.fecha)}</p>
        <p><strong>Hora:</strong> ${formData.hora}</p>
        <p><strong>Personas:</strong> ${formData.personas}</p>
        <p style="margin-top: 1.5rem;">Te enviaremos una confirmación a <strong>${formData.email}</strong></p>
        <button class="btn mt-2" onclick="resetForm()">Hacer otra reserva</button>
    `;

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function resetForm() {
    const form = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');
    
    form.reset();
    form.style.display = 'block';
    successMessage.classList.remove('show');
    successMessage.innerHTML = '';
    
    // Remove all error states
    form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// PDF Viewer Functions
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/carta.pdf';
    link.download = 'Carta-Bar-El-Refugio.pdf';
    link.click();
}

// Animation on scroll (optional enhancement)
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.hours-card, .about-content, .location-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations if on home page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', observeElements);
}
