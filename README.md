# 🚀 Aadrila Technologies - Modern AI Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A pixel-perfect, high-performance corporate website built for **Aadrila Technologies**, featuring advanced animations, interactive 3D elements, and a responsive modern design.

---

## 🏗️ Tech Stack & Libraries

We carefully selected these libraries to ensure performance, scalability, and a premium user experience:

| Library | Purpose |
| :--- | :--- |
| **React 18** | Core UI library for building a component-based architecture. |
| **Vite** | Next-generation frontend tooling for lightning-fast development and building. |
| **Tailwind CSS** | Utility-first CSS framework for rapid, responsive, and maintainable styling. |
| **Framer Motion** | Powerful motion library used for complex animations (Hero transitions, Scroll reveals, 3D tilts). |
| **Lucide React** | Lightweight, consistent, and beautiful icon set used throughout the application. |
| **clsx & tailwind-merge** | Utilities to conditionally construct and merge Tailwind class strings without conflicts. |

---

## 📂 Project Structure

A clean and scalable file structure designed for maintainability:

```bash
aadrila-website/
├──  public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images and media files (Logos, Document assets)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Responsive navigation
│   │   ├── Hero.jsx     # Main hero section with 3D carousel
│   │   ├── About.jsx    # Team carousel & Mission/Vision
│   │   ├── Products.jsx # Interactive product cards
│   │   └── ...
│   ├── constants/       # Centralized data source (Single Source of Truth)
│   │   └── data.js      # Contains all text, links, and configuration data
│   ├── pages/           # Page layouts
│   │   └── Home.jsx     # Main landing page composition
│   ├── App.jsx          # Root application component
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind customization and theme setup
```

---

## ✨ Key Features

*   **3D Hero Carousel**: A custom-built, spring-physics-based document carousel using `framer-motion`.
*   **Interactive Product Cards**: 3D Tilt effects that respond to mouse movement for a premium feel.
*   **Animated Team Section**: An auto-rotating carousel with staggered animations and active state highlighting.
*   **Smooth Scrolling**: Optimized scroll behavior for seamless navigation between sections.
*   **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop screens.
*   **Centralized Data**: All content is managed in `data.js` for easy updates without touching code.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Suraj231194/aadrila-website.git
    cd aadrila-website
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 🎨 Design Philosophy

*   **Glassmorphism & Gradients**: Used modern design trends to create depth and visual interest.
*   **Motion**: Animations are purposeful, not distracting, guiding the user's eye through the story.
*   **Typography**: Clean sans-serif typography (`Inter`) ensures readability and a professional tone.

---

Developed with ❤️ by **Suraj Pawar**
