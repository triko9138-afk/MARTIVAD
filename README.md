# MARTIVAD - English Grammar Learning App

A modern, interactive web application for learning English grammar with Georgian language explanations. Built with Next.js, React, and Tailwind CSS.

## Features

- 📚 **English Grammar Tenses** - Comprehensive lessons covering all major English tenses
- 🎨 **Modern UI** - Beautiful, responsive design built with Tailwind CSS
- ⚡ **Fast Performance** - Optimized Next.js app with static export
- 🌐 **Multilingual** - Georgian language explanations for easy understanding
- 📱 **Mobile First** - Fully responsive design for all devices
- ✨ **Smooth Animations** - Beautiful transitions with Motion library

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/triko9138-afk/MARTIVAD.git
cd MARTIVAD
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory which can be deployed to any static hosting service.

## Project Structure

```
MARTIVAD/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── favicon.ico
├── components/
│   └── TensesList.tsx    # Grammar tenses component
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Deploy Steps:

1. Push your code to the `main` branch
2. GitHub Actions automatically:
   - Builds the project
   - Exports static files
   - Deploys to GitHub Pages

3. Access your site at: `https://triko9138-afk.github.io/MARTIVAD`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# Upload the 'out' directory to your hosting service
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features in Development

- [ ] Grammar exercises and quizzes
- [ ] Vocabulary lessons
- [ ] User progress tracking
- [ ] Pronunciation guides
- [ ] Dark mode support
- [ ] Offline support with PWA

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Created by [triko9138-afk](https://github.com/triko9138-afk)

## Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/triko9138-afk/MARTIVAD/issues) page.

---

**Happy Learning! 📚✨**