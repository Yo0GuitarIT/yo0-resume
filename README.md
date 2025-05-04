# YO0 Resume

A modern, multilingual personal resume built with Next.js and React.

## Overview

This project is a responsive resume website that supports multiple languages (currently English and Chinese) using react-i18next for internationalization. It features a clean user interface with language switching capabilities and is optimized for both desktop and mobile viewing.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Internationalization**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
- **Icons**: [@phosphor-icons/react](https://github.com/phosphor-icons/react)
- **Development**:
    - TypeScript
    - ESLint
    - Prettier
    - TurboPack (Next.js bundler)

## Features

- 💬 Multilingual support (English/Chinese)
- 📱 Responsive design
- 🌓 Language switching capability
- 🖨️ Print-friendly layout
- ⚡ Fast loading with optimized asset delivery

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the resume.

## Customization

You can modify the translation content in `src/app/i18n.ts` to update the resume information in different languages.

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Deployment

This Next.js application can be deployed on Vercel or any other platform that supports Next.js deployments.

## License

MIT
