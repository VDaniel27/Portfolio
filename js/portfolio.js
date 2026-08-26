window.initPortfolio = () => {
    // Restore theme
    if (localStorage.getItem('theme') === 'light')
        document.body.classList.add('light');

    // Scroll animations
    window.observeAnimations();

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#mainNav .nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`#mainNav a[href="#${e.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => navObserver.observe(s));
};

window.observeAnimations = () => {
    document.querySelectorAll('#habilidades .animate-on-scroll').forEach(el => el.classList.remove('visible'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
            el.classList.add('visible');
        else
            observer.observe(el);
    });
};

window.resetSkillAnimations = () => {
    document.querySelectorAll('#habilidades .animate-on-scroll').forEach(el => {
        el.classList.remove('visible');
    });
};

window.toggleTheme = () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    return isLight;
};

window.isLightTheme = () => document.body.classList.contains('light');
