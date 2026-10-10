# Manager Library: sitio público

Landing estática (HTML5, CSS3 y JavaScript vanilla). No usa frameworks, build ni npm, y **no llama a ninguna API**.

## Abrirlo
- Doble clic en `index.html`, o
- servirlo estático: `python -m http.server 8080` y abrir http://localhost:8080

## Configurar el enlace a la aplicación
En `index.html`, un solo lugar:
```html
<meta name="app-url" content="http://localhost:5173">
```
El botón "Ir a la aplicación" toma esa URL. Es solo un enlace; la landing no depende de la API.

## Formulario de contacto
Es **demostrativo**: valida en el navegador y muestra un mensaje de éxito, pero no envía datos a ningún servidor.

## Publicar en GitHub Pages
1. Sube estos archivos a la rama `main` del repo `page`.
2. En Settings > Pages, elige "Deploy from a branch", rama `main`, carpeta `/ (root)`.
3. La página queda en `https://<usuario>.github.io/test-manager-library-3413974-page/`.

## Contenido de muestra que debes reemplazar
Correo, teléfono, dirección, horarios, categorías y libros destacados.
