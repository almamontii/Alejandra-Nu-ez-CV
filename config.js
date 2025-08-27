// CONFIGURACIÓN DE TU CV - EDITA ESTE ARCHIVO PARA PERSONALIZAR TU CV

const CV_CONFIG = {
    // ========================================
    // INFORMACIÓN PERSONAL
    // ========================================
    personal: {
        name: "Alejandra Veronica Nuñez",
        title: "Técnico en Trabajo Social",
        subtitle: "Especialista en Intervención Social",
        summary: "Trabajadora social comprometida con el bienestar de las personas y comunidades. Especializada en intervención social, acompañamiento familiar y desarrollo comunitario. Con experiencia en programas sociales y políticas públicas orientadas a la inclusión y el desarrollo humano.",
        email: "veronicanunez466@gmail.com",
        phone: "1531122277",
        birthdate: "Fecha Nacimiento: 30/10/1983",
        address: "Dirección: Vicente López, Olivos",
        dni: "DNI: 30440908",
        maritalStatus: "Estado Civil: Soltera",
        location: "Madrid, España",
        photo: "PHOTO-Ale.jpg"
    },

    // ========================================
    // EXPERIENCIA PROFESIONAL
    // ========================================
    experience: [
        {
            title: "Supervisora",
            company: "La Juvenil - Casa Gastronómica de Pastas",
            period: "Abril 2021 - Actualidad",
            achievements: [
                "Pago a proveedores",
                "Manejo de caja",
                "Control de stock",
                "Manejo de inventarios",
                "Manejo de ficha de personal",
                "Capacitación de personal a cargo",
                "Selección de personal",
                "Resolución de conflictos",
                "Socia Responsable Victoria: 1569800376"
            ]
        },
        {
            title: "Especialistas en Gastronomía de Eventos",
            company: "Compass Group - Predio Movistar Arena",
            period: "Noviembre 2019 - Febrero 2020",
            achievements: [
                "Atención al público en concesiones del estadio",
                "Camarera en sector VIP",
                "Cajera",
                "Control de stock y manejo de inventario",
                "Teléfonos: 40066600"
            ]
        }
    ],

    // ========================================
    // EDUCACIÓN
    // ========================================
    education: [
        {
            degree: "Secundario",
            institution: "Escuela Polivalente de Arte, Martínez",
            period: "1996 - 2000",
            title: "Bachiller en Ciencias de la Comunicación y Medios"
        },
        {
            degree: "Estudios Universitarios",
            institution: "",
            period: "",
            title: ""
        },
        {
            degree: "Técnico Superior en Trabajo Social",
            institution: "Instituto Superior de Ciencias Humanas y Sociales",
            period: "2016 - 2019",
            title: "Carrera Terciaria - Dirección: Bartolomé Mitre 3590, CABA"
        },
        {
            degree: "Licenciatura en Curso de Trabajador Social",
            institution: "UCU (Universidad de Concepción del Uruguay)",
            period: "En proceso",
            title: "Modalidad: Virtual - Se adeudan 6 materias y la tesis"
        },
        {
            degree: "Cursos",
            institution: "",
            period: "",
            title: ""
        },
        {
            degree: "Recursos Humanos",
            institution: "Manejo de personal, Selección de personal y legajos",
            period: "2018",
            title: "Dictado por la Municipalidad de Vicente López"
        },
        {
            degree: "Ceremonial y Protocolo",
            institution: "",
            period: "2017",
            title: "Dictado por la Municipalidad de Vicente López"
        }
    ],

    // ========================================
    // HABILIDADES TÉCNICAS
    // ========================================
    skills: {
        "Técnicas": [],
        "Personales": []
    },

    // ========================================
    // IDIOMAS
    // ========================================
    languages: [],

    // ========================================
    // CERTIFICACIONES
    // ========================================
    certifications: [
        {
            name: "Certificación en Intervención con Familias",
            issuer: "Colegio Oficial de Trabajo Social",
            date: "2023",
            credentialId: "CITS-2023-001"
        },
        {
            name: "Formación en Violencia de Género",
            issuer: "Instituto de la Mujer",
            date: "2022",
            credentialId: "VG-2022-045"
        },
        {
            name: "Certificación en Mediación Social",
            issuer: "Centro de Mediación de Madrid",
            date: "2021"
        }
    ],

    // ========================================
    // PROYECTOS DESTACADOS
    // ========================================
    projects: [
        {
            name: "Programa de Inclusión Social",
            description: "Desarrollo e implementación de un programa integral de inclusión social para personas en situación de vulnerabilidad, incluyendo acompañamiento psicosocial y orientación laboral.",
            technologies: ["Intervención Social", "Desarrollo Comunitario", "Coordinación Interinstitucional"],
            github: "#",
            demo: "#"
        },
        {
            name: "Talleres de Empoderamiento",
            description: "Coordinación de talleres de habilidades sociales y empoderamiento para mujeres víctimas de violencia de género, con seguimiento individualizado.",
            technologies: ["Trabajo con Grupos", "Violencia de Género", "Empoderamiento"],
            github: "#",
            demo: "#"
        },
        {
            name: "Sistema de Derivación Social",
            description: "Diseño e implementación de un sistema de derivación y seguimiento de casos sociales en colaboración con entidades públicas y privadas.",
            technologies: ["Gestión de Casos", "Coordinación", "Seguimiento"],
            github: "#",
            demo: "#"
        }
    ],

    // ========================================
    // PREMIOS Y RECONOCIMIENTOS
    // ========================================
    awards: [
        {
            name: "Reconocimiento a la Excelencia en Intervención Social",
            issuer: "Colegio Oficial de Trabajo Social de Madrid",
            date: "2023",
            description: "Premio por el desarrollo de programas innovadores de inclusión social"
        },
        {
            name: "Mención Honorífica en Trabajo Social",
            issuer: "Universidad Complutense de Madrid",
            date: "2020",
            description: "Reconocimiento por el proyecto de fin de grado sobre intervención comunitaria"
        }
    ],

    // ========================================
    // VOLUNTARIADO Y ACTIVIDADES EXTRACURRICULARES
    // ========================================
    volunteer: [
        {
            role: "Voluntaria en Emergencias Sociales",
            organization: "Cruz Roja Española",
            period: "2021 - Presente",
            description: "Atención social a personas en situación de emergencia y crisis humanitarias"
        },
        {
            role: "Mentora en Programas de Inclusión",
            organization: "Fundación Integración Social",
            period: "2020 - 2022",
            description: "Acompañamiento y orientación a jóvenes en riesgo de exclusión social"
        }
    ],

    // ========================================
    // CONFIGURACIÓN DE LA PLANTILLA
    // ========================================
    template: {
        // Colores principales (puedes cambiar estos valores)
        primaryColor: "#4F46E5",
        secondaryColor: "#7C3AED",

        // Mostrar/ocultar secciones
        showAwards: true,
        showVolunteer: true,
        showGithub: true,
        showWebsite: true,

        // Configuración de impresión
        printMargins: "1cm",
        printBackground: true,

        // Animaciones
        enableAnimations: true,
        enableHoverEffects: true
    }
};

// Exportar la configuración para que esté disponible en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CV_CONFIG;
}
