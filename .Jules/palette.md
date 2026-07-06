## 2026-07-06 - Add ARIA labels to icon-only links
**Learning:** Found a common accessibility pattern in this app's responsive navigation where icon-only external links lacked descriptive text.
**Action:** Ensure all newly added interactive icons (lucide-react components) inside anchor tags have appropriate `aria-label` attributes.
