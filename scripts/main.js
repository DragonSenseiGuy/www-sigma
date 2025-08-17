// Navbar toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle
(function(){
  const root = document.documentElement; // <html>
  const btn = document.getElementById('theme-toggle');
  const storageKey = 'sigma-theme'; // 'light' | 'dark'

  function applyTheme(mode){
    if (mode === 'light') {
      root.classList.add('light');
      btn && (btn.textContent = '🌞', btn.setAttribute('aria-pressed', 'true'));
    } else {
      root.classList.remove('light');
      btn && (btn.textContent = '🌙', btn.setAttribute('aria-pressed', 'false'));
    }
  }

  // Initial: prefer stored, else OS preference
  const stored = localStorage.getItem(storageKey);
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  // React to OS changes if user hasn't explicitly chosen
  if (!stored && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      applyTheme(e.matches ? 'light' : 'dark');
    });
  }

  // Button handler
  btn && btn.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
})();

