# Portfolio Site — Claude Context

## What this is
Static personal portfolio for Kotesh Kumar Yelamati, hosted on GitHub Pages.
Plain HTML/CSS/JS — no framework, no build step.

## Owner details
- Name: Kotesh Kumar Yelamati
- Email: yelamatikoteshkumar@gmail.com
- LinkedIn: https://linkedin.com/in/koteshyelamati
- GitHub: https://github.com/koteshyelamati
- Location: West Jordan, Utah, USA

## Design system
- Dark-first: bg `#0d1117`, surface `#161b22`, elevated `#1c2128`
- Accent: teal `#14b8a6` / light `#2dd4bf`
- Typography: Inter (body/headings), JetBrains Mono (labels/code/meta)
- No purple gradients, no glowing blobs, no 3D effects
- Subtle scroll-reveal via IntersectionObserver

## Files
- `index.html` — single-page portfolio, all sections
- `assets/css/style.css` — all styles, design tokens in :root
- `assets/js/main.js` — scroll reveal, mobile nav, active link tracking
- `assets/kotesh-headshot.jpg` — real photo (add manually)
- `assets/KoteshKYelamati-Resume.pdf` — real resume (add manually)

## Sections order
Hero → About → Core Focus → Impact Metrics → Projects → Experience → Skills → Credentials → Contact

## Key constraints
- Relative paths only (GitHub Pages compatible)
- No inline styles except where unavoidable (transition delays set by JS)
- Fonts loaded from Google Fonts CDN
