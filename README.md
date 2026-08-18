# @safronmandev1/ui-kit

Reusable React UI components.

## Requirements

- React 19
- React DOM 19

## Installation

```bash
pnpm add @safronmandev1/ui-kit
```

## Usage

Import the package stylesheet once in the application entry point, then import components from the package.

```tsx
import '@safronmandev1/ui-kit/styles.css'
import { Button } from '@safronmandev1/ui-kit'

export function SaveButton() {
  return <Button variant="primary">Save</Button>
}
```

`Button` supports `primary`, `secondary`, `outline`, and `text` variants. It also accepts the underlying Base UI button props, plus `fullWidth`.

## Development

```bash
pnpm lint
pnpm build
pnpm exec vitest --project storybook run
```

The library build is written to `dist/`. Inspect its publishable contents with:

```bash
npm pack --dry-run
```

## Publishing

The first release must be published manually after signing in to npm. Then configure npm Trusted Publisher for `safronman/ui-kit-18-08`, selecting the `publish.yml` workflow file (located at `.github/workflows/publish.yml`) and the `npm` environment. Subsequent versions are published by pushing a matching version tag.

The workflow uses GitHub Actions OIDC and does not require an `NPM_TOKEN` secret. Protect the `npm` GitHub environment so only approved maintainers can publish releases.

### Release a new version

The package version must always be changed in `package.json` before a release. Do not create or push a version tag manually: the workflow publishes only when the `v`-prefixed tag exactly matches `package.json.version`.

From a clean `main` branch, choose one command according to [Semantic Versioning](https://semver.org/):

```bash
# Bug fix: 0.1.0 → 0.1.1
npm version patch

# Backward-compatible functionality: 0.1.0 → 0.2.0
npm version minor

# Breaking API change: 0.1.0 → 1.0.0
npm version major
```

`npm version` updates `package.json`, creates a release commit, and creates the matching `v` tag. Push both with:

```bash
git push origin main --follow-tags
```

The tag starts the workflow. It verifies the tag/version match, runs checks, and publishes the package. For example, tag `v0.1.1` can publish only when `package.json` contains `"version": "0.1.1"`.

## License

[MIT](./LICENSE)
