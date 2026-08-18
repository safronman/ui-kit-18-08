# @safronman/ui-kit

Reusable React UI components.

## Requirements

- React 19
- React DOM 19

## Installation

```bash
pnpm add @safronman/ui-kit
```

## Usage

Import the package stylesheet once in the application entry point, then import components from the package.

```tsx
import '@safronman/ui-kit/styles.css'
import { Button } from '@safronman/ui-kit'

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

## License

[MIT](./LICENSE)
