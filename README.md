# SaaSlander – Next.js 14 + Tailwind 3.5 SaaS Landing & Docs Starter

> A production-ready, **multilingual SaaS landing-page + documentation template** powered by the latest Next.js App Router, Tailwind CSS and TypeScript. Perfect for founders and indie-hackers who want to launch fast and look professional.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs)](https://nextjs.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Commercial License](https://img.shields.io/badge/license-Pro--Commercial-orange)](LICENSE-PRO.md)

[Live demo →]() &nbsp;&nbsp;|&nbsp;&nbsp;[Buy commercial license on Gumroad →]()

---

## ✨ Features

- **Next.js 14 App Router** – file-system routing, layouts & server components.
- **Tailwind CSS 4** with custom theme tokens, dark-mode toggle & plugins (`@tailwindcss/typography`, `forms`).
- **TypeScript**, ESLint, Prettier & Stylelint pre-configured.
- **Framer Motion** page-transition presets.
- **i18n-ready** with `next-intl` (example `en/` & `es/`).
- **MDX-powered blog & docs** (Notion-style typography).
- **Reusable UI kit** (buttons, badges, cards) + ready-made landing sections (Hero, Features, Pricing, FAQs, Testimonials, CTA).
- **One-click deploy** to Vercel.

Not included yet: automated tests, next-seo, Stripe demo, or CI workflows. They will arrive in later milestones.

---

## ⚡️ Quick Start

```
# 1 - Clone the repo
unzip saaslander.zip
cd saaslander

# 2 - Install dependencies (Node ≥ 18)
npm install # or npm / yarn

# 3 - Run the dev server
npm run dev
# → http://localhost:3000
```

---

## 📂 Project Structure

```
saaslander/
├─ public/              # Static assets & OG images
├─ messages/            # i18n dictionaries (en, es…)
└─ src/
   ├─ app/
   │  ├─ (lang)/        # Dynamic segment: /en /es …
   │  ├─ layout.tsx     # Global layout (fonts, theme)
   │  └─ page.tsx       # Landing entry
   ├─ components/       # UI primitives & sections
   ├─ constants/        # Site meta, nav links, pricing data
   ├─ lib/              # Helpers & custom hooks
   └─ styles/           # Tailwind base layer (+globals.css)
```

---

## 🔧 Configuration

| File                 | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `tailwind.config.ts` | Brand colors, typography, breakpoints                |
| `next.config.ts`     | Internationalization, remote images, runtime options |
| `.prettierrc.json`   | Consistent format.                                   |
| `messages/*/*.json`  | Text strings for each language                       |
| `eslint.config.mj`   | Base linting rule                                    |

---

## 🚀NPM  Scripts

| Command   | Description                       |
| --------- | --------------------------------- |
| `dev`     | Start development server          |
| `build`   | Build for production              |
| `start`   | Serve the production build        |
| `lint`    | Run ESLint + Prettier + Stylelint |
| `format`  | Prettier format                   |
| `prepare` | Hook Husky git commit / push      |

---

## 🎨 Customize in Minutes

1. Colors → tailwind.config.ts > theme.extend.colors

2. Fonts → update the font import in src/app/layout.tsx

3. Copy → edit strings in messages/{lang}.json

4. Sections → duplicate or modify components in src/components/

---

## 🛠️ Support

This is a private, paid template. If you run into issues or have questions, email support@saaslander.io (response within 48 h).

---

## 📜 License

This template is distributed under a Proprietary Commercial License. Each purchase grants you a non‑exclusive, non‑transferable license to use SaaSlander in one personal or commercial project. Republishing, sublicensing, or reselling any part of the source code is strictly prohibited.

See [`LICENSE-PRO.md`](./LICENSE-PRO.md) for the full terms.

---

Made with ❤️ by Nahuel Maya.
