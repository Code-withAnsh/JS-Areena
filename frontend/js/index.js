// index.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch real problem count
    fetch(`${API_BASE_URL}/problems/count`)
        .then(res => res.json())
        .then(data => {
            if (data && data.count !== undefined) {
                const count = data.count;
                const subtitle = document.querySelector('.hero-subtitle');
                if (subtitle) {
                    subtitle.innerHTML = `${count} curated JS problems. AI-powered feedback.<br /> Track your progress. Build real skills.`;
                }
                const counter = document.querySelector('.counter[data-target="300"]');
                if (counter && count !== undefined) {
                    counter.setAttribute('data-target', count);
                }

                // Update categories count dynamically
                if (data.categoriesCount !== undefined) {
                    const catCounter = document.querySelector('.counter[data-target="15"]');
                    if (catCounter) {
                        catCounter.setAttribute('data-target', data.categoriesCount);
                    }
                }
            }
        })
        .catch(err => console.error('Failed to fetch problem count:', err));

    // Wait for GSAP and ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Initial load animation
        gsap.from('.navbar', { y: -50, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from('.hero-content > *', { y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 });
        gsap.from('.hero-code', { x: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });

        // Typewriter effect in hero
        const codeSnippet = `
function reverseString(str) {
  // your code here
  return str.split('').reverse().join('');
}

// AI Feedback:
// 👉 Great job! O(n) time complexity.
    `.trim();

        const _target = document.getElementById('typewriter-code');
        if (_target) {
            let i = 0;
            const typeWriter = () => {
                if (i < codeSnippet.length) {
                    _target.innerHTML += codeSnippet.charAt(i);
                    i++;
                    setTimeout(typeWriter, 40);
                }
            };
            setTimeout(typeWriter, 1200);
        }

        // Scroll trigger for stats
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => {
                    const target = +counter.getAttribute('data-target');
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: 'power1.inOut'
                    });
                },
                once: true
            });
        });

        // Fade in section headers
        gsap.from('.section-header h2', {
            scrollTrigger: { trigger: '.section-header', start: 'top 80%' },
            y: 30, opacity: 0, duration: 0.8
        });

        // Staggered fade in for feature cards
        gsap.from('.feature-card', {
            scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.2
        });
    }

    // Three.js Background
    if (typeof THREE !== 'undefined') {
        initThreeJS();
    }
});

function initThreeJS() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    // Using OrthographicCamera for 2D feel and performance as requested
    const w = window.innerWidth;
    const h = window.innerHeight;
    const camera = new THREE.OrthographicCamera(w / -2, w / 2, h / 2, h / -2, 1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Particles
    const particleCount = 80;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * w;
        positions[i * 3 + 1] = (Math.random() - 0.5) * h;
        positions[i * 3 + 2] = 0;

        velocities.push({
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
        });
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Neon green material
    const pMaterial = new THREE.PointsMaterial({
        color: 0x00ff88,
        size: 4,
        transparent: true,
        opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, pMaterial);
    scene.add(particleSystem);

    // Lines
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.15
    });

    // Keep mouse coords mapped to orthographic space
    const mouse = new THREE.Vector2(-9999, -9999);

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX - w / 2;
        mouse.y = -(e.clientY - h / 2);
    });

    window.addEventListener('resize', () => {
        const nw = window.innerWidth;
        const nh = window.innerHeight;
        camera.left = nw / -2;
        camera.right = nw / 2;
        camera.top = nh / 2;
        camera.bottom = nh / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
    });

    function animate() {
        requestAnimationFrame(animate);

        const posAttr = particles.getAttribute('position');
        const posArr = posAttr.array;

        // Remove old lines
        const existingLines = scene.children.filter(c => c.type === 'LineSegments');
        existingLines.forEach(l => scene.remove(l));

        const lineGeo = new THREE.BufferGeometry();
        const linePositions = [];

        for (let i = 0; i < particleCount; i++) {
            let px = posArr[i * 3];
            let py = posArr[i * 3 + 1];

            // Move particle
            px += velocities[i].x;
            py += velocities[i].y;

            // Mouse repel logic
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
                px += dx * 0.05;
                py += dy * 0.05;
            }

            // Bounce off screen edges
            if (px > w / 2 || px < -w / 2) velocities[i].x *= -1;
            if (py > h / 2 || py < -h / 2) velocities[i].y *= -1;

            posArr[i * 3] = px;
            posArr[i * 3 + 1] = py;

            // Check distance for lines
            for (let j = i + 1; j < particleCount; j++) {
                const px2 = posArr[j * 3];
                const py2 = posArr[j * 3 + 1];

                const dLine = Math.sqrt((px - px2) ** 2 + (py - py2) ** 2);

                if (dLine < 150) {
                    linePositions.push(px, py, 0);
                    linePositions.push(px2, py2, 0);
                }
            }
        }

        posAttr.needsUpdate = true;

        if (linePositions.length > 0) {
            lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            const lines = new THREE.LineSegments(lineGeo, lineMaterial);
            scene.add(lines);
        }

        renderer.render(scene, camera);
    }

    animate();
}
