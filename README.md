# Personal Portfolio Website

A modern, highly responsive, and accessible personal portfolio website built with **React 19**, **TypeScript**, and **Tailwind CSS v4**. Featuring a distinctive Neo-brutalist aesthetic with smooth sliding page transitions powered by **Motion**, custom typography presets, and a serverless contact form integration via **Web3Forms**.

🔗 **Live Demo:** [enghalih.com](https://enghalih.com)

---

## 🌟 Key Features

- **Neo-Brutalist & Retro UI:** Handcrafted custom borders, shadows, and interactive tactile micro-interactions (`border-button`, `border-input`).
- **Smooth Page Transitions:** Animated route/tab transitions utilizing `motion/react` with dynamic slide directions.
- **Dynamic Floating Navigation:** Floating navigation pill bar adapting effortlessly across Mobile (bottom docked) and Desktop (top positioned).
- **Working Contact Form:** Serverless email delivery powered by Web3Forms with form state management, validation, and auto-dismissing notifications.
- **Strictly Typed & Accessible:** Built with TypeScript, fully navigable via keyboard (`focus-visible` styling), and high-contrast color palette.
- **Blazing Fast Performance:** Powered by Vite bundler and Tailwind CSS v4 engine for minimal bundle size and rapid load speeds.

---

## 🛠️ Tech Stack

### Core & Framework
- **[React 19](https://react.dev/):** UI library for building dynamic interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** Static typing for clean, maintainable, and bug-free code.
- **[Vite](https://vite.dev/):** Next-generation frontend build tooling.

### Styling & Animation
- **[Tailwind CSS v4](https://tailwindcss.com/):** Modern utility-first CSS framework with native `@theme` and `@utility` rules.
- **[Motion](https://motion.dev/):** Production-ready animation library for fluid slide transitions and spring animations.
- **[Class Variance Authority (CVA)](https://cva.style/):** Composable component variants.
- **[Lucide React](https://lucide.dev/):** Clean and consistent iconography.

### Services & Deployment
- **[Web3Forms API](https://web3forms.com/):** Serverless contact form handling.
- **[Vercel](https://vercel.com/):** Global edge hosting and continuous deployment.

---

## 📁 Project Structure

```text
my-portfolio/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Images, icons, and illustrations (WebP/SVG)
│   ├── components/         # Reusable UI primitives
│   │   ├── Button.tsx      # CVA-based tactile button component
│   │   ├── Logos.tsx       # Brand vector icons (GitHub, etc.)
│   │   └── TabButton.tsx   # Custom navigation buttons
│   ├── pages/              # View pages
│   │   ├── HomePage.tsx    # Hero section & quick CTAs
│   │   ├── AboutPage.tsx   # Bio, technical skills grid & tools
│   │   ├── PortfoliosPage.tsx # Showcase projects with live & code links
│   │   └── ContactPage.tsx # Interactive form & social links
│   ├── lib/
│   │   └── utils.ts        # Class merging utility (clsx + tailwind-merge)
│   ├── Layout.tsx          # Dynamic responsive navigation bar
│   ├── App.tsx             # State-driven page navigation & animation orchestrator
│   ├── App.css             # Component-level styles
│   ├── index.css           # Design tokens, typography presets & utilities
│   └── main.tsx            # Application entry point
├── .env.example            # Environment variables blueprint
├── index.html              # HTML entry point
├── package.json            # Scripts & project dependencies
├── tsconfig.app.json       # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- **Node.js** (v18.x or newer recommended)
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/enghalih/my-portfolios.git
   cd my-portfolios
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```
   *(You can obtain a free access key at [web3forms.com](https://web3forms.com/)).*

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Author

**Wenning Ghalih**
- Website: [enghalih.com](https://enghalih.com)
- GitHub: [@enghalih](https://github.com/enghalih)
- Email: [enghalih685@gmail.com](mailto:enghalih685@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
