// Hacker Hero - IP Detection and Terminal Effect

document.addEventListener('DOMContentLoaded', () => {
    initHackerHero();
});

async function initHackerHero() {
    const terminalOutput = document.getElementById('terminal-output');
    const dynamicGreeting = document.getElementById('dynamic-greeting');
    
    // Default fallback
    const defaultGreeting = "Hello! Are you hiring?";
    
    if (!terminalOutput || !dynamicGreeting) return;

    // 1. Start Terminal Animation
    await typeLog(terminalOutput, "> Initializing handshake...", 30);
    await sleep(400);
    await typeLog(terminalOutput, "> Establishing secure connection...", 20);
    await sleep(600);
    
    try {
        // 2. Fetch Visitor Data
        await typeLog(terminalOutput, "> Tracing origin...", 20);
        
        // Using ipapi.co (Free tier, rate limited but good for personal sites)
        // Alternative: ip-api.com (HTTP only, might be issue if site is HTTPS)
        // We'll try fetch with a timeout to fail fast
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout
        
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        
        // 3. Display Detected Info
        await typeLog(terminalOutput, `> IP Detected: ${data.ip}`, 10);
        await sleep(300);
        await typeLog(terminalOutput, `> Location: ${data.city}, ${data.country_name}`, 10);
        
        let greeting = defaultGreeting;
        let highlight = "";
        
        // Determine Greeting
        if (data.org && !data.org.toLowerCase().includes('isp') && !data.org.toLowerCase().includes('telecom')) {
            // It's likely a company or university
            // Clean up org name (remove "LLC", "Inc", etc if simple)
            const orgName = cleanOrgName(data.org);
            await typeLog(terminalOutput, `> Organization: ${orgName}`, 10);
            greeting = `Hello <span class="highlight">${orgName}</span> Team! Are you hiring?`;
        } else if (data.city) {
            greeting = `Hello from <span class="highlight">${data.city}</span>! Are you hiring?`;
        }
        
        await sleep(500);
        await typeLog(terminalOutput, "> Target identified. Engaging...", 10);
        await sleep(500);
        
        // 4. Reveal Greeting
        terminalOutput.style.opacity = '0.5'; // Dim terminal
        dynamicGreeting.innerHTML = greeting;
        dynamicGreeting.classList.add('visible');
        
    } catch (error) {
        // Fallback on error (or adblocker)
        console.log("Hacker Hero: Fallback mode", error);
        await typeLog(terminalOutput, "> Connection trace failed.", 10);
        await typeLog(terminalOutput, "> Loading standard protocol...", 10);
        await sleep(500);
        
        dynamicGreeting.innerHTML = defaultGreeting;
        dynamicGreeting.classList.add('visible');
    }
}

async function typeLog(container, text, speed = 30) {
    const p = document.createElement('div');
    p.className = 'terminal-line';
    container.appendChild(p);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;

    for (let i = 0; i < text.length; i++) {
        p.textContent += text[i];
        await sleep(speed);
    }
}

function cleanOrgName(org) {
    // Simple cleanup
    return org.replace(/,?\s*(Inc\.?|LLC|Ltd\.?|Corp\.?|Corporation|Group|Systems)\s*$/i, '').trim();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
