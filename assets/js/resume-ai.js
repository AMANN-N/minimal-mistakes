// Resume AI - Interactive Resume Generator with Gemini API
// Configuration - API Key loaded from environment via _includes/resume-viewer.html
const GEMINI_API_KEY = window.GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

let selectedSkills = [];
let baseResumeData = null;
let currentResumeData = null;

// Load base resume data
async function loadResumeData() {
  try {
    const response = await fetch('/assets/data/resume-base.json');
    baseResumeData = await response.json();
    currentResumeData = baseResumeData;
    // Initial render (static)
    renderResumeStatic(baseResumeData);
  } catch (error) {
    console.error('Error loading resume data:', error);
    document.getElementById('resume-content').innerHTML = '<p class="error">Error loading resume data.</p>';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadResumeData();
});

// Modal Functions
// Modal functions removed: inline resume view does not use a modal.
// openResumeModal and closeResumeModal are no longer needed.

// Skill Selection Functions
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('skill-btn')) {
    toggleSkill(e.target);
  }
});

function toggleSkill(button) {
  const skill = button.dataset.skill;

  if (button.classList.contains('selected')) {
    // Deselect
    button.classList.remove('selected');
    selectedSkills = selectedSkills.filter(s => s !== skill);
  } else {
    // Select (if under limit)
    if (selectedSkills.length < 5) {
      button.classList.add('selected');
      selectedSkills.push(skill);
    }
  }

  updateSelectedSkillsDisplay();
  updateSkillButtons();
}

function updateSelectedSkillsDisplay() {
  const countEl = document.getElementById('skill-count');
  const generateBtn = document.getElementById('generate-resume-btn');

  countEl.textContent = selectedSkills.length;
  generateBtn.disabled = selectedSkills.length === 0;
}

function updateSkillButtons() {
  const allButtons = document.querySelectorAll('.skill-btn');
  const atLimit = selectedSkills.length >= 5;

  allButtons.forEach(btn => {
    if (!btn.classList.contains('selected')) {
      btn.disabled = atLimit;
    }
  });
}

// Generate Tailored Resume
async function generateTailoredResume() {
  if (selectedSkills.length === 0) return;

  const statusBar = document.getElementById('status-bar');
  statusBar.innerHTML = 'AI is rewriting your resume...';
  statusBar.classList.add('generating');

  const generateBtn = document.getElementById('generate-resume-btn');
  generateBtn.disabled = true;
  generateBtn.textContent = 'Rewriting...';

  try {
    // Call Gemini API to generate tailored resume
    const tailoredResume = await callGeminiAPI(selectedSkills, baseResumeData);
    currentResumeData = tailoredResume;

    // Display the generated resume with typewriter effect
    await displayResumeWithTypewriter(tailoredResume);

    statusBar.innerHTML = '✨ Resume tailored for: ' + selectedSkills.join(', ');
    statusBar.classList.remove('generating');
  } catch (error) {
    console.error('Error generating resume:', error);
    statusBar.innerHTML = 'Error generating resume. Please try again.';
    statusBar.classList.remove('generating');
    alert('Error generating resume. Please check your API key and try again.');
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = 'Rewrite Resume ✨';
  }
}

// Call Gemini API
async function callGeminiAPI(skills, resumeData) {
  const prompt = `You are a professional resume writer. Given the following resume data and target skills, rewrite the resume to emphasize these skills while maintaining all factual information.

Target Skills: ${skills.join(', ')}

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Instructions:
1. Maintain ALL factual information (dates, companies, projects, education)
2. Reorder and rewrite bullet points to emphasize the target skills
3. Add skill keywords naturally in descriptions where relevant
4. Keep professional tone and format
5. Return ONLY valid JSON matching this structure:
{
  "name": "Full Name",
  "title": "Professional Title",
  "summary": "Professional summary emphasizing target skills",
  "experience": [
    {
      "company": "Company Name",
      "position": "Position",
      "duration": "Duration",
      "highlights": ["Bullet point 1", "Bullet point 2"]
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Description",
      "highlights": ["Bullet point 1"]
    }
  ],
  "skills": ["Skill 1", "Skill 2"],
  "education": [
    {
      "degree": "Degree",
      "field": "Field",
      "institution": "Institution",
      "year": "Year"
    }
  ]
}

Return ONLY the JSON, no additional text or markdown formatting.`;

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error Details:', response.status, response.statusText, errorText);
    throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const generatedText = data.candidates[0].content.parts[0].text;

  // Extract JSON from response (remove markdown code blocks if present)
  const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to parse API response');
  }

  return JSON.parse(jsonMatch[0]);
}

// Render Resume Static (Initial Load)
function renderResumeStatic(resumeData) {
  const container = document.getElementById('resume-content');
  container.innerHTML = generateResumeHTML(resumeData);
}

// Generate HTML String
function generateResumeHTML(resumeData) {
  // Handle different structures (Base vs Generated)
  const name = resumeData.name || (resumeData.personal && resumeData.personal.name) || 'Name';
  const title = resumeData.title || (resumeData.personal && resumeData.personal.title) || 'Title';

  // Flatten skills if object (Base), or use as is if array (Generated)
  let skillsList = [];
  if (Array.isArray(resumeData.skills)) {
    skillsList = resumeData.skills;
  } else if (typeof resumeData.skills === 'object') {
    // Flatten all skill categories
    Object.values(resumeData.skills).forEach(category => {
      if (Array.isArray(category)) skillsList.push(...category);
    });
  }

  return `
    <h1>${name}</h1>
    <div class="resume-contact">
      <p><strong>${title}</strong></p>
      <p>${baseResumeData.personal.email} | ${baseResumeData.personal.location}</p>
      <p>
        <a href="${baseResumeData.personal.github}" target="_blank">GitHub</a> | 
        <a href="${baseResumeData.personal.linkedin}" target="_blank">LinkedIn</a>
      </p>
    </div>
    
    <h2>Professional Summary</h2>
    <p id="summary-text">${highlightSkills(resumeData.summary, selectedSkills)}</p>
    
    <h2>Experience</h2>
    <div id="experience-section">
      ${resumeData.experience.map(exp => `
        <div class="experience-item">
          <h3>${exp.position} - ${exp.company}</h3>
          <p><em>${exp.duration}</em></p>
          <ul>
            ${exp.highlights.map(h => `<li>${highlightSkills(h, selectedSkills)}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    
    <h2>Projects</h2>
    <div id="projects-section">
      ${resumeData.projects.slice(0, 5).map(proj => `
        <div class="project-item">
          <h3>${proj.name}</h3>
          <p>${highlightSkills(proj.description, selectedSkills)}</p>
          <ul>
            ${proj.highlights.map(h => `<li>${highlightSkills(h, selectedSkills)}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    
    <h2>Skills</h2>
    <div id="skills-section">
      <p>${skillsList.map(s =>
    selectedSkills.includes(s) ? `<span class="skill-highlight">${s}</span>` : s
  ).join(' • ')}</p>
    </div>
    
    <h2>Education</h2>
    <div id="education-section">
      ${resumeData.education.map(edu => `
        <div class="education-item">
          <h3>${edu.degree} in ${edu.field}</h3>
          <p>${edu.institution} - ${edu.year}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// Display Resume with Typewriter Effect
// Display Resume with Typewriter Effect
async function displayResumeWithTypewriter(resumeData) {
  const container = document.getElementById('resume-content');

  // 1. Fade out existing content
  container.classList.add('fade-out');
  await sleep(500); // Wait for fade out

  // 2. Clear and reset
  container.innerHTML = '';
  container.classList.remove('fade-out');

  // 3. Render Header (Static/Fade-in)
  const headerHTML = `
    <h1>${resumeData.name}</h1>
    <div class="resume-contact">
      <p><strong>${resumeData.title}</strong></p>
      <p>${baseResumeData.personal.email} | ${baseResumeData.personal.location}</p>
      <p>
        <a href="${baseResumeData.personal.github}" target="_blank">GitHub</a> | 
        <a href="${baseResumeData.personal.linkedin}" target="_blank">LinkedIn</a>
      </p>
    </div>
  `;
  const headerDiv = document.createElement('div');
  headerDiv.innerHTML = headerHTML;
  headerDiv.style.opacity = '0';
  headerDiv.style.transition = 'opacity 0.5s';
  container.appendChild(headerDiv);

  // Trigger reflow for fade-in
  headerDiv.offsetHeight;
  headerDiv.style.opacity = '1';
  await sleep(300);

  // 4. Summary Section
  const summaryHeader = document.createElement('h2');
  summaryHeader.textContent = 'Professional Summary';
  container.appendChild(summaryHeader);

  const summaryP = document.createElement('p');
  summaryP.id = 'summary-text';
  container.appendChild(summaryP);

  await typeText(summaryP, highlightSkills(resumeData.summary, selectedSkills), 5); // Fast typing

  // 5. Experience Section
  const expHeader = document.createElement('h2');
  expHeader.textContent = 'Experience';
  container.appendChild(expHeader);

  const expSection = document.createElement('div');
  expSection.id = 'experience-section';
  container.appendChild(expSection);

  for (const exp of resumeData.experience) {
    const expItem = document.createElement('div');
    expItem.className = 'experience-item';
    expSection.appendChild(expItem);

    // Type Position/Company
    const h3 = document.createElement('h3');
    expItem.appendChild(h3);
    await typeText(h3, `${exp.position} - ${exp.company}`, 10);

    // Duration
    const p = document.createElement('p');
    p.innerHTML = `<em>${exp.duration}</em>`;
    expItem.appendChild(p);

    // Bullets
    const ul = document.createElement('ul');
    expItem.appendChild(ul);

    for (const highlight of exp.highlights) {
      const li = document.createElement('li');
      ul.appendChild(li);
      await typeText(li, highlightSkills(highlight, selectedSkills), 2);
    }

    await sleep(200);
  }

  // 6. Projects Section
  const projHeader = document.createElement('h2');
  projHeader.textContent = 'Projects';
  container.appendChild(projHeader);

  const projSection = document.createElement('div');
  projSection.id = 'projects-section';
  container.appendChild(projSection);

  for (const proj of resumeData.projects.slice(0, 5)) {
    const projItem = document.createElement('div');
    projItem.className = 'project-item';
    projSection.appendChild(projItem);

    const h3 = document.createElement('h3');
    projItem.appendChild(h3);
    await typeText(h3, proj.name, 10);

    const p = document.createElement('p');
    projItem.appendChild(p);
    await typeText(p, highlightSkills(proj.description, selectedSkills), 2);

    const ul = document.createElement('ul');
    projItem.appendChild(ul);

    for (const highlight of proj.highlights) {
      const li = document.createElement('li');
      ul.appendChild(li);
      await typeText(li, highlightSkills(highlight, selectedSkills), 2);
    }
    await sleep(200);
  }

  // 7. Skills & Education (Fade in for speed)
  const skillsHeader = document.createElement('h2');
  skillsHeader.textContent = 'Skills';
  container.appendChild(skillsHeader);

  const skillsDiv = document.createElement('div');
  skillsDiv.id = 'skills-section';

  // Flatten skills if needed
  let skillsList = [];
  if (Array.isArray(resumeData.skills)) {
    skillsList = resumeData.skills;
  } else if (typeof resumeData.skills === 'object') {
    Object.values(resumeData.skills).forEach(category => {
      if (Array.isArray(category)) skillsList.push(...category);
    });
  }

  skillsDiv.innerHTML = `<p>${skillsList.map(s =>
    selectedSkills.includes(s) ? `<span class="skill-highlight">${s}</span>` : s
  ).join(' • ')}</p>`;
  container.appendChild(skillsDiv);

  const eduHeader = document.createElement('h2');
  eduHeader.textContent = 'Education';
  container.appendChild(eduHeader);

  const eduSection = document.createElement('div');
  eduSection.id = 'education-section';
  resumeData.education.forEach(edu => {
    eduSection.innerHTML += `
      <div class="education-item">
        <h3>${edu.degree} in ${edu.field}</h3>
        <p>${edu.institution} - ${edu.year}</p>
      </div>
    `;
  });
  container.appendChild(eduSection);

  // Fade in bottom sections
  skillsDiv.style.opacity = '0';
  eduSection.style.opacity = '0';
  skillsDiv.style.transition = 'opacity 0.5s';
  eduSection.style.transition = 'opacity 0.5s';

  skillsDiv.offsetHeight; // Reflow
  skillsDiv.style.opacity = '1';
  eduSection.style.opacity = '1';
}

// Typewriter effect helper
async function typeText(element, text, speed = 5) {
  element.classList.add('typewriter-cursor');

  // If text contains HTML tags (like highlight spans), we can't easily type char-by-char
  // without breaking tags. Simple workaround: 
  // 1. If it has tags, type the text content then replace with HTML?
  // 2. Or just fade it in if it has tags to avoid complexity.
  // 3. Or split by tags.

  // For robustness with highlights:
  if (text.includes('<')) {
    // Has HTML (highlights), just fade in smoothly to avoid breaking markup
    element.innerHTML = text;
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s';
    element.offsetHeight;
    element.style.opacity = '1';
    await sleep(300);
  } else {
    // Plain text, type it out
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      // Randomize speed slightly for realism
      await sleep(speed + Math.random() * 5);
    }
  }

  element.classList.remove('typewriter-cursor');
}

// Highlight selected skills in text
function highlightSkills(text, skills) {
  if (!text) return '';
  let highlighted = text;
  skills.forEach(skill => {
    // Escape special chars in skill name if needed
    const regex = new RegExp(`\\b${skill}\\b`, 'gi');
    highlighted = highlighted.replace(regex, `<span class="skill-highlight">$&</span>`);
  });
  return highlighted;
}

// Utility sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Download Resume as PDF
function downloadResumePDF() {
  const resumeContent = document.getElementById('resume-content');

  // Use browser's print functionality
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Resume - ${baseResumeData.personal.name}</title>
        <style>
          body {
            font-family: Georgia, serif;
            line-height: 1.6;
            color: #000;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 { font-size: 2rem; border-bottom: 3px solid #333; padding-bottom: 10px; }
          h2 { font-size: 1.5rem; border-bottom: 2px solid #ccc; padding-bottom: 5px; margin-top: 30px; }
          h3 { font-size: 1.2rem; margin-top: 20px; }
          .skill-highlight { background: #ffeb3b; padding: 0 4px; border-radius: 3px; font-weight: 600; }
          ul { margin-left: 20px; }
          li { margin-bottom: 8px; }
        </style>
      </head>
      <body>
        ${resumeContent.innerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();

  setTimeout(() => {
    printWindow.print();
  }, 500);
}

// Close modal when clicking outside
// Modal click handler removed; inline resume view does not use a modal overlay.
