# classname-merge

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Just `cn` function ! Merge class names using clsx and tailwind-merge

## Qucik start

```bash
pnpm add classname-merge
```

```tsx
import { cn } from 'classname-merge'

const isRed = true

function app() {
  return (
    <div className={cn('bg-blue-500', isRed && 'text-red-500')} />
  )
}
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [leizhenpeng](https://github.com/leizhenpeng)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/classname-merge?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/classname-merge
[npm-downloads-src]: https://img.shields.io/npm/dm/classname-merge?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/classname-merge
[bundle-src]: https://img.shields.io/bundlephobia/minzip/classname-merge?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=classname-merge
[license-src]: https://img.shields.io/github/license/leizhenpeng/classname-merge.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/leizhenpeng/classname-merge/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/classname-merge
