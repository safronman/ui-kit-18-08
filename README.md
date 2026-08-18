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

The first release must be published manually after signing in to npm. Then configure npm Trusted Publisher for `safronman/ui-kit-18-08`, selecting `.github/workflows/publish.yml` and the `npm` environment. Subsequent versions are published by creating a GitHub Release after the version has been updated in `package.json`.

The workflow uses GitHub Actions OIDC and does not require an `NPM_TOKEN` secret. Protect the `npm` GitHub environment so only approved maintainers can publish releases.

## License

[MIT](./LICENSE)
