# HD Technology Solutions - Company Website

<div align="center">
  <img src="/public/hero-tech.svg" alt="HD Technology Solutions" width="200" />
  <br />
  <h3>Where Technology Meets Precision</h3>
  <p>
    <a href="#-about-the-project">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-deployment">Deployment</a>
  </p>
</div>

---

## 📋 About The Project

**HD Technology Solutions** is a modern, high-performance company website built for a technology solutions startup. The website showcases the company's services, expertise, certifications, and team in a visually stunning and interactive way.

### Company Background

HD Technology Solutions was founded by **Henok Worku** and **Damisu Sefu** — two engineers with a shared vision to make enterprise-grade technology accessible to every organization.

The company provides:
- Network design, configuration, and administration
- Custom software development
- Cloud solutions and infrastructure services
- IT consulting and digital transformation
- Supply and installation of technology equipment
- CCTV camera installation and monitoring
- Local server setup and maintenance
- Office IT infrastructure deployment
- Hardware maintenance and technical support
- Enterprise technology solutions

### Website Purpose

This website serves as the digital face of HD Technology Solutions, designed to:
- Attract enterprise clients and business partners
- Showcase the company's expertise and certifications
- Provide a premium, trust-building user experience
- Generate leads through a professional contact system
- Demonstrate technical capabilities through interactive elements

---

## ✨ Features

### Design & UX
- Premium UI/UX with modern, clean aesthetics
- Fully Responsive across all devices (desktop, tablet, mobile)
- Dark Theme with brand color #48db9c (mint green)
- Smooth Scrolling and navigation
- Accessibility best practices
- SEO-friendly structure with meta tags

### Animations & Interactions
- 3D Tilt Effects - Elements respond to mouse movement
- Parallax Scrolling - Depth and motion on scroll
- Staggered Reveals - Elements appear sequentially
- Floating Particles - Dynamic background animations
- Pulsing Glows - Attention-grabbing highlights
- Spring Animations - Physics-based smooth transitions
- Hover Effects - Interactive cards, buttons, and icons
- Animated Gradients - Moving text and background gradients
- Scroll Indicators - Guiding user navigation

### Pages & Sections
- Home: Hero, Company Overview, Statistics, Interactive Media
- About: Company Story, Why HD, Interactive Image
- Services: Full-Stack Tech Solutions (6 service cards)
- Solutions: Enterprise Solutions (6 solution cards)
- Portfolio: Project Showcase (4 project cards)
- Certifications: AWS, Oracle, Satcom Tech certifications
- Team: Founders with skills and social links
- Contact: Contact form with validation and success state

### Performance
- Next.js 14 with App Router
- Static Site Generation (SSG) for optimal performance
- Image Optimization with Next.js Image component
- Code Splitting and lazy loading
- Minimal JavaScript bundle size
- Fast Loading times

---

## 🛠 Tech Stack

### Core Technologies
- Next.js 14.2.5 - React framework with App Router
- React 18.2.0 - UI library
- TypeScript 5.x - Type-safe JavaScript
- Tailwind CSS 3.4.6 - Utility-first CSS framework

### Libraries & Tools
- Framer Motion 11.x - Animations and transitions
- Lucide React 0.428.0 - Icon library
- clsx 2.1.1 - Conditional className utility
- tailwind-merge 2.4.0 - Tailwind class merging

---

## 📁 Project Structure

```
hd-tech-website/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── globals.d.ts         # TypeScript declarations
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   └── Footer.tsx       # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with 3D effects
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services grid
│   │   ├── Solutions.tsx    # Solutions grid
│   │   ├── Portfolio.tsx    # Portfolio projects
│   │   ├── Certifications.tsx # Certifications
│   │   ├── Team.tsx         # Team members
│   │   └── Contact.tsx      # Contact form
│   └── ui/
│       └── Logo.tsx         # Reusable logo component
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── logo.png             # Company logo
│   ├── hero-tech.svg        # Hero placeholder image
│   └── about-tech.svg       # About placeholder image
├── next.config.mjs          # Next.js configuration
├── tailwind.config.mjs      # Tailwind configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher (or yarn/pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hd-tech-website.git
   cd hd-tech-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your logo:
   ```bash
   cp /path/to/your-logo.png public/logo.png
   ```

4. Update contact information in `components/sections/Contact.tsx`

5. Run development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your website.

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export as static site

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile | < 640px | Smartphones |
| Tablet | 640px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Desktops, large screens |
| Large | > 1280px | Large monitors |

---

## 🎨 Brand Guidelines

### Colors
- Brand Primary: #48db9c - Main brand color, CTAs, highlights
- Brand Light: #6ee2b0 - Lighter variant for gradients
- Brand Dark: #2ea87a - Darker variant
- Background Deep: #05080F - Main background
- Background Surface: #080D18 - Surface backgrounds
- Background Card: #0C1525 - Card backgrounds
- Text Light: #F0F4FA - Primary text
- Text Muted: #8A9BB8 - Secondary text
- Text Dim: #50637E - Tertiary text

### Typography
- Space Grotesk - Headings, display text (400-700 weight)
- Inter - Body text, UI elements (300-600 weight)

### Logo Usage
The logo component is reusable across the site:
```tsx
// Basic usage
<Logo width={40} height={40} />
// With text
<Logo width={40} height={40} showText />
```

---

## 🚢 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build the project: `npm run build && npm run export`
2. Drag the `out/` folder to Netlify's drag-and-drop deploy area

### Option 3: AWS S3 + CloudFront
1. Build the project: `npm run build && npm run export`
2. Upload `out/` folder to S3 bucket
3. Enable static website hosting
4. Configure CloudFront for CDN

---

## 🔧 Customization Guide

### Changing the Brand Color
1. Update in `app/globals.css`:
   ```css
   :root {
     --brand: #your-color;
   }
   ```
2. Update in `tailwind.config.mjs`:
   ```js
   colors: {
     brand: '#your-color',
   }
   ```

### Adding New Services
Edit `components/sections/Services.tsx` and add to the services array.

### Adding Team Members
Edit `components/sections/Team.tsx` and add to the team array.

### Adding Portfolio Projects
Edit `components/sections/Portfolio.tsx` and add to the projects array.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### Coding Standards
- Use TypeScript for all new files
- Follow Tailwind CSS utility-first approach
- Use Framer Motion for animations
- Maintain accessibility (a11y) standards
- Write clean, documented code

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

© 2025 HD Technology Solutions. All rights reserved.

---

## 👥 Authors

| Name | Role |
|------|------|
| Henok Worku | Co-Founder & Cloud Architect |
| Damisu Sefu | Co-Founder & Software Engineer |

---

## 📞 Contact

| Method | Details |
|--------|---------|
| Email | contact@hdtechsolutions.com |
| Phone | +251 953 772 137 |
| Location | Addis Ababa, Ethiopia |

---

<div align="center">
  <h4>
    <a href="https://hdtechsolutions.com">Visit Website</a> •
    <a href="mailto:contact@hdtechsolutions.com">Contact Us</a>
  </h4>
  <p>
    <strong>Built with ❤️ by HD Technology Solutions</strong>
  </p>
</div>