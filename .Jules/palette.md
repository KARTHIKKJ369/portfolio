## 2024-05-18 - Added skip-to-content link
**Learning:** Added a skip-to-content link for keyboard users which becomes visible on focus. Found that keyboard navigation was lacking visible focus indicators across the app, especially on custom interactive elements.
**Action:** Added global `:focus-visible` styles to `src/index.css` to provide a clear, unified focus ring using `var(--accent)` color for better keyboard accessibility.
