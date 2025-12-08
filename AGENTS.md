# Agent Guidelines for Clothing Store Project

## Build & Test Commands
- **Run from `clothing_store/` subdirectory or use**: `npm --prefix "D:\Projects\Clothing Store\clothing_store" run <script>`
- **Dev server**: `npm run dev` (port 8080, host "::")
- **Build**: `npm run build` (production via Vite)
- **Lint**: `npm run lint` (ESLint flat config: React Hooks enforced, unused vars allowed)
- **Preview**: `npm run preview` (production build preview)
- **Tests**: No test suite; add Vitest if needed

## Project Structure
- **Stack**: Vite 5 + React 18 + TypeScript 5 + SWC + Tailwind CSS 3 + shadcn/ui + React Router 6 + React Query 5
- **Working directory**: `clothing_store/` subdirectory (project root has no package.json)
- **Path alias**: `@/*` → `./src/*` (tsconfig.json + vite.config.ts)
- **UI components**: shadcn/ui in `src/components/ui/` (add via `npx shadcn@latest add`, don't manually edit)

## Code Style
- **Imports**: Always use `@/` alias for src imports (e.g., `@/components/ui/button`, `@/hooks/use-toast`)
- **Components**: Functional components with TypeScript; default export for pages, named for reusables
- **Props**: Explicit interfaces with descriptive names (e.g., `interface ProductCardProps { id: number; ... }`)
- **Styling**: Tailwind utilities; use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional classes
- **Icons**: `lucide-react` only (e.g., `import { ShoppingCart, Heart } from "lucide-react"`)
- **Types**: Relaxed TS (noImplicitAny/strictNullChecks: false); prefer explicit types but optional
- **Naming**: PascalCase (components/interfaces), camelCase (functions/vars), kebab-case (CSS classes)
- **State**: React hooks (useState/useEffect); React Query for server state; CartContext for global cart
- **Routing**: React Router v6; routes in App.tsx; add custom routes above `path="*"` catch-all
- **Routes**: `/` (home), `/category/:category` (collections), `/collection/:category/:collection` (products), `/product/:id` (detail), `/cart`
- **Error handling**: No error boundaries; add if needed
- **ESLint**: @typescript-eslint/no-unused-vars: off; reactHooks.configs.recommended enforced
