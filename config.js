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
                "Gestión de proveedores y caja",
                "Control de stock e inventarios", 
                "Capacitación y selección de personal",
                "Resolución de conflictos"
            ]
        },
        {
            title: "Especialista en Gastronomía",
            company: "Compass Group - Movistar Arena",
            period: "Nov 2019 - Feb 2020",
            achievements: [
                "Atención VIP y público general",
                "Control de inventario y caja"
            ]
        },
        {
            title: "Operadora de Seguridad",
            company: "Municipalidad de Vicente López",
            period: "Nov 2013 - Ene 2019",
            achievements: [
                "Atención de emergencias",
                "Supervisión de sistemas de seguridad",
                "Coordinación operativa"
            ]
        }
    ],

    // ========================================
    // EDUCACIÓN
    // ========================================
    education: [
        {
            degree: "Licenciatura en Trabajo Social",
            institution: "UCU - Universidad de Concepción del Uruguay",
            period: "En proceso",
            title: "Modalidad Virtual"
        },
        {
            degree: "Técnico Superior en Trabajo Social",
            institution: "Instituto Superior de Ciencias Humanas y Sociales",
            period: "2016 - 2019",
            title: "CABA"
        },
        {
            degree: "Bachiller en Comunicación",
            institution: "Escuela Polivalente de Arte, Martínez",
            period: "1996 - 2000",
            title: "Especialización en Medios"
        },
        {
            degree: "Recursos Humanos",
            institution: "Municipalidad de Vicente López",
            period: "2018",
            title: "Certificación en manejo y selección de personal"
        }
    ],

    // ========================================
    // HABILIDADES
    // ========================================
    skills: {
        "Personales": [
            "Buenas relaciones interpersonales",
            "Escucha activa",
            "Capacidad organizativa de trabajo grupal",
            "Permanente colaboración y disposición",
            "Pro-activa"
        ]
    },

    // ========================================
    // ACTIVIDADES PERSONALES
    // ========================================
    personalActivities: [
        "Canto",
        "Principiante en realización de alimentos sin TACC",
        "Organizadora de Eventos Culturales",
        "Esteticista recibida"
    ],

    // ========================================
    // IDIOMAS
    // ========================================
    languages: [
        {
            name: "Portugués",
            level: "A1 - Básico",
            institution: "Instituto Amarelinha"
        }
    ],

    // ========================================
    // INFORMÁTICA
    // ========================================
    computerSkills: [
        "Windows",
        "Microsoft Office: Excel - Word",
        "Organización administrativa",
        "Redes sociales"
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
