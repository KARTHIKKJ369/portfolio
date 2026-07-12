## 2024-07-12 - Missing ARIA Labels in Navbar Social Links
**Learning:** Found an inconsistency where the Footer had `aria-label` attributes for icon-only links (GitHub, LinkedIn, Mail), but the Navbar was missing them for the same icons in both desktop and mobile views. This hurts accessibility for screen reader users navigating the primary header.
**Action:** Always verify that all icon-only interactive elements across all views (desktop/mobile) have descriptive `aria-label`s, especially when duplicating links between header and footer.
