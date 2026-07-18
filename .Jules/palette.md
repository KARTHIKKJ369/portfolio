## 2025-02-17 - Add universal focus-visible styles
**Learning:** The app was missing clear focus indicators for keyboard navigation across various interactive elements. While some elements had specific focus styles (like inputs), many buttons and links lacked a visible focus ring, hindering accessibility for keyboard users.
**Action:** Implemented a global `*:focus-visible` rule in `src/index.css` using the existing `--accent` color to provide a consistent and accessible focus indicator without affecting mouse users.
