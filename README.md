- Dependencies
  - Angular CLI
  - Angular Material
  - Tailwind CSS

```bash
npm install -g @angular/cli

ng new QA-Carousel
cd QA-Carousel

ng add @angular/material

npm install -D tailwindcss postcss autoprefixer 

npx tailwindcss init
```

Modify `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Add the following to `src/styles.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```