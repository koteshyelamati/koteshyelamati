// Theme persistence — safe wrapper around localStorage for sandboxed/restricted environments
const storage = (() => {
  try {
    localStorage.setItem('_test', '1');
    localStorage.removeItem('_test');
    return localStorage;
  } catch {
    // Private browsing, iframe sandbox, or storage disabled — fall back to in-memory store
    const mem = {};
    return { getItem: (k) => mem[k] ?? null, setItem: (k, v) => { mem[k] = v; } };
  }
})();

const html = document.documentElement;
html.setAttribute('data-theme', storage.getItem('ky-theme') || 'dark');

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  storage.setItem('ky-theme', next);
});

// Scroll-reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Stagger animation delays within grid/list containers
document.querySelectorAll(
  '.focus-grid, .metrics-grid, .skills-grid, .about-highlights, .credentials-grid .credentials-column'
).forEach((grid) => {
  grid.querySelectorAll('.reveal').forEach((child, i) => {
    child.style.transitionDelay = `${i * 70}ms`;
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link tracking
const sections = document.querySelectorAll('section[id]');
const desktopLinks = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        desktopLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);
sections.forEach((s) => activeObserver.observe(s));

// Animated counters for metric numbers
function animateCounter(el) {
  const raw = el.textContent.trim();
  const isPlus99 = raw === '99%+';
  const isPercent = raw.endsWith('%');
  const isPlus = raw.endsWith('+');
  const base = parseFloat(raw.replace(/[^0-9.]/g, ''));
  if (isNaN(base)) return;

  const suffix = isPlus99 ? '%+' : isPercent ? '%' : isPlus ? '+' : '';
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * base) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll('.metric-num').forEach((el) => counterObserver.observe(el));
