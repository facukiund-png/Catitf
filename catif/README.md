# 🥋 CATIF Argentina - Plataforma Web Oficial

Bienvenido al repositorio oficial del sitio web de la **Confederación Argentina de Taekwon-Do ITF (CATIF)**. Este proyecto es una Single Page Application (SPA) moderna, rápida y escalable, diseñada para brindar información institucional, noticias, eventos y documentación a la comunidad del Taekwon-Do.

---

## 🚀 Tecnologías y Stack

El proyecto ha sido construido utilizando las últimas tecnologías del ecosistema React para garantizar rendimiento y mantenibilidad:

* **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite 7](https://vitejs.dev/) (Motor de desarrollo ultrarrápido)
* **Estilos:** [Styled Components](https://styled-components.com/) (CSS-in-JS)
* **Enrutamiento:** [React Router DOM 7](https://reactrouter.com/)
* **Internacionalización:** [i18next](https://www.i18next.com/) (Soporte Español/Inglés)
* **UI/UX:**
    * [Swiper](https://swiperjs.com/) (Carrousels táctiles y sliders)
    * [React Icons](https://react-icons.github.io/react-icons/) (Iconografía vectorial)
    * [React Medium Image Zoom](https://github.com/rpearce/react-medium-image-zoom) (Visualización de imágenes tipo modal)
* **Calidad de Código:** ESLint + Prettier

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener instalado en tu entorno:

* **Node.js**: Versión 18.0.0 o superior (Recomendado: LTS v20+).
* **NPM**: Generalmente incluido con Node.js.

---

## 🛠️ Instalación

Sigue estos pasos para levantar el entorno de desarrollo localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd catif
    ```

2.  **Instalar dependencias:**
    Este proyecto utiliza `npm` para la gestión de paquetes.
    ```bash
    npm install
    ```

---

## 💻 Scripts Disponibles

En el archivo `package.json` se encuentran definidos los siguientes comandos para el ciclo de vida del desarrollo:

### 🟢 Servidor de Desarrollo
Levanta el servidor local con Hot Module Replacement (HMR). Por defecto corre en `http://localhost:5173`.
```bash
npm run dev