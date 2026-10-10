# test-manager-library-3413974-page
> **Prueba técnica · Ficha ADSO 3413974**  
> Sitio público estático de presentación informativa para Manager Library.

---

## 📖 Descripción y Arquitectura

Landing page informativa, visual y totalmente accesible diseñada bajo las directrices del proyecto:
- **Cero acoplamiento con la API:** Cumple estrictamente la regla de oro de la especificación; es un sitio estático puro (HTML5 + CSS3 + Vanilla JS) sin llamadas HTTP ni consumo de endpoints internos.
- **Mobile First y Responsive:** Diseño adaptado con media queries para móviles (< 768px), tablets y pantallas de escritorio.
- **Accesibilidad (A11y):** HTML semántico (`header`, `main`, `section`, `article`, `footer`), contraste verificado WCAG AA, `aria-expanded` y `aria-label` en navegación interactiva.

---

## 🚀 Cómo Visualizar la Página

### 1. Apertura directa (Doble Clic)
Puedes abrir el archivo [`index.html`](index.html) directamente con doble clic en tu explorador de archivos (`file:///...`). No requiere servidor web, Node.js ni compilador.

### 2. Con Servidor Local (Opcional)
```bash
# Con extensión Live Server en VS Code o npx serve:
npx serve .
```

### 3. Publicación en GitHub Pages
1. Ve a **Settings > Pages** en este repositorio de GitHub.
2. En **Build and deployment > Branch**, selecciona `main` y carpeta `/ (root)`.
3. Haz clic en **Save** y la página estará disponible en la URL pública de GitHub Pages.

---

## 📋 Contenido de las Secciones
1. **Hero Principal:** Título y llamado a la acción.
2. **Servicios Bibliotecarios:** Préstamo domiciliario, salas de lectura y asesoría.
3. **Reglamento y Socios:** Visibiliza las reglas del modelo de negocio (máx. 3 libros por socio, 14 días calendario, política cero mora y registro presencial).
4. **Catálogo de Muestra:** Muestra representativa de títulos fijos escritos a mano en el HTML.
5. **Horarios y Ubicación:** Información operativa de atención ciudadana.
