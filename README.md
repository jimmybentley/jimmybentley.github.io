# James Bentley - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export for GitHub Pages / Vercel

## Features

- Responsive design optimized for desktop and mobile
- Dark mode with blue accent color
- Smooth scroll navigation
- Interactive components with hover effects
- Static export for easy deployment
- SEO optimized with proper metadata

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jimmybentley/jimmybentley.github.io.git
cd jimmybentley.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment.

### Deployment

The site is configured for static export (`output: 'export'` in `next.config.mjs`), making it compatible with:

- **GitHub Pages:** Push to main branch and configure Pages to serve from root
- **Vercel:** Connect repo and deploy automatically
- **Any static host:** Upload the `out/` directory

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composing all sections
├── components/
│   ├── Navbar.tsx       # Fixed navigation with scroll
│   ├── Hero.tsx         # Landing section with CTA
│   ├── AboutSection.tsx # About me paragraph
│   ├── ExperienceSection.tsx # Work experience cards
│   ├── ProjectsSection.tsx   # Project showcase with images
│   ├── SkillsSection.tsx     # Skills organized by category
│   └── ContactSection.tsx    # Contact information and links
├── public/
│   ├── VLSI_poster.png  # VLSI project image
│   └── timelapse.png    # Overcooked RL project image
├── tailwind.config.ts   # Tailwind configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Project dependencies
```

## Customization

- **Colors:** Edit `tailwind.config.ts` to change the color scheme
- **Content:** Update the data arrays in each component file
- **Fonts:** Modify the Inter font import in `app/layout.tsx`

## License

MIT License



https://github.com/user-attachments/assets/8ee6346d-b066-4251-8fec-091dcdc8dc4e

