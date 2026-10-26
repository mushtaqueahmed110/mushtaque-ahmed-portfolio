# Mushtaque Ahmed — Developer Portfolio Website

Welcome to the personal developer portfolio project for **Mushtaque Ahmed** (Mushtaque Ahmed Saleem Tanwari), Full-Stack Web Developer & Software Engineer.

This repository contains:
1. A **clean, modern, vanilla HTML/CSS/JavaScript static website** ready to open directly in any browser and deploy to free static hosting (GitHub Pages, Netlify, Vercel).
2. A responsive dark theme aesthetic built with deep obsidian tones (`#070B12`), subtle structural borders, and electric green accents (`#22C55E`).
3. Complete sections showcasing technical skills across frontend and backend, specialized freelance services, production projects, engineering delivery pillars, and direct contact channels.

---

## Table of Contents
- [Project Overview](#project-overview)
- [File Structure](#file-structure)
- [How to Run Locally](#how-to-run-locally)
- [How to Customize Your Information](#how-to-customize-your-information)
  - [1. Editing Name & Bio](#1-editing-name--bio)
  - [2. Updating Email, Phone & Social Links](#2-updating-email-phone--social-links)
  - [3. Adding Real Projects & Screenshots](#3-adding-real-projects--screenshots)
  - [4. Editing Skills Inventory](#4-editing-skills-inventory)
  - [5. Adding Your Fiverr Link](#5-adding-your-fiverr-link)
  - [6. Customizing Colors & Fonts](#6-customizing-colors--fonts)
- [How to Connect a Form Service](#how-to-connect-a-form-service)
- [How to Deploy for Free](#how-to-deploy-for-free)
  - [Method A: GitHub Pages](#method-a-github-pages)
  - [Method B: Netlify](#method-b-netlify)
  - [Method C: Vercel](#method-c-vercel)
- [Placeholders to Update Before Publication](#placeholders-to-update-before-publication)
- [License](#license)

---

## Project Overview

- **Owner**: Mushtaque Ahmed Saleem Tanwari
- **Role**: Full-Stack Web Developer & Software Engineer
- **Phone**: +92 328 9677360
- **Email**: `mushtaqueahmed.edu@gmail.com`
- **Location**: Pakistan
- **GitHub**: [mushtaqueahmed110](https://github.com/mushtaqueahmed110)
- **LinkedIn**: [mushtaque-ahmed-6197253b5](https://www.linkedin.com/in/mushtaque-ahmed-6197253b5)

---

## File Structure

```
mushtaque-ahmed-portfolio/
│
├── index.html        # Main semantic markup and page structure
├── styles.css        # Clean CSS styles, responsive layouts, variables
├── script.js         # Navigation, mobile menu, dynamic year & form logic
├── robots.txt        # Search engine crawler instructions
├── sitemap.xml       # Search engine URL map (update domain upon deploy)
├── README.md         # Full customization and deployment guide
└── .gitignore        # Git ignore rules
```

---

## How to Run Locally

Because this project is built with standard HTML5, CSS3, and JavaScript, **no installation, Node.js, or build command is required**!

1. Unzip the downloaded folder: `mushtaque-ahmed-portfolio.zip`
2. Double click `index.html` to open it in your web browser (Chrome, Edge, Firefox, Safari).
3. Alternatively, if you use **VS Code**, install the **Live Server** extension, right click `index.html`, and choose **"Open with Live Server"**.

---

## How to Customize Your Information

### 1. Editing Name & Bio
- Open `index.html` in VS Code or any text editor.
- Look inside the `<section id="home">` and `<section id="about">`.
- Update your headline, introduction paragraph, and personal bio text.

### 2. Updating Email, Phone & Social Links
- In `index.html`, search for `tel:+923289677360` to update your phone number.
- Search for `mushtaqueahmed.edu@gmail.com` to update your email address.
- Update your GitHub and LinkedIn profile links in both the `<section id="contact">` and `<footer class="footer">`.

### 3. Adding Real Projects & Screenshots
In `index.html`, find the `<section id="projects">` section.
Each project is contained in an `<article class="project-card">`.
To add a completed project:
1. Update the title in `<h3 class="project-title">`.
2. Update the description in `<p class="project-desc">`.
3. Update the technologies list.
4. Replace `#` with your real live demo URL and GitHub repository link.
5. Change the status tag to `status-completed` with text "Live Production".

### 4. Editing Skills Inventory
In `index.html`, navigate to `<section id="skills">`.
Each skill is represented by:
```html
<div class="skill-item">
  <span>Your Skill Name</span>
  <span class="skill-tag tag-core">Core Stack</span>
</div>
```
Simply add or remove lines to reflect your competencies.

### 5. Adding Your Fiverr Link
Once you have created your Fiverr gig/profile:
1. Open `index.html` and find the `.social-links` div inside `<section id="contact">`.
2. Add the following link:
```html
<a href="https://www.fiverr.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="social-link">Fiverr</a>
```

### 6. Customizing Colors & Fonts
Open `styles.css`. At the very top, you will see CSS variables:
```css
:root {
  --bg-primary: #070B12;       /* Main background */
  --bg-secondary: #0B111F;     /* Secondary background */
  --accent-color: #22C55E;     /* Electric green accent */
  --text-primary: #F8FAFC;     /* Heading / white text */
  --text-muted: #94A3B8;       /* Subtle paragraph text */
}
```
Change `--accent-color` to any color you like (e.g., `#38BDF8` for sky blue, `#84CC16` for lime green).

---

## How to Connect a Form Service

By default, the contact form opens the visitor's email client via a `mailto:` link with their message pre-filled.
To receive messages directly to your inbox without opening an email client:
1. Sign up for a free account at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Get your form endpoint URL (e.g. `https://formspree.io/f/xyz123`).
3. Update `<form id="contactForm">` in `index.html`:
```html
<form action="https://formspree.io/f/xyz123" method="POST" class="contact-form">
```

---

## How to Deploy for Free

### Method A: GitHub Pages (Recommended)
1. Create a free account on [GitHub](https://github.com).
2. Create a new public repository named `portfolio` or `mushtaqueahmed110.github.io`.
3. Upload all files from this folder directly to the repository root.
4. Go to **Settings** &rarr; **Pages**.
5. Under **Build and deployment** &rarr; **Branch**, select `main` (or `master`) and `/root`, then click **Save**.
6. Your portfolio will be live at `https://yourusername.github.io/portfolio` in ~1-2 minutes!

### Method B: Netlify
1. Go to [Netlify.com](https://www.netlify.com) and log in.
2. Go to the "Sites" tab and drag-and-drop the entire `mushtaque-ahmed-portfolio` folder into the browser window.
3. Your website is instantly deployed with a free SSL certificate!

### Method C: Vercel
1. Go to [Vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New Project** &rarr; select your GitHub repository.
3. Click **Deploy**.

---

## Placeholders to Update Before Publication
- [ ] Confirm your email address (`mushtaqueahmed.edu@gmail.com`)
- [ ] Add your live Fiverr profile link when created
- [ ] Update `sitemap.xml` with your actual live domain URL
- [ ] Update project demo links as you complete new work
