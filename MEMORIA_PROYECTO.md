# Memoria del Proyecto: Sea Software Factory

## Información General del Proyecto

**Nombre**: Sea Software Factory
**Tipo**: Sitio web corporativo/landing page
**Framework**: React + TypeScript + Vite
**Estilos**: TailwindCSS
**Iconos**: Lucide React
**Base de datos**: Supabase (configurada pero no implementada)

## Estructura del Proyecto

### Archivos de Configuración
- `package.json` - Dependencias y scripts del proyecto
- `vite.config.ts` - Configuración de Vite
- `tailwind.config.js` - Configuración de TailwindCSS
- `postcss.config.js` - Configuración de PostCSS
- `tsconfig.json` - Configuración de TypeScript
- `eslint.config.js` - Configuración de ESLint

### Estructura de Carpetas
```
src/
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
├── vite-env.d.ts         # Tipos de Vite
└── components/
    ├── Header.tsx         # Encabezado/navegación
    ├── Hero.tsx           # Sección principal
    ├── About.tsx          # Acerca de nosotros
    ├── Services.tsx       # Servicios
    ├── Process.tsx        # Proceso de trabajo
    ├── Testimonial.tsx    # Testimonios
    ├── Contact.tsx        # Contacto
    └── Footer.tsx         # Pie de página
```

## Segmentos/Componentes del Sitio (8 Total)

### 1. Header (`Header.tsx`)
- **Funcionalidad**: Navegación fixed con logo y menú
- **Características**:
  - Logo con ícono Code2 y gradiente cyan-blue
  - Navegación desktop y móvil responsive
  - Scroll suave a secciones
  - Estado de menú móvil controlado desde App.tsx
- **Secciones de navegación**: Inicio, Nosotros, Servicios, Proceso, Contáctanos

### 2. Hero (`Hero.tsx`)
- **Funcionalidad**: Sección principal/banner de presentación
- **Características**:
  - Título principal con gradiente de texto
  - Estadísticas destacadas (40% reducción costos, 100% integración, 24/7 soporte)
  - Botones CTA (Consulta gratuita, Ver casos de éxito)
  - Imagen con overlay y barra de progreso animada
  - Fondo con gradiente slate-blue-cyan

### 3. About (`About.tsx`)
- **Funcionalidad**: Información sobre la empresa
- **Características**:
  - Descripción de la empresa
  - Grid de valores (Excelencia, Colaboración, Innovación, Seguridad)
  - Imagen del equipo
  - Sección de casos de éxito con estadísticas
  - Fondo blanco

### 4. Services (`Services.tsx`)
- **Funcionalidad**: Catálogo de servicios ofrecidos
- **Características**:
  - 6 servicios en grid responsive:
    1. Desarrollo Web (React, Vue, Angular, PWA)
    2. Desarrollo Móvil (React Native, Flutter, Apps nativas)
    3. Sistemas Personalizados (ERP/CRM, APIs, Microservicios)
    4. Soluciones Cloud (AWS/Azure/GCP, DevOps, Docker)
    5. UI/UX Design (Prototipado, Design System)
    6. Consultoría Tecnológica (Auditoría, Arquitectura)
  - Cards con hover effects y gradientes coloridos
  - Fondo gris claro

### 5. Process (`Process.tsx`)
- **Funcionalidad**: Metodología de trabajo en 5 pasos
- **Características**:
  - Timeline vertical con layout alternante
  - 5 etapas del proceso:
    1. Análisis (Reuniones, requisitos, estimación)
    2. Diseño & Arquitectura (Wireframes, prototipos, stack)
    3. Desarrollo (Sprints ágiles, testing, deployment)
    4. Capacitación & Adopción (Training, documentación)
    5. Soporte & Evolución (24/7, actualizaciones, monitoreo)
  - CTA final para consulta gratuita
  - Fondo blanco

### 6. Testimonial (`Testimonial.tsx`)
- **Funcionalidad**: Testimonios de clientes
- **Características**:
  - 3 testimonios con rating de 5 estrellas
  - Fotos de clientes (María González CEO TechCorp, Carlos Rodríguez CTO InnovateLab, Ana Martínez Directora IT GlobalSolutions)
  - Estadísticas finales (50+ proyectos, 98% satisfacción, 5.0 rating)
  - Fondo gris claro

### 7. Contact (`Contact.tsx`)
- **Funcionalidad**: Formulario de contacto e información
- **Características**:
  - Formulario con validación (nombre, email, empresa, mensaje)
  - Estado de envío con feedback visual
  - Información de contacto (email, teléfono, ubicación, horarios)
  - Beneficios destacados (consulta gratuita, respuesta 24h)
  - Fondo con gradiente slate-blue-cyan

### 8. Footer (`Footer.tsx`)
- **Funcionalidad**: Pie de página con información corporativa
- **Características**:
  - Logo y descripción de la empresa
  - Enlaces a servicios
  - Información de contacto
  - Links legales (Política de Privacidad, Términos)
  - Copyright 2024
  - Fondo gris oscuro

## Tecnologías y Dependencias

### Dependencias de Producción
- **React 18.3.1** - Framework frontend
- **React DOM 18.3.1** - Renderizado DOM
- **Lucide React 0.344.0** - Biblioteca de iconos
- **@supabase/supabase-js 2.57.4** - Cliente de Supabase (no implementado)

### Dependencias de Desarrollo
- **Vite 5.4.2** - Build tool y dev server
- **TypeScript 5.5.3** - Tipado estático
- **TailwindCSS 3.4.1** - Framework CSS utility-first
- **ESLint 9.9.1** - Linter de código
- **PostCSS 8.4.35** - Procesador CSS
- **Autoprefixer 10.4.18** - Prefijos CSS automáticos

## Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run lint` - Ejecutar linter
- `npm run preview` - Preview del build
- `npm run typecheck` - Verificación de tipos

## Características del Diseño

### Nueva Paleta de Colores de Marca (2024)

#### **Colores Primarios de Marca**
- **brand-dark-green**: Verde oscuro principal (#1B2B1A)
- **brand-mustard**: Amarillo mostaza (#E2B447)
- **brand-soft-orange**: Naranja suave (#F4A259)
- **white**: Blanco para contraste (#FFFFFF)

#### **Gradientes y Botones Principales Actualizados**
- **Logo/Brand**: `from-brand-mustard to-brand-soft-orange`
- **CTAs principales**: `bg-white text-brand-dark-green border-2 border-brand-dark-green` con hover `bg-brand-dark-green text-white`
- **Fondos Hero/Contact**: `from-white via-brand-mustard/5 to-brand-soft-orange/5`
- **Fondos About**: `from-brand-mustard/10 to-brand-soft-orange/10`
- **Timeline Process**: `from-brand-dark-green to-brand-mustard`
- **Elementos base**: `bg-brand-dark-green/95` (con transparencia como Header)

#### **Escala de Grises**
- **slate-50**: Fondos muy claros (#f8fafc)
- **gray-50**: Fondos sección (#f9fafb)
- **gray-200**: Elementos deshabilitados (#e5e7eb)
- **gray-300**: Bordes formularios (#d1d5db)
- **gray-400**: Texto secundario (#9ca3af)
- **gray-500**: Texto terciario (#6b7280)
- **gray-600**: Texto principal (#4b5563)
- **gray-700**: Texto enfatizado (#374151)
- **gray-800**: Bordes footer (#1f2937)
- **gray-900**: Títulos principales (#111827)

#### **Colores Específicos Actualizados por Servicios**
- **Desarrollo Web**: `from-brand-dark-green to-brand-mustard`
- **Desarrollo Móvil**: `from-brand-mustard to-brand-soft-orange`
- **Sistemas Personalizados**: `from-brand-dark-green to-brand-soft-orange`
- **Soluciones Cloud**: `from-brand-soft-orange to-brand-mustard`
- **UI/UX Design**: `from-brand-mustard to-brand-dark-green`
- **Consultoría**: `from-brand-dark-green to-brand-dark-green` (sólido)

#### **Estados Interactivos Actualizados**
- **Focus forms**: `focus:ring-brand-mustard focus:border-transparent`
- **Hover links**: `hover:text-brand-mustard` (general)
- **Hover buttons CTA**: `hover:bg-brand-dark-green hover:text-white` (estilo botón blanco con borde)
- **Disabled**: `opacity-50`
- **Transparencias**: `/95` para elementos base, `/20` para fondos suaves, `/5` para fondos muy sutiles
- **Texto secundario**: `text-gray-400` para elementos descriptivos y listas

#### **Patrones de Uso Actualizados por Componente (Nueva Paleta 2024)**

**Header**:
- Fondo: `bg-brand-dark-green/95` (verde oscuro semi-transparente)
- Logo: gradiente `from-brand-mustard to-brand-soft-orange`
- Texto logo: `text-white`
- Links: `text-white` con hover `text-brand-mustard`
- CTA Contáctanos: `bg-white text-brand-dark-green border-2 border-brand-dark-green` con hover `bg-brand-dark-green text-white`

**Hero**:
- Fondo: gradiente `from-white via-brand-mustard/10 to-brand-soft-orange/10`
- Palabra "digital": `text-gray-900` (mismo color que el título)
- Estadísticas: `text-brand-dark-green`
- CTA principal: `bg-white text-brand-dark-green border-2 border-brand-dark-green` con hover `bg-brand-dark-green text-white`
- Botón secundario: `border-brand-dark-green` con hover `hover:text-brand-mustard`

**About**:
- Fondo: `bg-white`
- Iconos valores (round): `bg-brand-mustard/20` + `text-brand-dark-green` (diseño unificado)
- Estadísticas: `text-brand-dark-green` (unificado)
- Texto descriptivo CTA: `text-gray-400`

**Services**:
- Fondo: `bg-brand-mustard/5` (amarillo mostaza muy sutil)
- Iconos: `text-black` sin fondo (h-12 w-12)
- Cards: gradientes únicos de marca por servicio
- Puntos: `bg-brand-dark-green`
- Links: `text-brand-dark-green` con hover `text-brand-mustard`

**Process**:
- Fondo: `bg-white`
- Timeline: gradiente `from-brand-dark-green to-brand-mustard`
- Iconos: `bg-brand-dark-green/95` redondos con `text-white` (sin numeración)
- Texto descriptivo: `text-gray-400`
- CTA final: `bg-brand-dark-green/95` con botón `bg-white text-brand-dark-green border-2 border-brand-dark-green`

**Testimonials**:
- Fondo: `bg-brand-soft-orange/5` (naranja suave muy sutil)
- Quote icons: `text-brand-dark-green`
- Estrellas: `text-yellow-400` (mantiene original)
- Estadísticas: `text-brand-dark-green` / `text-brand-mustard` / `text-brand-soft-orange`

**Contact**:
- Fondo: gradiente `from-white via-brand-mustard/5 to-brand-soft-orange/5`
- Formulario focus: `focus:ring-brand-mustard`
- Iconos info (round): `bg-brand-mustard/20` + `text-brand-dark-green` (diseño unificado)
- Botón enviar: `bg-white text-brand-dark-green border-2 border-brand-dark-green` con hover `bg-brand-dark-green text-white`
- Listas beneficios: `text-gray-400`

**Footer**:
- Fondo: `bg-brand-dark-green/95`
- Logo: gradiente `from-brand-mustard to-brand-soft-orange`
- Estadística "40%": `text-white`
- Texto descriptivo: `text-gray-400`
- Iconos contacto: `text-white`
- Links: `text-gray-400` con hover `text-brand-mustard`
- CTA final: `bg-brand-dark-green/95`

**Footer**:
- Fondo: `bg-brand-dark-green/95` (consistente con Header)
- Logo: gradiente `from-brand-mustard to-brand-soft-orange`
- Estadística: `text-brand-mustard`
- Links servicios: hover `text-brand-mustard`
- Iconos contacto: `text-brand-mustard`
- Borde: `border-brand-mustard/20`
- Links legales: hover `text-brand-mustard`

### Patrones de UI Consistentes
- **Gradientes**: Uso consistente de cyan-blue en CTAs
- **Spacing**: py-20 para secciones principales
- **Container**: max-w-7xl mx-auto para contenido
- **Shadows**: shadow-lg, hover:shadow-xl para cards
- **Transitions**: duration-200/300 para hover effects
- **Typography**: text-4xl para títulos, text-xl para subtítulos

### Responsive Design
- **Grid**: md:grid-cols-2, lg:grid-cols-3 patterns
- **Mobile**: Menú hamburguesa en Header
- **Breakpoints**: sm, md, lg siguiendo TailwindCSS

## Estado de Implementación

### ✅ Completado
- Estructura completa de 8 componentes
- Diseño responsive
- Navegación funcional con scroll suave
- Formulario de contacto con validación básica
- Hover effects y animaciones CSS
- Tipado TypeScript completo

### 🔄 Pendiente/Parcial
- **Backend**: Supabase configurado pero sin implementar
- **Formulario**: Solo console.log, sin envío real
- **Imágenes**: URLs de Pexels (placeholder)
- **Datos**: Contenido estático, sin CMS

### 📝 Notas Técnicas
- **Performance**: Vite para build rápido
- **SEO**: Meta tags básicos en index.html
- **Accesibilidad**: Labels en formularios, alt en imágenes
- **Mantenibilidad**: Componentes modulares, TypeScript

## Transformación de Paleta de Colores (Septiembre 2024)

### **Cambio de Marca Realizado**
- **Fecha**: Septiembre 2024
- **Paleta anterior**: Cyan-Blue (#0891b2, #1d4ed8)
- **Nueva paleta**: Verde oscuro (#1B2B1A), Amarillo mostaza (#E2B447), Naranja suave (#F4A259)

### **Configuración TailwindCSS Actualizada**
```javascript
colors: {
  'brand': {
    'dark-green': '#1B2B1A',
    'mustard': '#E2B447',
    'soft-orange': '#F4A259',
  }
}
```

### **Componentes Transformados**
✅ **Header** - Verde oscuro base con acentos amarillo mostaza
✅ **Hero** - Gradientes suaves + CTA nueva paleta
✅ **About** - Iconos diferenciados por valor empresarial
✅ **Services** - Iconos negros + gradientes únicos por servicio
✅ **Process** - Iconos redondos verde oscuro + timeline
✅ **Testimonials** - Fondo naranja suave + estadísticas variadas
✅ **Contact** - Focus amarillo mostaza + iconos diferenciados
✅ **Footer** - Base verde oscuro + acentos amarillo mostaza

### **Patrón de Transparencias Implementado**
- `/95` - Elementos base (Header, Footer, Process CTAs)
- `/20` - Fondos de iconos con color visible
- `/10` - Fondos de secciones con gradientes suaves
- `/5` - Fondos de sección muy sutiles

### **Identidad Visual Lograda**
- **Profesional**: Verde oscuro como base sólida
- **Cálida**: Amarillo mostaza y naranja para proximidad
- **Diferenciada**: Cada sección con combinación única
- **Coherente**: Patrones consistentes en toda la aplicación

## Posibles Mejoras Futuras
1. **Backend real**: Implementar Supabase o API propia
2. **CMS**: Sistema de gestión de contenido
3. **Blog**: Sección de artículos técnicos
4. **Portfolio**: Galería de proyectos realizados
5. **Multiidioma**: i18n para inglés/español
6. **Analytics**: Google Analytics o similar
7. **SEO**: Optimización avanzada
8. **Testing**: Unit tests con Jest/Vitest
9. **Brand assets**: Crear logo SVG con nueva paleta
10. **Design system**: Documentar componentes reutilizables