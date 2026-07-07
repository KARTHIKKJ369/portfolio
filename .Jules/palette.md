## YYYY-MM-DD - Missing aria-label attributes on icon-only navigation links
**Learning:** Found that while the footer's icon-only links included `aria-label`s, the main navigation's icon-only links did not. This can easily happen when navigation elements are duplicated for mobile vs desktop views or added incrementally.
**Action:** Always verify `aria-label`s for icon-only links across all components, particularly responsive navigations that duplicate elements for different viewports.
