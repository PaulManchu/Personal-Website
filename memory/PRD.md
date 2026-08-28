# PRD — Paul Manchu IT Portfolio

## Original Problem Statement
Modern, minimalist, recruiter-focused single-page portfolio for Paul Manchu (IT Support Engineer | Systems & Cloud Infrastructure). Off-white/charcoal/deep-teal palette, sticky nav, hero with portrait + resume download, About, categorized Skills, 2 Featured Projects with detail modal, Experience timeline, Education & Continuous Learning, Resume CTA, simple Contact. Resume PDF is source of truth — no invented credentials.

## Architecture
- Frontend-only React SPA (no backend needed for MVP; FastAPI backend left untouched)
- React 19 + Tailwind + framer-motion (masked hero reveal, scroll reveals, modal) + lenis (smooth momentum scrolling)
- Content centralized in `src/data/portfolio.js`
- Components in `src/components/portfolio/`
- Assets in `frontend/public/`: `Paul-Manchu-Resume.pdf`, `photo-b.jpg` (hero), `photo-a.jpg` (about)
- Design guidelines: `/app/design_guidelines.json` (Editorial / Old Money Tech, Playfair Display + Manrope + JetBrains Mono, zinc palette, teal-700 accent)

## User Personas
- Recruiters / hiring managers scanning in seconds
- Technical interviewers validating hands-on infrastructure depth

## Core Requirements (static)
- Single page, smooth-scroll sticky nav: Home, About, Skills, Projects, Experience, Education, Contact
- Hero: portrait, name, role, tagline, intro, View My Work + Download Resume
- Skills in 4 categories, no progress bars
- 2 project cards + detail modal
- Experience vertical timeline (Alakhe Conglomerate 2022–Present; Velocity 2025)
- Education: Diploma in IT, Damelin College (2017–2020) + Currently Developing list
- Resume download section + contact links

## Implemented (2026-08-24, updated 2026-08-28)
- Full single-page portfolio with all 7 sections + editorial marquee + footer
- Kinetic masked line-by-line hero reveal, parallax portrait + background "PM" monogram, grain overlay
- Lenis smooth scrolling; nav links and CTAs scroll via lenis
- Project detail modals (Esc/backdrop close)
- Resume PDF downloads directly from both CTAs (verified HTTP 200)
- Real resume-sourced content only; contact links wired (email, LinkedIn, GitHub, phone, location)
- Mobile responsive: hamburger menu, stacked cards, resized imagery
- Project 2 (Alakhe) now uses a real screenshot of alakhecgl.com, a LIVE badge, and "Visit Live Site" links on card + modal

## Verified
- curl 200: /, /Paul-Manchu-Resume.pdf, /photo-b.jpg
- Screenshot flows: hero → View My Work scroll → project modal open/close → Contact nav
- Mobile: hero render + hamburger menu open

## Backlog
- P1: Lightbox/larger gallery treatment for project screenshots if Paul provides lab screenshots
- P2: Blog/notes section for documenting lab learnings
- P2: Download analytics or simple visit counter
- P2: OG/social share meta image

## Next Tasks
- Swap project stock images for Paul's real lab screenshots if supplied
- Add downloadable cover-letter or vCard if requested
