# Bar El Refugio - Demo Website

Una elegante página web demo para un bar sofisticado. Diseño profesional con paleta de colores cálidos y funcionalidades completas.

## 🌟 Características

### Diseño
- **Paleta de colores cálidos**: Beige, terracota, dorado, marrón chocolate
- **Tipografías elegantes**: Playfair Display (títulos) y Lato (cuerpo)
- **Diseño responsive**: Adaptable a móviles, tablets y desktop
- **Animaciones suaves**: Transiciones y efectos hover

### Páginas

#### 1. Inicio (index.html)
- Hero section con imagen de fondo
- Sección "Sobre nosotros"
- Horarios de apertura
- Ubicación con mapa de Google Maps
- Footer con información de contacto y redes sociales

#### 2. Carta (carta.html)
- Visor de PDF integrado
- Opción de descarga del menú
- Menú completo con:
  - Vinos y champagnes
  - Cócteles clásicos y de autor
  - Cervezas (nacionales, importadas, artesanales)
  - Licores y destilados
  - Tapas y aperitivos

#### 3. Reservas (reservas.html)
- Formulario profesional con validación
- Campos: nombre, email, teléfono, fecha, hora, personas, ocasión especial
- Validación en tiempo real
- Confirmación visual al enviar

### Navegación
- Menú fijo en la parte superior
- Menú hamburguesa para móviles (< 968px)
- Smooth scrolling
- Indicador de página activa

## 🚀 Cómo usar

1. Abrir `index.html` en un navegador web
2. Navegar entre las páginas usando el menú superior
3. Ver la carta en formato PDF
4. Probar el formulario de reservas

## 📁 Estructura del proyecto

```
├── index.html          # Página principal
├── carta.html          # Página de la carta
├── reservas.html       # Página de reservas
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript (navegación y validación)
└── assets/
    └── carta.pdf       # Menú en PDF
```

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3** con variables CSS y Flexbox/Grid
- **JavaScript** vanilla (sin frameworks)
- **Google Fonts** (Playfair Display & Lato)
- **ReportLab** (Python) para generar el PDF

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 968px
- **Desktop**: > 968px

## ✨ Características técnicas

- Sin dependencias externas de JavaScript
- Validación de formulario en tiempo real
- Compatible con navegadores modernos
- Optimizado para rendimiento
- Código limpio y bien documentado

## 🎨 Paleta de colores

```css
--color-primary: #D4A574    /* Golden */
--color-secondary: #8B4513  /* Saddle Brown */
--color-accent: #C17455     /* Terracota */
--color-cream: #F5F5DC      /* Beige/Cream */
--color-dark: #4A3728       /* Dark Brown */
--color-light: #FAF8F3      /* Light Cream */
```

## 📄 Licencia

Este es un proyecto demo para fines educativos.

---

© 2026 Bar El Refugio - Demo Website
