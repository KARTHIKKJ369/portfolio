## 2026-07-16 - Adding Accessible Skip Links & Semantic State
**Learning:** Relying solely on visual cues (like text color or underline) for active navigation state leaves screen reader users behind. Additionally, single-page scroll applications can trap keyboard users in long top-level navigation loops without a bypass mechanism.
**Action:** Always use `aria-current='page'` in conjunction with visual active states. Add a visually hidden 'Skip to main content' link that becomes visible on `focus:` to allow keyboard users to jump straight into the application's primary content.
