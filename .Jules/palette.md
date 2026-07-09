## 2024-07-09 - Inconsistent ARIA labels across components
**Learning:** Component-level isolation can lead to inconsistent accessibility practices across an app. The Footer had ARIA labels for icon-only links, but the Navbar did not.
**Action:** When adding accessibility features to one component, check similar patterns in other components (e.g., all instances of social link icons).
