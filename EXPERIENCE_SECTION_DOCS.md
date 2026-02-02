# Experience & Education Section - Complete Documentation

## 📋 Overview

The **Experience Section** is a fully animated timeline component showcasing work experience and educational background. It features scroll-triggered animations, alternating left-right layout, interactive cards, and a progress bar tracking scroll through the timeline.

---

## ✨ Key Features

- ✅ **Scroll-Triggered Animations** - GSAP + ScrollTrigger integration
- ✅ **Alternating Layout** - Left/Right card positioning (automatically switches to single column on mobile)
- ✅ **Interactive Cards** - Hover effects with lift and color transitions
- ✅ **Progress Bar** - Visual indicator of scroll progress through timeline
- ✅ **Pulsing Dots** - Animated timeline markers with pulse effect
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Tech Stack Badges** - Display technologies used
- ✅ **Multiple Experience Types** - Work and Education categories with different badge colors

---

## 🏗️ Component Structure

### File Location
```
app/components/Experience.tsx
```

### Component Hierarchy
```
Experience (Main Section)
├── Header (Title + Subtitle)
├── Timeline Container
│   ├── Progress Track (Center vertical line)
│   └── TimelineItem (Repeatable)
│       ├── Timeline Marker
│       │   ├── Timeline Line (vertical connector)
│       │   └── Timeline Dot (with pulse animation)
│       └── Timeline Content
│           └── Timeline Card
│               ├── Card Header (Type badge + Period)
│               ├── Card Title
│               ├── Company Info
│               ├── Description
│               ├── Achievements List
│               ├── Tech Stack Badges
│               └── Card Number (background)
└── CTA Button (Download CV)
```

---

## 📊 Data Structure

### Experience Item Interface
```typescript
interface ExperienceItem {
  id: number;                    // Unique identifier
  type: "work" | "education";    // Item category (determines badge style)
  title: string;                 // Position/Degree title
  company: string;               // Company/Institution name
  location: string;              // Geographic location
  period: string;                // Duration (e.g., "2024 - Present" or "6 months")
  description: string;           // Brief overview
  achievements: string[];        // Bullet points of accomplishments
  tech?: string[];              // Optional: Technology stack used
}
```

### Current Data
```typescript
const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Junior Web Developer (Self-Taught)",
    company: "Independent Projects",
    location: "Remote",
    period: "2024 - Present",
    description: "Building full-stack web applications...",
    achievements: [
      "Developed full-stack applications using React, Next.js...",
      "Implemented RESTful APIs...",
      "Optimized application performance..."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"]
  },
  // ... more items
];
```

---

## 🎨 Design System

### Colors
| Element | Color | Usage |
|---------|-------|-------|
| Accent | `#06B6D4` | Timeline dots, hover states, badges |
| Background | `#0a0a0a` | Section background |
| Primary Text | `#ededed` | Main text |
| Secondary Text | `rgba(255, 255, 255, 0.5-0.7)` | Descriptions, subtle text |
| Border | `rgba(255, 255, 255, 0.06)` | Card borders |
| Education Badge | `#4da6ff` | Education item badges |

### Typography

| Element | Font | Size | Letter Spacing |
|---------|------|------|-----------------|
| Title | Staatliches | `clamp(3rem, 8vw, 6rem)` | `0.02em` |
| Card Title | Staatliches | `1.5rem` | `0.05em` |
| Labels | Staatliches | `0.75-0.875rem` | `0.1-0.4em` |
| Body Text | System UI | `0.875-0.9375rem` | — |
| Subtitle | System UI | `1.125rem` | — |

### Spacing
- Section Padding: `8rem` vertical, `4rem` horizontal
- Card Padding: `2rem`
- Gap Between Items: `4rem` margin-bottom
- Timeline Content Width: `calc(50% - 60px)` (desktop)

---

## ⚙️ Animations

### 1. Timeline Item Animation (On Scroll)
**Trigger:** When item enters viewport (top 75%)  
**Sequence:**
1. **Line** - Grows from 0 to full height
   - Duration: `0.6s`
   - Easing: `power3.out`
   - Property: `scaleY: 0 → 1`

2. **Dot** - Appears with scale and opacity
   - Duration: `0.4s`
   - Easing: `back.out(2)` (elastic effect)
   - Starts: `-0.3s` (overlaps with line)
   - Properties: `scale: 0 → 1`, `opacity: 0 → 1`

3. **Content** - Slides in from side
   - Duration: `0.8s`
   - Easing: `power3.out`
   - Starts: `-0.2s` (overlaps with dot)
   - Left items: `x: -50px → 0`, `opacity: 0 → 1`
   - Right items: `x: 50px → 0`, `opacity: 0 → 1`

### 2. Header Animation (On Scroll)
**Trigger:** When header enters viewport (top 80%)  
**Animation:**
- Each child element animates individually
- Duration: `1s` per element
- Easing: `power3.out`
- Stagger: `0.15s` between elements
- Properties: `y: 80px → 0`, `opacity: 0 → 1`

### 3. Progress Bar Animation (Continuous Scroll)
**Trigger:** Linked to scroll position through entire timeline  
**Animation:**
- Property: `scaleY: 0 → 1`
- Easing: `none`
- Scrub: `1` (synced with scroll speed)
- Origin: Top to bottom

### 4. Pulsing Dot
**Animation:** Continuous loop  
**Timeline:**
- Duration: `2s` per cycle
- Easing: `ease-out`
- Repeat: Infinite
- Scale: `1 → 2.5`
- Opacity: `0.3 → 0`

### 5. Card Hover Effects
**Properties:**
- `transform: translateY(-5px)`
- `border-color: rgba(6, 182, 212, 0.3)`
- `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3)`
- Duration: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`

**Child Elements:**
- Title: Color changes to accent
- Tech badges: Border and background update to accent theme

### 6. Button Hover Animation
**Background fill animation:**
- `scaleX: 0 → 1`
- Direction: Right to left on hover
- Duration: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`
- Arrow bounce: `translateY(+3px)`

---

## 🎯 How to Clone/Duplicate This Section

### Step 1: Duplicate the Component
Copy [Experience.tsx](app/components/Experience.tsx) and rename to your new section (e.g., `Projects.tsx`):

```typescript
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: number;
  type: "featured" | "personal";  // Change types as needed
  title: string;
  company: string;  // Can be "Client" or "Category"
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tech?: string[];
}

// Replace with your data
const projects: ProjectItem[] = [
  {
    id: 1,
    type: "featured",
    title: "E-Commerce Platform",
    // ... rest of data
  },
];

// ... rest of component remains same
```

### Step 2: Update CSS Classes
All animations are tied to CSS classes. Create new scoped classes in `globals.css`:

```css
.projects-section {
  /* Same structure as .experience-section */
}

.projects-header {
  /* Same structure as .experience-header */
}

/* Keep timeline classes the same if reusing layout, or create new ones */
```

### Step 3: Add to Layout
Import and add to [layout.tsx](app/layout.tsx) or [page.tsx](app/page.tsx):

```typescript
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      {/* ... other sections ... */}
      <Experience />
      <Projects />
    </main>
  );
}
```

### Step 4: Update Navigation
Link the new section in [Navbar.tsx](app/components/Navbar.tsx):

```typescript
// Add to navigation menu
<a href="#projects">PROJECTS</a>
```

---

## 🛠️ Customization Guide

### Change Badge Colors
Locate in [globals.css](app/globals.css):
```css
.card-type {
  background: rgba(6, 182, 212, 0.1);  /* Primary badge */
  color: var(--accent);
}

.card-type.education {
  background: rgba(77, 166, 255, 0.1);  /* Secondary badge */
  color: #4da6ff;
}
```

### Modify Animation Timing
In [Experience.tsx](app/components/Experience.tsx):
```typescript
// Timeline line animation
tl.to(line, {
  scaleY: 1,
  duration: 0.6,  // ← Change this
  ease: "power3.out",
})
```

### Adjust Card Hover Effect
In [globals.css](app/globals.css):
```css
.timeline-card:hover {
  border-color: rgba(6, 182, 212, 0.3);
  transform: translateY(-5px);  /* ← Change -5px to desired value */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Change Layout Direction
Automatically handled by `.left` and `.right` classes, but can be modified:
```css
.timeline-item.left {
  flex-direction: row;  /* Content on right */
}

.timeline-item.right {
  flex-direction: row-reverse;  /* Content on left */
}
```

---

## 📱 Responsive Design

### Breakpoints

**Desktop (> 900px)**
- Alternating left/right layout
- Full timeline width
- Timeline centered at 50%

**Tablet & Mobile (≤ 900px)**
```css
.timeline-progress-track {
  left: 30px;  /* Move to left edge */
}

.timeline-item {
  flex-direction: row;  /* All items on left */
}

.timeline-content {
  width: calc(100% - 80px);  /* Narrower on mobile */
}
```

### Responsive Padding
- Desktop: `4rem` horizontal
- Tablet: `2rem` horizontal (via media queries)
- Mobile: `1rem` horizontal

---

## 📦 Dependencies

### Required Packages
```json
{
  "dependencies": {
    "gsap": "^3.x",          // Animation library
    "react": "^18.x",        // UI framework
    "next": "^14.x"          // Full-stack framework
  }
}
```

### GSAP Plugins Used
- **ScrollTrigger** - Scroll-based animations
- Already registered in component: `gsap.registerPlugin(ScrollTrigger)`

---

## 🔧 Usage Examples

### Adding a New Experience Item
```typescript
const newExperience: ExperienceItem = {
  id: 4,
  type: "work",
  title: "Senior Developer",
  company: "Tech Company",
  location: "New York, USA",
  period: "2024 - 2025",
  description: "Led development of internal tools...",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  tech: ["React", "TypeScript", "PostgreSQL"]
};

// Add to experiences array
experiences.push(newExperience);
```

### Changing Scroll Trigger Point
```typescript
ScrollTrigger.create({
  trigger: el,
  start: "top 75%",  // ← Change trigger point
  // "top 50%" = triggers when item reaches middle of viewport
  // "top 100%" = triggers when item enters viewport from bottom
  // "top 0%" = triggers immediately when item enters viewport
  onEnter: () => { /* ... */ }
});
```

### Adjusting Animation Duration
```typescript
tl.to(line, {
  scaleY: 1,
  duration: 0.6,  // ← Line animation
  ease: "power3.out",
})
.to(dot, {
  scale: 1,
  opacity: 1,
  duration: 0.4,  // ← Dot animation
  ease: "back.out(2)",
}, "-=0.3")
.to(content, {
  opacity: 1,
  x: 0,
  duration: 0.8,  // ← Content animation
  ease: "power3.out",
}, "-=0.2");
```

---

## 🎓 Key Concepts

### GSAP Timeline
Creates synchronized animations with precise timing:
```typescript
const tl = gsap.timeline();  // Create timeline
tl.to(element1, {...})       // Animation 1 (starts at 0ms)
  .to(element2, {...}, "-=0.3")  // Animation 2 (starts 0.3s before prev ends)
```

### ScrollTrigger
Links animations to scroll position:
```typescript
ScrollTrigger.create({
  trigger: element,           // Element to watch
  start: "top 75%",          // When trigger point enters viewport
  onEnter: () => { /* fire animation */ }
});
```

### Staggered Animations
Applies animation to multiple elements with delay:
```typescript
gsap.to(elements, {
  stagger: 0.15,  // 0.15s delay between each element
});
```

---

## 🐛 Troubleshooting

### Animations Not Playing
- ✓ Ensure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- ✓ Check if element is in viewport when page loads
- ✓ Verify `ref` is properly attached to DOM element

### Layout Issues on Mobile
- ✓ Check media query breakpoint (currently 900px)
- ✓ Verify `.timeline-content` width calculation
- ✓ Test with different device sizes in DevTools

### Card Not Showing Tech Badges
- ✓ Ensure `tech` array is provided in data
- ✓ Check CSS for `.card-tech` and `.tech-badge` classes

### Progress Bar Not Animating
- ✓ Verify `scrub: 1` is set correctly
- ✓ Check if ScrollTrigger is detecting scroll area properly
- ✓ Ensure timeline container has sufficient height

---

## 📄 Files Reference

| File | Purpose |
|------|---------|
| [app/components/Experience.tsx](app/components/Experience.tsx) | Main component & logic |
| [app/globals.css](app/globals.css) | All styling & animations |
| [app/layout.tsx](app/layout.tsx) | Component import & rendering |
| [package.json](package.json) | Dependencies (GSAP, React, Next.js) |

---

## 🚀 Performance Tips

1. **Lazy Load Images** - Use Next.js `<Image>` component for project images
2. **Debounce Scroll** - ScrollTrigger handles this automatically
3. **Minimize Reflows** - CSS animations use `transform` and `opacity` only
4. **Bundle Optimization** - GSAP is tree-shakeable

---

## 📝 License & Attribution

This component uses:
- **GSAP** - GreenSock Animation Platform
- **React 18** - UI library
- **Next.js 14** - Framework
- **Tailwind CSS** - Utility classes

---

## 💡 Future Enhancements

- [ ] Filter experiences by type (Work/Education)
- [ ] Add search functionality
- [ ] Integrate with CMS for dynamic data
- [ ] Add image galleries for projects
- [ ] Create export to PDF feature
- [ ] Add timeline year markers
- [ ] Implement dark/light theme toggle

---

**Last Updated:** February 2026  
**Version:** 1.0  
**Status:** Production Ready ✅
