// ========================================
// INISIALISASI - Kode yang dijalankan saat halaman dimuat
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi semua fungsi
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initImageFallbacks();
});

// ========================================
// NAVBAR MOBILE - Hamburger menu
// ========================================
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar effect saat scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// SMOOTH SCROLL - Scroll halus ke section
// ========================================
function initSmoothScroll() {
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
}

// ========================================
// SCROLL ANIMATIONS - Animasi saat scroll
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe semua elemen yang bisa dianimasikan
    document.querySelectorAll('.card, .manfaat-item, .tim-card, .section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ========================================
// IMAGE FALLBACK - Penanganan gambar gagal load
// ========================================
function initImageFallbacks() {
    // Fungsi untuk handle error gambar profil tim
    window.handleImageError = function(img) {
        const fallback = img.nextElementSibling;
        if (fallback && fallback.classList.contains('photo-fallback')) {
            img.style.display = 'none';
            fallback.style.display = 'flex';
        }
    };
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}