# Next.js Design Conversion & Exact UI Recreation Specification

## 1. Objective

The existing Next.js project must be redesigned and implemented to match the provided reference design **as accurately as possible without unnecessary design changes**.

Two design references will be provided:

1. A single standalone HTML file.
2. A `design` folder containing the original design assets and implementation files:

   * HTML
   * JavaScript
   * CSS
   * Images
   * Media
   * Fonts
   * Favicon
   * Other required static assets

Both sources must be carefully inspected and compared before implementation.

The final result must preserve the original design's:

* Layout
* Spacing
* Typography
* Font family
* Font sizes
* Font weights
* Colors
* Borders
* Border radius
* Shadows
* Gradients
* Images
* Icons
* Animations
* Hover effects
* Scroll effects
* Transitions
* Interactive behavior
* Section ordering
* Component behavior
* Responsive behavior
* Mobile layout
* Tablet layout
* Desktop layout

The goal is to create a **production-quality, high-performance Next.js implementation that visually and behaviorally matches the supplied design**.

---

# 2. Source of Truth

The supplied design files are the primary source of truth.

Before writing or modifying code:

1. Inspect the existing Next.js project.
2. Inspect the single HTML reference completely.
3. Inspect every relevant file inside the `design` folder.
4. Identify how HTML, CSS and JavaScript work together.
5. Identify all assets and their relationships.
6. Compare the standalone HTML against the files inside `design`.
7. Resolve differences based on the actual rendered/reference design.
8. Only then start implementation.

Do not blindly copy HTML into JSX.

The implementation must understand the original structure and recreate it properly using Next.js components.

---

# 3. Existing Next.js Project

The current Next.js project structure must be preserved wherever practical.

Do NOT unnecessarily replace the entire project with a new project.

First inspect:

* `package.json`
* `next.config.*`
* `tsconfig.json`
* `src/`
* `app/` or `pages/`
* `components/`
* `public/`
* existing utilities
* existing styles
* existing configuration
* existing assets

Use the existing architecture when it is already reasonable.

Improve the structure only when necessary for:

* maintainability
* performance
* reusable components
* responsive implementation
* clean code
* avoiding duplication

---

# 4. Technology Requirements

Use modern stable Next.js architecture.

Required:

* Next.js
* TypeScript
* React
* Tailwind CSS
* Modern CSS where necessary
* Framer Motion only where animation requires it

Prefer the existing project's configured versions when they are already compatible.

Do not introduce unnecessary dependencies.

Every dependency must have a clear purpose.

---

# 5. Component Architecture

The page must NOT be implemented as one huge component.

Break the UI into meaningful reusable components.

Example:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── index.ts
│   │
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── index.ts
│   │
│   ├── About/
│   ├── Features/
│   ├── Services/
│   ├── Gallery/
│   ├── Testimonials/
│   ├── Pricing/
│   ├── CTA/
│   ├── Footer/
│   └── common/
│
├── data/
│   ├── navigation.ts
│   ├── hero.ts
│   ├── about.ts
│   ├── features.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── footer.ts
│
├── lib/
│   └── ...
│
└── types/
    └── ...
```

The exact structure can follow the existing project if it already has a good architecture.

Do not create components merely for the sake of creating components.

Components should represent meaningful UI sections or reusable UI behavior.

---

# 6. Data-Driven Sections

Static content should be separated from presentation wherever practical.

For example:

```text
data/
├── hero.ts
├── navigation.ts
├── services.ts
├── testimonials.ts
└── footer.ts
```

Example:

```ts
export const heroData = {
  title: "...",
  description: "...",
  image: "/images/hero.webp",
  primaryButton: {
    label: "...",
    href: "#contact",
  },
};
```

The component should consume the data:

```tsx
<Hero data={heroData} />
```

Do not unnecessarily hard-code repeated content directly inside JSX.

For repeated cards, navigation items, services, testimonials, logos, statistics, etc., use arrays and `.map()`.

---

# 7. Asset Requirements

The assets inside the supplied `design` folder must be reused.

Do NOT replace the original images with:

* Unsplash
* random stock images
* generated placeholders
* unrelated images
* newly downloaded images

If the design folder contains the required image, use that exact asset.

This applies to:

* hero images
* backgrounds
* logos
* icons
* thumbnails
* product images
* illustrations
* videos
* GIFs
* SVGs
* fonts
* favicon

Preserve original filenames wherever practical.

---

# 8. Asset Location

Move/copy assets into the appropriate existing Next.js static location, normally:

```text
public/
```

Example:

```text
public/
├── images/
├── media/
├── fonts/
├── icons/
└── favicon.ico
```

Use the original design assets instead of recreating them.

Do not duplicate the same asset unnecessarily.

---

# 9. Fonts

The original design's fonts must be identified from the supplied files.

If custom font files exist, use them.

Prefer Next.js font loading mechanisms when appropriate.

For local fonts, use the correct font configuration rather than loading fonts inefficiently through external URLs.

The final typography must match the reference:

* font family
* font weight
* font style
* line height
* letter spacing
* font size
* responsive font scaling

Do not substitute a random font when the original font is available.

---

# 10. Favicon

The favicon from the supplied design folder must be reused.

Configure it correctly through the existing Next.js metadata system.

Do not create a replacement favicon unless the supplied favicon is invalid or unusable.

---

# 11. HTML → JSX/TSX Conversion

Convert the reference HTML into semantic React/Next.js components.

Do NOT simply paste the entire HTML into one `page.tsx`.

Convert:

```html
<header>
<section>
<nav>
<main>
<article>
<footer>
```

into meaningful React components.

Remove unnecessary HTML wrappers when they provide no structural value.

Preserve meaningful DOM structure where it affects:

* CSS
* layout
* accessibility
* animations
* JavaScript behavior

---

# 12. CSS Conversion

The original CSS must be carefully analyzed.

Do not blindly rewrite every CSS rule into Tailwind classes if doing so makes the implementation harder to maintain or less accurate.

Use:

* Tailwind CSS for normal layout and styling
* CSS modules/global CSS for complex or highly specific styling
* CSS variables for reusable design tokens
* custom CSS when exact visual matching requires it

Do not sacrifice pixel accuracy merely to force everything into Tailwind utility classes.

---

# 13. Design Tokens

Identify repeated values from the original design.

Examples:

```text
colors
font sizes
font weights
spacing
container widths
border radius
shadows
breakpoints
```

Where appropriate, centralize these values.

For example:

```css
:root {
  --primary-color: ...;
  --secondary-color: ...;
  --container-width: ...;
  --section-spacing: ...;
}
```

This should improve consistency without changing the original design.

---

# 14. Responsive Design

Responsive behavior is a critical requirement.

The website must work correctly on:

### Mobile

Approximately:

```text
320px
375px
390px
414px
```

### Tablet

Approximately:

```text
768px
834px
1024px
```

### Desktop

Approximately:

```text
1280px
1440px
1600px
1920px
```

Do not simply shrink the desktop layout.

Recreate the original responsive behavior.

Check:

* navigation
* mobile menu
* hero layout
* image sizes
* typography
* section spacing
* cards
* grids
* buttons
* forms
* footer
* overflow
* horizontal scrolling
* hidden/shown elements

No section should:

* overflow horizontally
* break at intermediate widths
* overlap incorrectly
* create unexpected scrollbars
* become unreadable
* distort images

---

# 15. JavaScript Behavior

The JavaScript from the original design must be inspected and recreated in React.

Identify:

* menu toggles
* sliders
* carousels
* tabs
* accordions
* modal dialogs
* dropdowns
* counters
* scroll interactions
* sticky headers
* active navigation
* hover interactions
* form interactions
* lazy behavior
* animation triggers

Do not copy old imperative DOM manipulation directly if it conflicts with React.

For example, avoid patterns like:

```js
document.querySelector(...)
element.classList.add(...)
```

when React state or component logic is more appropriate.

Use:

```tsx
useState
useEffect
useRef
```

only where necessary.

---

# 16. Animations

All visible animations and effects from the original design must be recreated.

Use Framer Motion where appropriate.

Examples:

* fade-in
* slide-in
* scale
* reveal
* stagger
* hover animation
* viewport animation
* modal transitions
* menu transitions

Animations must feel the same as the reference.

Do not add random animations that are not present in the original design.

Avoid excessive animation that can negatively affect performance.

Respect reduced-motion preferences where appropriate.

---

# 17. Performance

The final website must be optimized for performance.

Requirements:

* Server Components by default
* Client Components only when interaction requires them
* Avoid unnecessary `"use client"`
* Optimize image loading
* Use `next/image` where appropriate
* Avoid loading huge images unnecessarily
* Lazy-load non-critical content
* Avoid unnecessary JavaScript
* Avoid duplicate libraries
* Avoid unnecessary re-renders
* Avoid deeply nested components
* Avoid excessive Framer Motion usage
* Keep bundle size low
* Use appropriate font loading
* Avoid blocking resources

Interactive components should be isolated instead of converting the entire page into a Client Component.

---

# 18. Image Optimization

Use Next.js image optimization wherever compatible.

Example:

```tsx
<Image
  src="/images/example.webp"
  alt="..."
  width={1200}
  height={800}
/>
```

Maintain the original:

* aspect ratio
* crop
* object positioning
* visual size

Do not distort images.

For decorative background images, use CSS backgrounds when that matches the original implementation.

---

# 19. Accessibility

The final implementation must improve accessibility without changing the visual design.

Use:

* semantic HTML
* meaningful `alt`
* proper button elements
* keyboard accessibility
* focus states
* accessible navigation
* ARIA only when actually required
* correct heading hierarchy

Do not replace buttons with clickable `<div>` elements.

---

# 20. Navigation

If the design contains navigation:

Desktop and mobile navigation must both match the reference.

Mobile menu should correctly handle:

* open state
* close state
* overlay if present
* animation
* keyboard interaction
* scroll behavior

Do not implement a generic navbar if the reference has a custom design.

---

# 21. Exact Visual Matching

The following must be matched as closely as possible:

### Layout

* width
* max-width
* alignment
* positioning
* columns
* grids
* flex behavior

### Typography

* font
* size
* weight
* line-height
* letter-spacing
* text-transform

### Colors

* background
* foreground
* accents
* borders
* gradients

### Components

* buttons
* cards
* forms
* navigation
* badges
* icons

### Effects

* shadows
* blur
* opacity
* transforms
* transitions
* hover states

### Spacing

* margin
* padding
* gap
* section spacing

Do not "improve" the design unless explicitly requested.

---

# 22. Icons

If icons exist in the supplied design:

1. Reuse the original icon assets where available.
2. Reuse the project's existing icon library if the original is clearly represented there.
3. Do not replace a visually important icon with an unrelated icon.

Icon:

* size
* stroke width
* fill
* position

must match the reference.

---

# 23. Existing Project Preservation

Do not unnecessarily remove existing:

* components
* utilities
* configurations
* packages
* routes
* styles
* functionality

First determine whether they are used.

Only remove obsolete code when it is confirmed unnecessary.

The final implementation should feel like a natural evolution of the existing project rather than an unrelated replacement.

---

# 24. Code Quality

The code should look like clean, human-written production code.

Avoid:

* huge generated components
* meaningless component names
* excessive abstraction
* duplicated JSX
* duplicated styles
* unnecessary comments
* unnecessary hooks
* unnecessary dependencies
* deeply nested conditional logic

Use clear names such as:

```text
Header
Hero
FeatureCard
ServiceCard
TestimonialCard
Footer
MobileMenu
SectionHeading
```

Keep components focused and readable.

---

# 25. TypeScript

Use TypeScript properly.

Avoid unnecessary:

```ts
any
```

Define types for reusable data.

Example:

```ts
export interface Service {
  title: string;
  description: string;
  image: string;
  href?: string;
}
```

Do not use TypeScript merely as file extension; maintain actual type safety.

---

# 26. SEO and Metadata

Preserve or recreate the reference page's:

* title
* description
* favicon
* metadata
* Open Graph information where available

Use Next.js metadata APIs appropriately.

Do not add fake SEO content.

---

# 27. Build Stability

The final project must build successfully.

Run:

```bash
npm install
npm run lint
npm run build
```

If the project uses different package-manager scripts, follow its existing configuration.

Resolve all:

* TypeScript errors
* ESLint errors
* build errors
* missing imports
* missing assets
* invalid routes
* hydration errors

Do not leave known errors unresolved.

---

# 28. Visual Verification

After implementation, compare the result against the supplied reference.

Verify section by section:

```text
Header
↓
Hero
↓
Section 1
↓
Section 2
↓
Section 3
↓
...
↓
Footer
```

Check both:

### Desktop

* 1440px
* 1920px

### Mobile

* 390px
* 375px

### Tablet

* 768px
* 1024px

Look specifically for:

* spacing differences
* font differences
* image sizing
* alignment
* section heights
* button dimensions
* responsive breakpoints
* animation timing
* missing content
* overflow
* incorrect colors

Fix discrepancies before considering the implementation complete.

---

# 29. No Placeholder Implementation

Do NOT leave:

```text
TODO
Coming Soon
Placeholder
Lorem ipsum
Placeholder image
Temporary icon
```

unless the original design itself contains it.

Every visible part of the reference must be implemented.

---

# 30. Final Project Expectations

The completed project must satisfy all of the following:

* Exact reference design recreation
* Existing Next.js structure preserved
* Clean component architecture
* TypeScript
* Tailwind CSS
* Framer Motion where required
* Original assets reused
* Original fonts reused
* Original favicon reused
* Responsive across mobile/tablet/desktop
* Functional interactions
* Correct animations
* Accessible markup
* Optimized images
* High performance
* Minimal unnecessary JavaScript
* No unnecessary dependencies
* No horizontal overflow
* No console errors
* No TypeScript errors
* No build errors
* Production-ready code

---

# 31. Important Implementation Rule

**Do not start coding immediately.**

First understand the supplied files.

The workflow must be:

```text
Existing Next.js Project
        ↓
Inspect Project Structure
        ↓
Inspect Single HTML
        ↓
Inspect design/
        ↓
Compare HTML + CSS + JS + Assets
        ↓
Identify Sections
        ↓
Identify Components
        ↓
Identify Data
        ↓
Identify Assets
        ↓
Identify Responsive Rules
        ↓
Identify Animations
        ↓
Implement Section by Section
        ↓
Integrate Assets
        ↓
Implement Responsive Behavior
        ↓
Implement Interactions
        ↓
Optimize Performance
        ↓
Run Lint
        ↓
Run Build
        ↓
Visual Verification
        ↓
Fix Differences
        ↓
Final Production-Ready Next.js Project
```

# 32. Definition of Done

The task is complete only when the resulting Next.js application:

1. Runs without errors.
2. Builds successfully.
3. Uses the provided design assets.
4. Matches the reference design visually.
5. Matches responsive behavior.
6. Matches important interactions.
7. Matches animations and effects.
8. Uses reusable components.
9. Uses data files for repeated/static section content where appropriate.
10. Maintains clean TypeScript code.
11. Does not unnecessarily increase bundle size.
12. Does not introduce unnecessary dependencies.
13. Does not contain placeholder content.
14. Does not contain known console/build/type errors.
15. Looks like a properly engineered production Next.js project rather than a direct HTML-to-JSX dump.

**Priority order:**

```text
1. Reference accuracy
2. Functional correctness
3. Responsive correctness
4. Performance
5. Accessibility
6. Maintainability
7. Code cleanliness
```

When there is a conflict between an arbitrary implementation preference and the supplied reference design, **the supplied reference design takes priority**, while still preserving good Next.js architecture and performance.
