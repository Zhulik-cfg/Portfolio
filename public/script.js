// Smooth Scroll
const ctaBtn = document.getElementById('cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function () {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target elements to animate
document.querySelectorAll('.info-section h2, .info-section h3, .feature-card, .gallery-item, .value-prop p, .partner-logo').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
});

// --- Contact Form Submission ---
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const phoneInput = contactForm.querySelector('input[type="tel"]');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Відправляємо...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    phone: phoneInput.value
                })
            });

            const result = await response.json();

            if (result.success) {
                alert('Дякуємо! Ваша заявка прийнята. Ми зв\'яжемося з вами найближчим часом.');
                contactForm.reset();
            } else {
                alert('Виникла помилка. Спробуйте ще раз.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Помилка з\'єднання з сервером. Переконайтеся, що сервер запущено (node server.js).');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Scroll to Top Button visibility
window.addEventListener('scroll', function () {
    var btn = document.getElementById('scrollTopBtn');
    if (btn) {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});

// Animated Counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        updateCounter();
    });
}

// Trigger counters when stats section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    let counted = false;
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
            counted = true;
            animateCounters();
        }
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

// Phone field: only digits, protect +380 prefix
const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        // Always keep +380 prefix
        if (!this.value.startsWith('+380')) {
            this.value = '+380';
        }
        // Remove any non-digit after +380
        var afterPrefix = this.value.slice(4).replace(/\D/g, '');
        this.value = '+380' + afterPrefix;
    });
    phoneInput.addEventListener('keydown', function (e) {
        // Prevent deleting the +380 prefix
        if (this.selectionStart <= 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
            this.setSelectionRange(4, 4);
        }
    });
    // Set cursor after +380 on focus
    phoneInput.addEventListener('focus', function () {
        if (this.selectionStart < 4) {
            this.setSelectionRange(4, 4);
        }
    });
}
