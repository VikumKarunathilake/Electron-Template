# Electron-Template

A modern Electron template built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. This template includes essential developer tools such as **ESLint**, **Zustand** for state management, **Sonner** for notifications, and a responsive theme setup with **next-themes**.

---

## Features

- **Electron** for building cross-platform desktop apps
- **Vite** for fast development and optimized builds
- **React 18** with **TypeScript**
- **Tailwind CSS** + **tailwind-animate** for responsive and animated UIs
- **Zustand** for lightweight state management
- **Sonner** for toast notifications
- **React Router DOM** for routing
- **Dark / Light theme support** with `next-themes`
- **Lucide React icons** for a consistent icon set
- ESLint & TypeScript for code quality

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Electron-Template.git
cd Electron-Template

# Install dependencies with npm
npm install

# OR install dependencies with pnpm
pnpm install
````

### Running in Development

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

This starts the Vite development server and Electron via `vite-plugin-electron`.

### Build for Production

```bash
# Using npm
npm run build

# Using pnpm
pnpm build
```

This will:

1. Compile TypeScript
2. Build the Vite app
3. Package the Electron app with `electron-builder`

### Preview Production Build

```bash
# Using npm
npm run preview

# Using pnpm
pnpm preview
```

---

## Scripts

| Command   | Description                                  | npm               | pnpm           |
| --------- | -------------------------------------------- | ----------------- | -------------- |
| `dev`     | Start Vite dev server and Electron           | `npm run dev`     | `pnpm dev`     |
| `build`   | Build TypeScript, Vite, and package Electron | `npm run build`   | `pnpm build`   |
| `preview` | Preview the built Vite app                   | `npm run preview` | `pnpm preview` |
| `lint`    | Run ESLint on all `.ts` and `.tsx` files     | `npm run lint`    | `pnpm lint`    |

---

## Dependencies

* **React** & **React DOM**
* **React Router DOM**
* **Zustand**
* **next-themes**
* **Sonner**
* **Tailwind CSS** & **tailwind-animate**
* **Lucide React**
* **clsx** for conditional class names

---

## Development Tools

- **TypeScript**
- **ESLint** + **@typescript-eslint**
- **Vite Plugin React**
- **vite-plugin-electron** for Electron integration
- **Electron Builder** for packaging
