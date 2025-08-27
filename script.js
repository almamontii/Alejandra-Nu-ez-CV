// CV Data Configuration - Usar datos del archivo config.js
const cvData = CV_CONFIG || {
    personal: {
        name: "Tu Nombre",
        title: "Técnico en Trabajo Social",
        subtitle: "Subtítulo o especialización",
        description: "Profesional apasionado con experiencia en [tu campo]. Especializado en [especialidades] con un historial comprobado de [logros clave]. Buscando oportunidades para [objetivo profesional].",
        email: "veronicanunez466@gmail.com",
        phone: "+54 9 11 5311-2277",
        birthdate: "Fecha Nacimiento: 30/10/1983",
        address: "Dirección: Vicente López, Olivos",
        dni: "DNI: 30440908",
        maritalStatus: "Estado Civil: Soltera",
        photo: "PHOTO-Ale.jpg"
    },
    experience: [
        {
            title: "Puesto de Trabajo",
            company: "Empresa",
            period: "2022 - Presente"
        }
    ],
    education: [
        {
            degree: "Título Académico",
            institution: "Universidad/Institución",
            period: "2022 - 2025"
        }
    ],
    skills: {
        technical: ["Gestión de casos sociales", "Acompañamiento familiar", "Intervención comunitaria", "Mediación social", "Trabajo con grupos"],
        soft: ["Empatía", "Comunicación efectiva", "Trabajo en equipo", "Resolución de conflictos", "Capacidad de escucha"]
    },
    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" }
    ]
};

// Initialize CV
document.addEventListener('DOMContentLoaded', function () {
    populateCV();
    addEventListeners();
});

// Populate CV with data
function populateCV() {
    // Personal Information
    document.getElementById('full-name').textContent = cvData.personal.name;
    document.getElementById('job-title').textContent = cvData.personal.title;
    document.getElementById('subtitle').textContent = cvData.personal.subtitle;
    document.getElementById('email').textContent = cvData.personal.email;
    document.getElementById('phone').textContent = cvData.personal.phone;
    document.getElementById('birthdate').textContent = cvData.personal.birthdate;
    document.getElementById('address').textContent = cvData.personal.address;
    document.getElementById('dni').textContent = cvData.personal.dni;
    document.getElementById('marital-status').textContent = cvData.personal.maritalStatus;
    document.getElementById('profile-photo').src = cvData.personal.photo;

    // Experience
    populateExperience();

    // Education
    populateEducation();

    // Skills
    populateSkills();

    // Languages
    populateLanguages();
}

// Populate Experience Section
function populateExperience() {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    
    cvData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.innerHTML = `
            <div class="experience-header">
                <span class="job-title">${exp.title}</span>
                <span class="period">${exp.period}</span>
            </div>
            <span class="company">${exp.company}</span>
            ${exp.achievements && exp.achievements.length > 0 ? `
                <ul class="achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            ` : ''}
        `;
        experienceList.appendChild(item);
    });
}

// Populate Education Section
function populateEducation() {
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = '';

    cvData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <div class="education-header">
                <span class="degree">${edu.degree}</span>
                <span class="period">${edu.period}</span>
            </div>
            <span class="institution">${edu.institution}</span>
            ${edu.title ? `<span class="title">Título: ${edu.title}</span>` : ''}
        `;
        educationList.appendChild(item);
    });
}

// Populate Skills Section
function populateSkills() {
    const technicalSkills = document.getElementById('technical-skills');
    const softSkills = document.getElementById('soft-skills');

    technicalSkills.innerHTML = '';
    softSkills.innerHTML = '';

    // Technical Skills
    if (cvData.skills.technical) {
        cvData.skills.technical.forEach(skill => {
            const skillItem = document.createElement('span');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            technicalSkills.appendChild(skillItem);
        });
    }

    // Soft Skills
    if (cvData.skills.soft) {
        cvData.skills.soft.forEach(skill => {
            const skillItem = document.createElement('span');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            softSkills.appendChild(skillItem);
        });
    }
}

// Populate Languages Section
function populateLanguages() {
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = '';

    cvData.languages.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        item.innerHTML = `
            <span class="language-name">${lang.name}</span>
            <span class="language-level">${lang.level}</span>
        `;
        languagesList.appendChild(item);
    });
}

// Add Event Listeners
function addEventListeners() {
    // Add click to copy functionality for contact info (except email which opens mail client)
    document.querySelectorAll('.contact-item span').forEach(span => {
        span.addEventListener('click', function () {
            copyToClipboard(this.textContent);
            showNotification('Copiado al portapapeles');
        });
        span.style.cursor = 'pointer';
    });

    // Add hover effects to skill items
    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('skill-item')) {
            e.target.style.color = '#000';
        }
    });

    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('skill-item')) {
            e.target.style.color = '#333';
        }
    });
}

// Utility Functions
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        color: white;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        font-weight: 500;
        z-index: 10000;
        font-size: 0.9rem;
        animation: slideIn 0.3s ease-out;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Download CV as PDF using browser's print to PDF functionality
function downloadAsPDF() {
    // Add a class to optimize for PDF generation
    document.body.classList.add('pdf-mode');

    // Hide the print buttons temporarily
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.style.display = 'none';
    }

    // Use the browser's print dialog with PDF as default
    setTimeout(() => {
        window.print();

        // Restore after print dialog
        setTimeout(() => {
            document.body.classList.remove('pdf-mode');
            if (printButton) {
                printButton.style.display = 'flex';
            }
        }, 1000);
    }, 100);
}

// Standard print function
function printCV() {
    window.print();
}

// Enhanced PDF export with html2pdf (if available)
function exportToPDF() {
    if (typeof window.html2pdf !== 'undefined') {
        const element = document.querySelector('.container');
        const opt = {
            margin: 0.5,
            filename: 'CV-Alejandra-Veronica-Nunez.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                backgroundColor: '#ffffff'
            },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'portrait',
                compress: true
            }
        };

        // Hide print buttons
        const printButton = document.querySelector('.print-button');
        if (printButton) {
            printButton.style.display = 'none';
        }

        html2pdf().set(opt).from(element).save().then(() => {
            // Restore print buttons
            if (printButton) {
                printButton.style.display = 'flex';
            }
        });
    } else {
        // Fallback to browser print
        downloadAsPDF();
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }

    // Ctrl/Cmd + S for save (export)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        exportToPDF();
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
