# Repository Guidelines

## Project Structure & Module Organization

This is a Vite-powered React 19 application written in TypeScript. Application entry and global styles live in `src/main.tsx` and `src/index.css`; the root UI component is `src/App.tsx` with component styles in `src/App.css`. Put feature-specific components and their related assets under `src/` (for example, `src/components/Button.tsx`). Static files served unchanged belong in `public/`; imported images and SVGs belong in `src/assets/`.

Configuration is kept at the repository root: `vite.config.ts`, `tsconfig*.json`, and `.oxlintrc.json`. Do not edit generated build output if one is added later.

## Build, Test, and Development Commands

Use pnpm; the lockfile is `pnpm-lock.yaml`.

- `pnpm dev` starts the Vite development server with hot module replacement.
- `pnpm build` type-checks via `tsc -b` and creates a production bundle.
- `pnpm lint` runs Oxlint across the project.
- `pnpm preview` serves the built application locally for a production smoke check.

Run `pnpm lint` and `pnpm build` before opening a pull request. No automated test framework is currently configured.

## Coding Style & Naming Conventions

Follow the existing style: two-space indentation, single quotes, no semicolons, and trailing commas in multiline TypeScript/TSX. Use function components and keep hooks at the top level. Name React components in PascalCase (`ProfileCard.tsx`); use camelCase for variables and functions. Keep CSS selectors descriptive and co-locate simple component styles with the component. Prefer `className` for reusable styling and avoid new page-wide IDs unless necessary.

Oxlint enforces React Hooks rules and warns when modules mix components with non-component exports. Address lint errors and avoid suppressions unless there is a documented reason.

## Testing Guidelines

There is no test suite or coverage target yet. For UI changes, manually verify the relevant flow with `pnpm dev`, including narrow viewport behavior when styles change. If introducing tests, place them beside the unit under test using `*.test.ts` or `*.test.tsx`, add the runner command to `package.json`, and document it here.

## Commit & Pull Request Guidelines

The repository has no established commit history, so use concise Conventional Commits, such as `feat(ui): add alert component` or `fix(styles): correct mobile spacing`. Keep commits focused.

After every completed task, the agent must include a proposed Conventional Commit message in its final response, even when it does not create a commit. The proposal must use the pattern `type(scope): imperative summary`, for example `feat(ui): add alert component`; choose a scope that reflects the changed area.

Pull requests should explain the user-facing change, note validation performed (`pnpm lint`, `pnpm build`), link the relevant issue when applicable, and include screenshots for visible UI changes. Call out any new dependencies or configuration changes.
