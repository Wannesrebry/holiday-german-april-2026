# Germany Trip

A Next.js web application for planning and showcasing a Germany trip.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server (requires build first) |
| `npm run lint` | Run ESLint to check for code issues |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts:** EB Garamond, Playfair Display (via `@fontsource`)

## Project Structure

```
germany-trip/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── lib/                # Shared utilities
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```
