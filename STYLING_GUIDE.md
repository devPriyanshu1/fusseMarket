# FusseMarket Professional Styling Guide

## Color Palette (Industry-Based)

### Primary Colors
- **Primary Blue**: `#1e3a8a` - Deep Navy Blue (main brand color)
- **Secondary Teal**: `#0f766e` - Professional Teal (accents & secondary CTAs)
- **Accent Red**: `#dc2626` - Corporate Red (highlights & important actions)
- **Dark**: `#0f172a` - Near Black (text & dark elements)

### Status Colors
- **Success**: `#059669` - Professional Green
- **Warning**: `#d97706` - Professional Orange

### Neutral Colors
- **Light Background**: `#f0f9ff` - Light Blue
- **Gray 50**: `#f9fafb`
- **Gray 100**: `#f3f4f6`
- **Gray 200**: `#e5e7eb`
- **Gray 300**: `#d1d5db`
- **Gray 400**: `#9ca3af`
- **Gray 500**: `#6b7280`
- **Gray 600**: `#4b5563` - Text color
- **Gray 700**: `#374151`
- **Gray 800**: `#1f2937`
- **Gray 900**: `#111827`

## Component Styles

### Buttons
- **Primary Button**: Navy Blue background with white text
- **Secondary Button**: Teal background with white text
- **Accent Button**: Red background with white text
- **Success Button**: Green background with white text
- **Outline Button**: Border with primary color, transparent background
- **Ghost Button**: Transparent with hover effects

**Button Sizes**:
- `sm`: px-4 py-2 text-sm
- `md`: px-6 py-3 text-base (default)
- `lg`: px-8 py-4 text-lg
- `xl`: px-10 py-5 text-lg

### Cards
- **Variants**:
  - `light`: White background with light gray border (default)
  - `primary`: Light blue tint with primary border
  - `secondary`: Light teal tint with secondary border
  - `dark`: Dark background with white text
- **Hover Effect**: Elevates with shadow and border color shift
- **Padding**: 6 (24px) by default, adjustable (2, 4, 6, 8)

### Typography
- **Headings**: Navy Blue (#1e3a8a), Bold weight
- **Paragraphs**: Gray-600 (#4b5563), 1.6 line height
- **Links**: Navy Blue, hover to Red

## Animations
- `animate-fade-in`: Fade in with slide up (1s)
- `animate-slide-in-right`: Slide from right (0.8s)
- `animate-slide-in-left`: Slide from left (0.8s)
- `animate-scale-in`: Scale up animation (0.6s)
- `hero-gradient-bg`: Animated gradient background
- `animate-pulse-subtle`: Subtle pulsing effect (3s)

## Usage Examples

### Using Color Variables in Tailwind
```jsx
// Primary
className="bg-primary text-white"
className="border-primary/30"

// Secondary
className="bg-secondary text-white"

// Accent
className="text-accent bg-accent/10"
```

### Custom Variants
For specific use cases, use the color names directly:
```jsx
// Success button
<Button variant="success">Confirm</Button>

// Card with primary tint
<Card variant="primary">
  Content
</Card>

// Card with dark theme
<Card variant="dark" className="text-white">
  Content
</Card>
```

## Responsive Design
All components follow mobile-first responsive design:
- Mobile: Full width
- Tablet: 2-3 columns
- Desktop: 3-4 columns
- Large Desktop: Full layout

## Best Practices
1. Use primary color for main CTAs and branding
2. Use secondary for alternative actions
3. Use accent red sparingly for important alerts
4. Maintain consistent spacing (multiples of 4px)
5. Ensure proper contrast for accessibility
6. Use hover states for all interactive elements
7. Keep animations subtle and professional

## Accessibility
- All interactive elements have focus states with ring-2
- Color contrast meets WCAG AA standards
- Animations respect `prefers-reduced-motion`
- Text remains readable on all backgrounds
