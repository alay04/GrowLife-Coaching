# GrowLife Coaching

A professional life coaching website built to help individuals at different life stages — from young people navigating early adulthood to those in mid-life and retirement seeking clarity and purpose. The platform offers personalized coaching sessions, personality and strength assessments, and a seamless booking experience.

Live Demo: https://growlife-coaching.vercel.app

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Overview

### Motivation
Life coaching helps people unlock their potential, but many struggle to find the right coach or understand what coaching can offer. This project was built to create an accessible, professional online presence for a certified life coach, making it easy for clients to learn about services, book sessions, and begin their personal growth journey.

### Objective
GrowLife Coaching solves the problem of connecting individuals with professional life coaching services. It provides a clear, trustworthy platform where potential clients can:
- Learn about coaching services tailored to their life stage
- Book free suitability sessions and paid coaching plans
- Complete personality and strength assessments
- Read testimonials and frequently asked questions
- Contact the coach directly via integrated WhatsApp

### Learning Outcomes
- Built responsive, modern UI with Next.js and Tailwind CSS
- Implemented smooth animations using GSAP
- Created a modular component architecture
- Designed intuitive navigation with dropdown menus
- Integrated WhatsApp for direct client communication
- Deployed a static Next.js application

---

## Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — GSAP-powered scroll and hover animations
- **Service Pages** — Dedicated pages for 3-session and 6-session coaching plans
- **Assessments** — Personality and strength assessment tools
- **Booking Integration** — Free suitability session booking page
- **WhatsApp Integration** — Floating WhatsApp button for instant contact
- **Testimonials Section** — Client success stories and reviews
- **FAQ Page** — Answers to common coaching questions
- **Legal Pages** — Privacy policy, terms, and cookie policy
- **SEO Optimized** — Proper metadata and semantic HTML structure

---

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP (GreenSock Animation Platform)
- React Icons

### Build & Development Tools
- Bun / npm
- ESLint
- PostCSS
- TypeScript

### Deployment
- Static export via Next.js
- Vercel (recommended)

---

## Architecture

```
Client (Next.js App)
↓
Static Export
↓
CDN / Hosting (Vercel)
```

### Folder Structure

```
growlife-coaching/
├── app/                          # Next.js App Router pages
│   ├── 3-session-coaching-plan/  # Coaching plan page
│   ├── 6-session-coaching-plan/  # Coaching plan page
│   ├── about/                    # About the coach
│   ├── contact/                  # Contact form/page
│   ├── cookie-policy/            # Legal page
│   ├── faq/                      # Frequently asked questions
│   ├── free-suitability-session/ # Booking page
│   ├── personality-assessment/   # Assessment tool
│   ├── privacy/                  # Privacy policy
│   ├── strength-assessment/      # Assessment tool
│   ├── terms/                    # Terms of service
│   ├── testimonials/             # Client reviews
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with Navbar/Footer
│   └── page.tsx                  # Homepage
├── components/                   # Reusable React components
│   ├── homepage/                 # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── infoCard.tsx
│   │   ├── journey.tsx
│   │   ├── coachingPoints.tsx
│   │   └── growSupport.tsx
│   ├── navbar.tsx                # Navigation with dropdowns
│   ├── footer.tsx                # Site footer
│   ├── statistics.tsx            # Stats display
│   └── whatsappButton.tsx        # Floating WhatsApp CTA
├── data/                         # Static data files
├── public/                       # Static assets (images, favicon)
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/alay04/GrowLife-Coaching.git
cd GrowLife-Coaching
```

### Install Dependencies

Using npm:
```bash
npm install
```

Using Bun:
```bash
bun install
```

### Run Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
# or
bun run build
```

The static export will be generated in the `out/` directory.

---

## Environment Variables

No environment variables are required for this static site. All configuration is handled within the codebase.

---

## Usage

1. **Homepage** — Overview of coaching services and life stages served
2. **About** — Learn about the coach's background and approach
3. **Services** — Explore coaching for young people, 30s, mid-life, and retirement
4. **Sessions** — Book free suitability sessions or purchase 3/6 session plans
5. **Assessments** — Complete personality and strength assessments
6. **Testimonials** — Read client success stories
7. **FAQ** — Get answers to common questions
8. **Contact** — Reach out via contact form or WhatsApp

---

## Screenshots

```
public/
 ├── hero.png
 ├── services.png
 ├── testimonials.png
 └── contact.png
```

Add screenshots to the `public/` folder and reference them in the README:

```markdown
![Hero Section](public/hero.png)
![Services Section](public/services.png)
```

---

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `out`
4. Deploy!

### Manual Deployment

Upload the contents of the `out/` directory to any static hosting provider (Netlify, GitHub Pages, AWS S3, etc.)

---

## Future Improvements

- Add online booking calendar integration (Calendly/Google Calendar)
- Implement blog section for coaching tips and articles
- Add newsletter signup functionality
- Create client portal for session notes and progress tracking
- Integrate payment processing for session purchases
- Add multi-language support
- Implement dark mode toggle
- Add more interactive assessment tools
- Include video testimonials
- Add live chat support

---

## Credits

**Developer:** Alay Mistry  
**GitHub:** https://github.com/alay04  
**Coach:** Certified Life Coach with academic foundation in personal development and human behavior

---

## License

This project is licensed under the MIT License.
