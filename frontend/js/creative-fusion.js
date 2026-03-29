document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  setupScrollProgress();
  setupSmoothScrollButtons();
  setupRevealObserver();
  setupDynamicWord();
  setupGalleryPreview();
  setupCounters();
  setupTiltCards();
  setupMagneticButtons();
});

function setupScrollProgress() {
  const progress = document.getElementById('scroll-progress');
  if (!progress) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const width = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    progress.style.width = `${width}%`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

function setupSmoothScrollButtons() {
  const triggers = document.querySelectorAll('[data-target]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const selector = trigger.getAttribute('data-target');
      if (!selector) return;
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const navLinks = document.querySelectorAll('.site-nav a[href^="#"], .brand[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      if (!targetId) return;
      const destination = document.querySelector(targetId);
      if (destination) {
        destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function setupRevealObserver() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -30px 0px' }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
    observer.observe(item);
  });
}

function setupDynamicWord() {
  const wordNode = document.getElementById('dynamic-word');
  if (!wordNode) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const words = ['alive', 'cinematic', 'iconic', 'magnetic'];
  let pointer = 0;

  setInterval(() => {
    pointer = (pointer + 1) % words.length;
    wordNode.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 0, transform: 'translateY(-6px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 520, easing: 'ease-out' }
    );
    wordNode.textContent = words[pointer];
  }, 2200);
}

function setupGalleryPreview() {
  const items = document.querySelectorAll('.gallery-item');
  const preview = document.querySelector('.gallery-preview');
  const surface = document.getElementById('preview-surface');
  const tag = document.getElementById('preview-tag');
  const title = document.getElementById('preview-title');
  const copy = document.getElementById('preview-copy');
  const chips = document.getElementById('preview-chips');

  if (!items.length || !preview || !surface || !tag || !title || !copy || !chips) return;

  const setPreview = (item) => {
    const project = item.getAttribute('data-project') || '';
    const projectTag = item.getAttribute('data-tag') || '';
    const projectCopy = item.getAttribute('data-copy') || '';
    const surfaceStyle = item.getAttribute('data-surface') || 'linear-gradient(120deg, #f46f43, #ffbc5f)';
    const chipText = item.getAttribute('data-chips') || '';

    preview.classList.add('is-swapping');

    setTimeout(() => {
      title.textContent = project;
      tag.textContent = projectTag;
      copy.textContent = projectCopy;
      surface.style.background = surfaceStyle;
      chips.innerHTML = '';
      chipText
        .split('|')
        .map((chip) => chip.trim())
        .filter(Boolean)
        .forEach((chip) => {
          const li = document.createElement('li');
          li.textContent = chip;
          chips.appendChild(li);
        });

      preview.classList.remove('is-swapping');
    }, 120);
  };

  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((node) => {
        node.classList.remove('active');
        node.setAttribute('aria-selected', 'false');
      });

      item.classList.add('active');
      item.setAttribute('aria-selected', 'true');
      setPreview(item);
    });
  });
}

function setupCounters() {
  const counters = document.querySelectorAll('.count');
  if (!counters.length) return;

  const animateCounter = (node) => {
    const target = Number(node.getAttribute('data-target') || '0');
    const duration = 1400;
    const start = performance.now();

    const tick = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = `${Math.round(target * eased)}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.tilt');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const midX = bounds.width / 2;
      const midY = bounds.height / 2;
      const rotateY = ((x - midX) / midX) * 5;
      const rotateX = -((y - midY) / midY) * 5;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

function setupMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const buttons = document.querySelectorAll('.magnetic');
  buttons.forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const bounds = button.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      button.style.transform = `translate(${offsetX * 0.16}px, ${offsetY * 0.2}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}
