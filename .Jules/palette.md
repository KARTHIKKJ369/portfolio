## 2024-07-15 - Keyboard Accessibility & Scroll Spies
**Learning:**
In single page React apps (SPAs), users using screen readers and keyboards can struggle to navigate effectively because changing views/scrolls might not accurately reset focus. I learned that adding a hidden "Skip to content" link that focuses an element with `tabIndex={-1}` and removing its outline prevents focus from resetting to the top of the body randomly on subsequent navigations. Additionally, visual changes indicating an active nav section (via scrollspy) should be communicated to assistive tech using `aria-current="true"`.

**Action:**
Added a robust "Skip to content" pattern to `App.tsx` matching tailwind standards, ensuring `<main>` had `tabIndex={-1}` and `outline-none`. Updated `Navbar.tsx` to conditionally include `aria-current="true"`. Next time I see a scrollspy or SPA route change, I will verify these patterns are applied.
