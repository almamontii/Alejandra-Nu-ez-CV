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
                "Pago a proveedores y manejo de caja",
                "Control de stock e inventarios",
                "Manejo de ficha de personal",
                "Capacitación y selección de personal",
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
                "Control de stock y manejo de inventario",
                "Cajera",
                "Teléfonos: 40066600"
            ]
        },
        {
            title: "Municipalidad de Vicente López",
            company: "Operadora de sector de alarmas de seguridad",
            period: "Noviembre 2013 - Enero 2019",
            achievements: [
                "Atención de llamadas de emergencia",
                "Resolución de conflictos",
                "Manejo de sistema de alarmas vecinales",
                "Manejo de lector de patentes vehiculares",
                "Supervisora de macaras de seguridad de la vía pública",
                "Dirección: Maipú 2609, Olivos",
                "Teléfono: 47112800"
            ]
        },
        {
            title: "Pastas Elbita",
            company: "Especialista en gastronomía",
            period: "Abril 2009 - Abril 2013",
            achievements: [
                "Atención al público",
                "Atención telefónica",
                "Atención de proveedores",
                "Facturación y pagos",
                "Coordinación de servicio delivery",
                "Dirección: Córdoba 769, Martínez",
                "Teléfono: 47937835 - Mariana Fracaro"
            ]
        }
    ],

    // ========================================
    // EDUCACIÓN
    // ========================================
    education: [
        {
            degree: "Licenciatura en Curso de Trabajador Social",
            institution: "UCU (Universidad de Concepción del Uruguay)",
            period: "En proceso",
            title: "Modalidad: Virtual - Se adeudan 6 materias y la tesis"
        },
        {
            degree: "Técnico Superior en Trabajo Social",
            institution: "Instituto Superior de Ciencias Humanas y Sociales",
            period: "2016 - 2019",
            title: "Carrera Terciaria - Dirección: Bartolomé Mitre 3590, CABA"
        },
        {
            degree: "Secundario",
            institution: "Escuela Polivalente de Arte, Martínez",
            period: "1996 - 2000",
            title: "Bachiller en Ciencias de la Comunicación y Medios"
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
