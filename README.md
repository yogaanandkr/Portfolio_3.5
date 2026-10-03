# Yoga Anand Portfolio

React + TypeScript + Vite, with Tailwind CSS and styled-components. The design, content, dark/light themes, and animations are preserved.

## Run

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal.

## Development checks

```bash
npm run check
npm run build
npm run preview
```

`check` runs TypeScript, ESLint (including React Hooks rules), and Prettier validation. Use `npm run format` to format files.

## Structure

| Path                       | Purpose                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `src/App.tsx`              | Compose page sections                                                              |
| `src/components/layout/`   | Header and footer                                                                  |
| `src/components/sections/` | Hero, experience, skills, contact, and typed experience cards                      |
| `src/components/ui/`       | Reusable styled Container, Button, Card, and SectionHeading                        |
| `src/data/portfolio.ts`    | Typed experience data, profile links, navigation, and skills                       |
| `src/hooks/`               | Clipboard state with timer cleanup and scoped scroll reveals                       |
| `src/theme/`               | Typed palettes, context, styled-components ThemeProvider, and shared CSS variables |
| `src/types/`               | Domain and theme types                                                             |
| `src/index.css`            | Tailwind setup, global base utilities, and custom keyframes                        |

## Styling boundaries

Shared UI primitives use styled-components. Section-specific layouts and spacing use Tailwind. Theme colors are defined once in `src/theme/themes.ts` and exposed through CSS variables for Tailwind, so both styling systems use the same palette. Styled transient props (`$variant`, `$size`, `$mobileSize`) stay out of the rendered DOM.

Dark mode uses black and blue; light mode uses white and blue. Theme preference persists locally, with a fallback when storage is unavailable. Animations respect reduced-motion preferences. Accordion and menu controls include ARIA state and associated IDs.

## Content

Edit `src/data/portfolio.ts` for employment history, contributions, skills, and profile links. Section-specific copy lives in the corresponding section component. The LMS work includes AWS S3, Google Drive service accounts, Socket.IO, and CI/CD. The downloadable resume remains the original supplied PDF.

The production build, TypeScript, lint, and formatting checks are the available validation gates; browser visual verification is not included in this environment. Review personal information before publishing.
