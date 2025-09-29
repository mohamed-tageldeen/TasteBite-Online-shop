## TasteBite- F&B Online-shop


A responsive Food & Beverages shop website built with semantic HTML5 and modern CSS3. It includes a reusable navigation bar and footer, a grid-based product listing, and a styled contact form. The layout is mobile-first and adapts across screen sizes.

### Features
- Semantic HTML5 structure: `header`, `nav`, `main`, `section`, `footer`
- Sticky navigation with mobile menu toggle
- Responsive grid and flex layouts (CSS Grid/Flexbox)
- Product listing with images, names, prices, and buttons
- Styled contact form with HTML5 validation
- Mobile-friendly typography, spacing, and touch targets

### Tech Stack
- HTML5
- CSS3 (custom properties, media queries, Grid/Flexbox)
- Google Fonts (Inter, Playfair Display)
- Vanilla JS (mobile nav + footer year)

### Getting Started
You can open the site directly from the filesystem, or use a local static server.

#### Option 1: Open in Browser
- Double-click `index.html` to open in your browser.

#### Option 2: Serve Locally (recommended)
Using Node.js (any simple static server):

```bash
# from the project root
npx serve .
# or
npx http-server . -p 3000
```

Then visit `http://localhost:3000`.

### Project Structure
```
/fnb-shop (this repo)
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   └── style.css
├── index.html
├── products.html
├── about.html
├── contact.html
└── README.md
```

### Pages
- `index.html`: Homepage with hero, featured items, and sticky navigation
- `products.html`: Grid-based product listing (images, name, price, button)
- `about.html`: Brand story with visual hero caption
- `contact.html`: Contact form (Name, Email, Topic, Message) with HTML5 validation

### Styling Notes
- Core variables live in `:root` within `css/style.css`
- Layout utilities: `.container`, `.narrow`, `.section`, `.product-grid`, `.product-card`
- Components: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.contact-form`
- Hero caption overlay: `.hero-caption` with a subtle `fadeUp` animation
- Mobile nav uses `.site-nav.open` toggled by `#navToggle`

### Images & Assets
- Place images in `assets/images/`
- Filenames in the HTML match current assets (e.g., `avocado bowl.jpg`, `iced latte.jpg`). If you rename files, update the `<img src="...">` paths and any inline `background-image` styles.

### Accessibility
- Skip link to main content (`.skip-link`)
- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Form labels and HTML5 validation
- Focus styles and adequate color contrast

### Customization
- Update brand name in header/footer `.logo`
- Tweak colors/typography in `css/style.css` variables
- Change hero captions in `index.html` and `about.html`

### Deployment
Any static host works (GitHub Pages, Netlify, Vercel, etc.). For GitHub Pages:
1. Push to GitHub
2. In repo Settings → Pages, select `main` and root (`/`)
3. Open the provided Pages URL

### License
MIT — use and adapt freely.
