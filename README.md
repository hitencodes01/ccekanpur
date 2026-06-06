# Centre for Computer Education — Website

> **"Be Alive with Learn"**  
> ISO 9001:2015 Certified Institute | Bharat Sarkar ke Sookshm, Laghu aur Madhyam Udyam Mantralaya ke antargat

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React + TypeScript |
| Routing | React Router DOM |
| Styling | Plain CSS-in-JS (with Tailwind dependency on custom components) |
| Animations | Pure CSS keyframes — zero JS per-frame, no WebGL |
| Build & Deploy | Vite → Vercel (free tier) |

---

## Project Structure

```
/
├── public/
│   ├── logo.jpeg          # Institute logo (white bg)
│   └── cce1.jpeg          # Institute building photo
│
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx      # Hero carousel (2 slides)
│   │   ├── ReviewSection.tsx    # Google reviews + redirect CTA
│   │   └── SoftAurora.tsx       # WebGL aurora background (optional)
│   │
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Courses.tsx
│       └── Contact.tsx
```

---

## Components

### `HeroSection.tsx`

Auto-playing 2-slide carousel for the homepage hero.

```tsx
<HeroSection mounted={mounted} />
```

**Props**

| Prop | Type | Description |
|---|---|---|
| `mounted` | `boolean` | Pass `true` after component mounts to trigger entrance animations |

**Slides**

| # | Image | Fit | Content |
|---|---|---|---|
| 1 | `/logo.jpeg` | `contain` (no crop, full logo visible) | Centre for Computer Education |
| 2 | `/cce4.webp` | `cover` (fills frame) | Learn, Grow & Succeed |

**Features**
- Auto-advances every **4 seconds**
- Bottom progress bar shows time remaining
- Click dots to jump to any slide
- Per-slide `object-fit` — logo shows fully, photo fills frame
- Entrance animations staggered via CSS `animation-delay`
- Fully responsive: two-column desktop → stacked mobile

**Performance** — zero `requestAnimationFrame`, zero DOM reads in render loop, `passive` event listeners.

---

### `ReviewSection.tsx`

About page section showing student reviews with a Google redirect CTA.

```tsx
<ReviewSection />
```

No props needed. To update:

**Change the Google review link**
```ts
// Line 3 in ReviewSection.tsx
const GOOGLE_REVIEW_URL = "https://share.google/mDZcLZB7y0aSoIRWj";
```

**Add / edit reviews**
```ts
const REVIEWS = [
  {
    name: "Student Name",
    rating: 5,           // 1–5
    text: "Review text here.",
    time: "2 months ago"
  },
  // ...
];
```

**Features**
- 4.9 ★ rating summary bar with Google logo badge
- 6 review cards in auto-fit responsive grid
- Color-coded avatar initials (no image needed)
- "Rate Us on Google" CTA button → opens review link in new tab
- Hover effects: card border glow, button sweep animation
- Color: `#38bbeb` accent throughout

---

### `SoftAurora.tsx`

Optional WebGL aurora animation using OGL. **Not used in production** (replaced by CSS animations for Vercel free tier performance).

```tsx
<SoftAurora
  speed={0.6}
  scale={1.5}
  brightness={1.0}
  color1="#f7f7f7"
  color2="#e100ff"
  enableMouseInteraction={true}
/>
```

> ⚠️ Uses WebGL + `requestAnimationFrame`. Only add if you need it — it has non-trivial CPU/GPU cost. The optimized version fixes forced reflow by using `ResizeObserver` instead of `window.resize` and never reading DOM layout properties inside the render loop.

**Full props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `speed` | `number` | `0.6` | Animation speed |
| `scale` | `number` | `1.5` | Noise scale |
| `brightness` | `number` | `1.0` | Output brightness |
| `color1` | `string` | `#f7f7f7` | Layer 1 color (hex) |
| `color2` | `string` | `#e100ff` | Layer 2 color (hex) |
| `noiseFrequency` | `number` | `2.5` | Perlin noise frequency |
| `noiseAmplitude` | `number` | `1.0` | Perlin noise amplitude |
| `bandHeight` | `number` | `0.5` | Vertical band position |
| `bandSpread` | `number` | `1.0` | Band spread/falloff |
| `octaveDecay` | `number` | `0.1` | FBM octave decay |
| `layerOffset` | `number` | `0` | Time offset between layers |
| `colorSpeed` | `number` | `1.0` | Color cycle speed |
| `enableMouseInteraction` | `boolean` | `true` | Mouse parallax effect |
| `mouseInfluence` | `number` | `0.25` | Mouse displacement strength |

---

## Colors

```
Primary accent:   #38bbeb   (cyan-blue — buttons, stars, highlights)
Background:       #000000   (pure black)
Text:             #ffffff
Text muted:       rgba(255,255,255,0.5)
```

---

## Public Assets

Make sure these files exist in `/public` before deploying:

```
public/logo.jpeg    ← Institute logo
public/cce4.webp    ← Building/community photo
```

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy to Vercel

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy
vercel --prod
```

No environment variables required. Static build, zero backend.

---

## Performance Notes

- No forced reflow — `ResizeObserver` used instead of `window.resize` + `offsetWidth`
- All hero/review animations are pure CSS keyframes (GPU composited)
- Images use `loading="eager"` on hero, `decoding="async"` everywhere
- `passive: true` on all scroll/mouse event listeners
- Bundle has no heavy animation library — OGL removed from main bundle

---

*Centre for Computer Education — Kanpur*