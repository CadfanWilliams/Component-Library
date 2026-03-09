# Feefo Rating Card

A React component library implementing a Feefo-style product rating card,
built as part of a UI assessment.

## Getting Started

npm install
npm run dev # Start dev server at localhost:5173
npm test # Run tests with coverage

## Component Architecture

RatingCard ← Root card, computes rating from breakdown data
├── StarRating ← Renders 5 stars (full / half / empty)
│ └── Star ← Single star SVG with fill state
└── RatingBreakdown ← Histogram of reviews by star level
└── RatingBar ← Single row: label, bar, count

## Potential Improvements

- CI/CD through Github actions
- Replace PropTypes with TypeScript for compile-time safety
- Add a loading/skeleton state for when data is being fetched
- Animate the bar fills on mount using CSS transitions
- Internationalise the "OUT OF 5" and "Excellent" strings via i18n
- Add a theme prop to support white-label colour customisation
