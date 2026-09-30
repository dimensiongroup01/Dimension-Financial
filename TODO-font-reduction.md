# Font Size Reduction - Implementation Plan

## Steps to Complete:

- [x] 1. Reduce font clamp() values in globals.css by ~30-40%
- [x] 2. Add custom scaled font sizes in tailwind.config.ts
- [x] 3. Reduce chapter-content padding for one-frame view

## Changes Made:

### Step 1: globals.css font reductions - COMPLETE
- `.chapter-label`: 0.7rem → 0.55rem
- `.chapter-title`: clamp(2.15rem, 7.4vw, 5.4rem) → clamp(1.5rem, 5vw, 3.5rem)
- `.chapter-copy`: clamp(1rem, 1.9vw, 1.28rem) → clamp(0.85rem, 1.5vw, 0.95rem)
- `.impact-value`: clamp(1.7rem, 6vw, 3.05rem) → clamp(1.2rem, 4vw, 2rem)
- `.impact-label`: 0.72rem → 0.6rem
- `.deal-year`: 0.72rem → 0.6rem
- `.story-label`: 0.69rem → 0.55rem
- `.story-title`: clamp(1.6rem, 4.1vw, 2.65rem) → clamp(1.1rem, 2.8vw, 1.75rem)
- `.story-detail`: clamp(0.96rem, 1.5vw, 1.08rem) → clamp(0.8rem, 1.2vw, 0.9rem)
- `.chapter-content` padding: 6rem 1.5rem → 3rem 1rem

### Step 2: tailwind.config.ts custom fonts - COMPLETE
- Added smaller custom font sizes:
  - text-xl: 1.1rem
  - text-2xl: 1.25rem
  - text-3xl: 1.4rem
  - text-4xl: 1.6rem
  - text-5xl: 1.8rem
  - text-6xl: 2rem
