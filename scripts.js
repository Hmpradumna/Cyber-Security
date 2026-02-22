// Futuristic Interactive Effects for CyberSecure

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Reveal Animation for Elements
    const sections = document.querySelectorAll('.scam-type, .hero-content, .contact-form, .intel-card, .map-container, .archive-card, .log-container, .story-content');

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = window.innerHeight - 100;

            if (sectionTop < revealPoint) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize initial styles for scroll reveal
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 2. Dynamic Ticker Content Updates
    const tickerContainer = document.querySelector('.ticker-content');
    if (tickerContainer) {
        const alerts = [
            "SECURE LINK ESTABLISHED...",
            "GLOBAL THREAT LEVEL: ELEVATED...",
            "RANSOMWARE ATTACK DETECTED IN SOUTH ASIA...",
            "PHISHING CAMPAIGN TARGETING FINANCIAL SECTOR IN EUROPE...",
            "NEW DEFENSE PROTOCOLS INITIALIZED...",
            "DATA BREACH REPORTED IN NORTH AMERICA...",
            "ENCRYPTION STANDARDS DEPLOYED...",
            "CYBER-INTELLIGENCE FEED ACTIVE..."
        ];

        let alertIndex = 0;
        setInterval(() => {
            const currentAlerts = alerts.slice(alertIndex).concat(alerts.slice(0, alertIndex));
            tickerContainer.innerText = currentAlerts.join(' --- ');
            alertIndex = (alertIndex + 1) % alerts.length;
        }, 8000);
    }

    // 3. Mock Dataset & Local Storage Handler
    const logArea = document.querySelector("#logArea");
    const contactForm = document.querySelector("#contactForm");
    const clearLogBtn = document.querySelector("#clearLog");

    const updateLogDisplay = () => {
        if (!logArea) return;

        const data = JSON.parse(localStorage.getItem('cyberTransmissions') || '[]');

        // If empty, add a system notification
        if (data.length === 0) {
            logArea.innerHTML = `
                <div class="log-entry">
                    <span>SYSTEM NOTIFICATION</span>
                    Database empty. Awaiting fresh transmission...
                </div>
            `;
            return;
        }

        logArea.innerHTML = data.reverse().map(entry => `
            <div class="log-entry">
                <span>TRANSMISSION ID: ${entry.id} | TIMESTAMP: ${entry.timestamp}</span>
                <b>DESIGNATION:</b> ${entry.name}<br>
                <b>CHANNEL:</b> ${entry.email}<br>
                <b>PARAMETERS:</b> ${entry.message}
            </div>
        `).join('');
    };

    // Initial log load
    updateLogDisplay();

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = "Scanning Security Protocols...";
            submitBtn.style.background = "#7000ff";

            // Build entry
            const entry = {
                id: 'TX-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                timestamp: new Date().toLocaleString(),
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                message: document.querySelector("#message").value
            };

            try {
                // Futuristic feel delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Save to "Dataset" (localStorage)
                const existingData = JSON.parse(localStorage.getItem('cyberTransmissions') || '[]');
                existingData.push(entry);
                localStorage.setItem('cyberTransmissions', JSON.stringify(existingData));

                submitBtn.innerText = "Uplink Established!";
                submitBtn.style.background = "#00ff88";
                contactForm.reset();
                updateLogDisplay();

                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.background = "var(--primary)";
                }, 3000);
            } catch (error) {
                submitBtn.innerText = "Signal Interference!";
                submitBtn.style.background = "#ff4d4d";
            }
        });
    }

    if (clearLogBtn) {
        clearLogBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to purge all local transmissions?")) {
                localStorage.removeItem('cyberTransmissions');
                updateLogDisplay();
            }
        });
    }

    // 4. Mouse Interactive Background
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.documentElement.style.setProperty('--mouse-x', `${x * 100}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y * 100}%`);
    });
});
