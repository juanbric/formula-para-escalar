# La Fórmula para Escalar — Landing Page

Sitio estático listo para GitHub Pages.

## Archivos

- `index.html` — toda la landing
- `styles.css` — diseño responsive
- `script.js` — checkout, UTMs/fbclid y evento de CTA
- `assets/` — aquí irán los mockups e imágenes cuando los creemos

## 1. Antes de publicar

### Hotmart
Busca estas dos apariciones:

`YOUR_HOTMART_CHECKOUT_URL`

y reemplázalas por tu URL real de checkout de Hotmart.

Aparece en:
- `index.html`
- `script.js`

### Meta Pixel
Busca:

`YOUR_META_PIXEL_ID`

y reemplázalo por tu Pixel ID real.

Aparece en:
- `index.html`
- `script.js`

La landing dispara:
- `PageView`
- `ViewContent`
- evento custom `FormulaCheckoutClick` al pulsar CTA

No dispara `Purchase`. Lo ideal es que Purchase ocurra desde la integración de Hotmart.

## 2. Imágenes

Por ahora todos los mockups están deliberadamente vacíos.

Cuando tengamos las imágenes finales, puedes sustituir cada bloque:

```html
<div class="mockup ...">
  <span>...</span>
</div>
```

por algo como:

```html
<img class="real-image" src="assets/nombre-del-mockup.webp" alt="La Fórmula para Escalar">
```

No hace falta tocar la estructura de la página.

## 3. Importante sobre testimonios

La sección de testimonios suministrada en el borrador contiene textos hipotéticos.

Por eso el sitio la mantiene **oculta por defecto** mediante:

```css
.hidden-until-real {
  display: none;
}
```

Cuando tengas testimonios reales y verificables:
1. reemplaza las citas, nombres y marcas;
2. cambia el titular si corresponde;
3. elimina `hidden-until-real` de la etiqueta `<section>` del bloque de testimonios.

No publiques el claim “Miles de dueños...” hasta que sea verificable.

## 4. Subir a GitHub Pages

### Opción fácil: desde la web de GitHub

1. En GitHub, crea un repositorio nuevo. Por ejemplo:
   `formula-para-escalar`
2. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
3. Abre:
   `Settings → Pages`
4. En `Build and deployment`, usa:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda.
6. GitHub publicará una URL parecida a:
   `https://TU-USUARIO.github.io/formula-para-escalar/`

### Opción Terminal

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/formula-para-escalar.git
git push -u origin main
```

Después activa Pages desde `Settings → Pages`.

## 5. Dominio propio

Recomendación: usa un dominio propio para tráfico de Meta.

En GitHub:
1. `Settings → Pages`
2. `Custom domain`
3. escribe tu dominio
4. guarda

Luego configura los registros DNS con tu proveedor de dominio según la configuración de GitHub Pages.

Cuando GitHub lo permita, activa `Enforce HTTPS`.

## 6. Cómo editar el sitio después

Cada vez que quieras cambiar copy o imágenes:

```bash
git add .
git commit -m "Update landing page"
git push
```

GitHub Pages volverá a publicar automáticamente.

## 7. Próximos pasos

Orden recomendado:
1. crear mockup principal;
2. crear prueba visual de +$100M;
3. crear mockup de masterclass;
4. crear mockup calculadora/dashboard;
5. crear mockup final;
6. conectar Hotmart;
7. conectar Pixel;
8. validar eventos antes de mandar tráfico.

