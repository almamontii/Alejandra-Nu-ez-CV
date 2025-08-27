# CV Profesional - Plantilla Moderna

Una plantilla de CV profesional, moderna y responsive diseñada para destacar tus habilidades y experiencia de manera elegante.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Totalmente Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- **Fácil Personalización**: Configuración centralizada en JavaScript
- **Optimizado para Impresión**: Estilos específicos para impresión en PDF
- **Interactivo**: Efectos hover, animaciones y funcionalidades interactivas
- **Accesible**: HTML semántico y buenas prácticas de accesibilidad

## 📁 Estructura del Proyecto

```
cv-profesional/
├── index.html          # Estructura principal del CV
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad y datos
└── README.md           # Este archivo
```

## 🎨 Personalización

### 1. Información Personal

Edita el objeto `cvData.personal` en `script.js`:

```javascript
personal: {
    name: "Tu Nombre Completo",
    title: "Título Profesional",
    summary: "Tu resumen profesional...",
    email: "tu.email@ejemplo.com",
    phone: "+34 600 000 000",
    location: "Ciudad, País",
    linkedin: "linkedin.com/in/tu-perfil",
    photo: "ruta/a/tu/foto.jpg" // o URL de imagen
}
```

### 2. Experiencia Profesional

Añade o modifica experiencias en `cvData.experience`:

```javascript
experience: [
    {
        title: "Desarrollador Full Stack",
        company: "Empresa Tecnológica",
        period: "2022 - Presente",
        achievements: [
            "Desarrollé aplicaciones web con React y Node.js",
            "Mejoré el rendimiento en un 40%",
            "Lideré un equipo de 5 desarrolladores"
        ]
    }
]
```

### 3. Educación

Configura tu formación académica en `cvData.education`:

```javascript
education: [
    {
        degree: "Ingeniería Informática",
        institution: "Universidad de Madrid",
        period: "2018 - 2022",
        description: "Especialización en desarrollo de software"
    }
]
```

### 4. Habilidades Técnicas

Organiza tus habilidades por categorías en `cvData.skills`:

```javascript
skills: {
    "Lenguajes de Programación": ["JavaScript", "Python", "Java"],
    "Frameworks & Herramientas": ["React", "Node.js", "Git"],
    "Bases de Datos": ["MySQL", "MongoDB", "PostgreSQL"],
    "Metodologías": ["Agile", "Scrum", "Kanban"]
}
```

### 5. Idiomas

Define tus competencias lingüísticas en `cvData.languages`:

```javascript
languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado" },
    { name: "Francés", level: "Intermedio" }
]
```

### 6. Certificaciones

Añade tus certificaciones en `cvData.certifications`:

```javascript
certifications: [
    {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023"
    }
]
```

### 7. Proyectos

Destaca tus proyectos en `cvData.projects`:

```javascript
projects: [
    {
        name: "E-commerce Platform",
        description: "Plataforma completa de comercio electrónico con React y Node.js",
        github: "https://github.com/tu-usuario/proyecto",
        demo: "https://demo-proyecto.com"
    }
]
```

## 🎯 Cómo Usar

### Opción 1: Servidor Local
1. Abre una terminal en el directorio del proyecto
2. Ejecuta: `python -m http.server 8000` (Python 3) o `python -m SimpleHTTPServer 8000` (Python 2)
3. Abre tu navegador en `http://localhost:8000`

### Opción 2: Abrir Directamente
- Simplemente abre el archivo `index.html` en tu navegador

### Opción 3: Live Server (VS Code)
- Instala la extensión "Live Server" en VS Code
- Click derecho en `index.html` → "Open with Live Server"

## 🖨️ Imprimir/Exportar

### Imprimir a PDF
1. Presiona `Ctrl+P` (Windows/Linux) o `Cmd+P` (Mac)
2. Selecciona "Guardar como PDF"
3. Ajusta la configuración según necesites

### Botón de Impresión
- Usa el botón flotante "Imprimir CV" en la esquina inferior derecha

## 🎨 Personalización Avanzada

### Cambiar Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #7C3AED;
    --text-color: #1f2937;
    --background-color: #f9fafb;
}
```

### Añadir Secciones
1. Añade el HTML en `index.html`
2. Crea los estilos correspondientes en `styles.css`
3. Añade la funcionalidad en `script.js`

### Modificar Tipografía
Cambia la fuente en `styles.css`:

```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

Y actualiza el link en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Tu-Fuente:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

La plantilla incluye breakpoints para:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## ⚡ Funcionalidades Interactivas

- **Click para copiar**: Click en información de contacto para copiar
- **Hover effects**: Efectos visuales en elementos interactivos
- **Smooth scrolling**: Navegación suave entre secciones
- **Keyboard shortcuts**: 
  - `Ctrl/Cmd + P`: Imprimir
  - `Ctrl/Cmd + S`: Exportar

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Inter

## 📋 Checklist de Personalización

- [ ] Actualizar información personal
- [ ] Añadir experiencia laboral
- [ ] Configurar educación
- [ ] Definir habilidades técnicas
- [ ] Establecer idiomas
- [ ] Añadir certificaciones
- [ ] Incluir proyectos destacados
- [ ] Subir foto de perfil
- [ ] Verificar enlaces de contacto
- [ ] Probar responsive design
- [ ] Imprimir para verificar formato

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora, no dudes en contribuir al proyecto.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales y comerciales.

---

¡Esperamos que esta plantilla te ayude a crear un CV profesional que destaque tus habilidades y experiencia! 🚀
