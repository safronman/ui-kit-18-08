# Repository Guidelines

## Project Structure & Module Organization

This is a Vite-powered React 19 application written in TypeScript. Application entry and global styles live in `src/main.tsx` and `src/index.css`; the root UI component is `src/App.tsx` with component styles in `src/App.css`. Put feature-specific components and their related assets under `src/` (for example, `src/components/Button/Button.tsx`). Colocate Storybook stories with their components as `*.stories.tsx`. Static files served unchanged belong in `public/`; imported images and SVGs belong in `src/assets/`.

Storybook configuration is in `.storybook/`: `main.ts` configures React/Vite, addons, and the `public/` static directory; `preview.tsx` imports global styles and configures MSW; `msw-handlers.ts` contains request handlers. The generated MSW worker is `public/mockServiceWorker.js`—do not edit it manually.

Configuration is kept at the repository root: `vite.config.ts`, `tsconfig*.json`, and `.oxlintrc.json`. `tsconfig.app.json` covers `src/`, `tsconfig.storybook.json` covers `.storybook/`, and both are referenced from `tsconfig.json`. Do not edit generated build output if one is added later.

## Build, Test, and Development Commands

Use pnpm; the lockfile is `pnpm-lock.yaml`.

- `pnpm dev` starts the Vite development server with hot module replacement.
- `pnpm build` type-checks via `tsc -b` and creates a production bundle.
- `pnpm lint` runs Oxlint across the project.
- `pnpm preview` serves the built application locally for a production smoke check.
- `pnpm storybook` starts Storybook at port 6006.
- `pnpm build-storybook` builds a static Storybook site.
- `pnpm exec vitest --project storybook run` runs the browser-based interaction tests for all stories.

Run `pnpm lint`, `pnpm build`, and `pnpm exec vitest --project storybook run` before opening a pull request when UI components or stories change.

## Coding Style & Naming Conventions

Follow the existing style: two-space indentation, single quotes, no semicolons, and trailing commas in multiline TypeScript/TSX. Use function components and keep hooks at the top level. Name React components in PascalCase (`ProfileCard.tsx`); use camelCase for variables and functions. Keep CSS selectors descriptive and co-locate simple component styles with the component. Prefer `className` for reusable styling and avoid new page-wide IDs unless necessary.

Oxlint enforces React Hooks rules and warns when modules mix components with non-component exports. Address lint errors and avoid suppressions unless there is a documented reason.

When importing a CSS Module in a component or page, always use `s` as the local import name: `import s from './Component.module.css'`. Reference its selectors through `s`, for example `className={s.container}`. Do not use `styles` or other aliases for CSS Modules.

## Testing Guidelines

Storybook stories are the current UI test suite and run through Vitest with Playwright. For UI changes, create or update colocated `*.stories.tsx` files and run `pnpm exec vitest --project storybook run`. Keep visual variants free of redundant `play` functions; use `play` only for meaningful interactions, asynchronous results, portals, accessibility, or CSS assertions. For styles that depend on global CSS, include exactly one relevant computed-style check rather than repeated visibility-only plays.

The preview imports `src/index.css` and applies MSW globally. Add only endpoint-specific handlers to `.storybook/msw-handlers.ts`; do not add catch-all handlers or mock browser APIs directly. For UI changes, manually verify the relevant flow with `pnpm dev` or `pnpm storybook`, including narrow viewport behavior when styles change.

## Storybook MCP Rules

When working on UI components, always use the `your-project-sb-mcp` MCP tools to access Storybook's component and documentation knowledge before answering or taking any action.

- **CRITICAL: Never hallucinate component properties!** Before using any property on a design-system component—including common-sounding properties such as `shadow`—use the MCP tools to confirm that it is documented for that component.
- Query `list-all-documentation` to get the list of components.
- Query `get-documentation` for the relevant component to inspect every available property and its examples.
- Use only properties explicitly documented or demonstrated in example stories.
- If a property is not documented, do not infer it from naming conventions or patterns in other libraries; ask the user how to proceed.
- Use `get-storybook-story-instructions` to fetch current instructions before creating or updating stories.
- Validate Storybook work with `run-story-tests`.

A story name may not match a property name. Always verify properties through component documentation or example stories.

## Storybook CSF Next

Use the latest supported CSF Next (CSF Factories) format for every new or updated Storybook configuration and story:

- Define the preview with `definePreview` from `@storybook/react-vite` and define main configuration with `defineMain` from `@storybook/react-vite/node`.
- Import the preview into each story, create component metadata with `preview.meta(...)`, and create stories with `meta.story(...)`.
- If CSF Next cannot infer props for a wrapped or polymorphic component and story `args` become `never`, use the component's exported props contract: `preview.type<{ args: ComponentProps }>().meta(...)`.
- Do not use legacy `Meta`, `StoryObj`, default meta exports, or CSF3 `loaders` in new or migrated stories.
- For MSW, use `addonMsw()` from `msw-storybook-addon` in `definePreview` with endpoint-specific handlers in `beforeEach`; do not use the deprecated `mswLoader` from `msw-storybook-addon/csf3`.
- Declare every custom story tag in `defineMain({ tags: ... })` for Storybook filtering and include it in `definePreview({ tags: ... })` before applying it in `preview.meta(...)` or `meta.story(...)`; CSF Next infers tag types from the preview factory.
- After a CSF Next migration, run `pnpm exec vitest --project storybook run`, `pnpm build`, and the available `your-project-sb-mcp` `run-story-tests` tool.

## Commit & Pull Request Guidelines

The repository has no established commit history, so use concise Conventional Commits, such as `feat(ui): add alert component` or `fix(styles): correct mobile spacing`. Keep commits focused.

After every completed task, the agent must include a proposed Conventional Commit message in its final response, even when it does not create a commit. The proposal must use the pattern `type(scope): imperative summary`, for example `feat(ui): add alert component`; choose a scope that reflects the changed area.

Pull requests should explain the user-facing change, note validation performed (`pnpm lint`, `pnpm build`), link the relevant issue when applicable, and include screenshots for visible UI changes. Call out any new dependencies or configuration changes.
