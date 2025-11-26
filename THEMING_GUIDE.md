# Theming Guide - Spartan UI

## Overview

Customize your design system with CSS variables. No theming API required.

spartan/ui uses CSS variables for theming. Change colors across your entire application by updating values in your `styles.css` file - no component props, no complex configuration.

```html
<div class="bg-background text-foreground">Themed content</div>
```

## How it works

CSS variables are defined in your `styles.css` and referenced in Tailwind utility classes. Update the variable, and every component using that color updates automatically.

**styles.css**

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
}
```

Use the color in your markup with Tailwind classes:

```html
<button class="bg-primary text-primary-foreground">Click me</button>
```

## Color naming convention

spartan follows a **background and foreground** convention for semantic color pairs. Each background color has a corresponding foreground color for text that sits on top of it.

### Background colors

- `bg-primary`
- `bg-secondary`
- `bg-destructive`
- `bg-muted`

### Foreground colors

- `text-primary-foreground`
- `text-secondary-foreground`
- `text-destructive-foreground`
- `text-muted-foreground`

> **Note:** The `-background` suffix is omitted from CSS variable names. The variable `--primary` maps to the class `bg-primary`.

## Available variables

Here are all CSS variables you can customize. Define them in `:root` for light mode and `.dark` for dark mode:

**styles.css**

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.985 0 0);
  --sidebar-primary-foreground: oklch(0.205 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```

> **Important:** Use OKLCH without the color space function. Define variables as `oklch(0.5 0.2 180)`, not `oklch(0.5, 0.2, 180)`. See the [Tailwind documentation](https://tailwindcss.com/docs/customizing-colors#using-css-variables) for details.

## Adding custom colors

Add new semantic colors by defining the CSS variable and registering it with Tailwind:

**styles.css**

```css
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

Use the new color with Tailwind classes:

```html
<div class="bg-warning text-warning-foreground">Warning message</div>
```

## OKLCH Color Space

OKLCH (Lightness, Chroma, Hue) is a perceptually uniform color space that provides:

- **Lightness (L)**: 0 (black) to 1 (white)
- **Chroma (C)**: 0 (gray) to ~0.4 (vibrant)
- **Hue (H)**: 0-360 degrees (color wheel)

### Benefits

- Perceptually uniform brightness
- Predictable color mixing
- Better accessibility
- Consistent saturation across hues

## Best Practices

1. **Always define foreground colors** for backgrounds to ensure proper contrast
2. **Test in both light and dark modes** to ensure readability
3. **Use semantic naming** (primary, secondary, destructive) instead of color names (blue, red)
4. **Maintain consistent contrast ratios** for accessibility (WCAG AA: 4.5:1 for normal text)
5. **Use the theme editor** in this project to preview changes in real-time

## Resources

- [Spartan UI Documentation](https://www.spartan.ng/)
- [Tailwind CSS Variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables)
- [OKLCH Color Picker](https://oklch.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
