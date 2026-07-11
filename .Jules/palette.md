## 2024-07-11 - Missing ARIA labels in Navbar
**Learning:** Found an accessibility issue pattern where icon-only links in the main navigation (Navbar.tsx) were missing ARIA labels, despite them being present in the Footer. This inconsistency affects screen reader users who cannot infer the link's purpose from the visual icon alone.
**Action:** Always verify all icon-only links across different navigation components (header, footer, mobile menus) to ensure consistent ARIA label usage.
