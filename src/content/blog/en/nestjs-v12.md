---
title: 'NestJS 12. ESM.'
description: 'The long-awaited twelfth release. Modern tooling is finally here'
createdAt: 2026-09-06
tags: ['nodejs', 'typescript', 'nestjs']
---

## It's happening.

The long-awaited release is finally here. (And yes, I was actually waiting for it after Kamil's post on LinkedIn.)

I was really curious to see how the move to ESM would be implemented, how much it would affect the framework, and how Nest would deal with what has been a pretty painful area for it for quite a while: ESM compatibility and the JS ecosystem that has moved significantly ahead.

## What changed?

The biggest change is the move to **ESM**. Core packages are now published as ES Modules, and when creating a new project, you can choose ESM right away.

At the same time, nobody is forcing existing CJS projects to migrate. Thanks to `require(esm)` in modern Node.js versions, they can continue working with NestJS 12.

For new ESM projects, the stack now looks noticeably more modern:

- ESM
- Vitest
- Oxlint
- Rspack
- Standard Schema instead of ClassValidator/ClassTransformer

The minimum Node.js version has also been bumped: you now need Node `20.19+` or `22.12+`.

The move to ESM has been long overdue. Especially with more and more libraries becoming ESM-only, while modern Node.js tooling has been moving in this direction for quite some time. A lot of packages from the ecosystem are now available pretty much out of the box — and that's great.

For existing projects, migrating from CJS to ESM is not something you have to do right now. For new projects, though, choosing CJS already feels questionable.

## What can you try?

First of all, I'd take a look at the new validation approach through Standard Schema. It allows you to use Zod, ArkType, and other libraries for validation. With them, validated requests can become significantly faster compared to Class Validator — and that's great.

After that, you can try using Drizzle directly. One of the best tools out there, after all.

And then — Vitest. By the way, it's now the default test runner for projects that choose ESM.

### Sources:

- [Official NestJS 12 post](https://trilon.io/blog/nestjs-12-is-now-available)
- [Changelog on GitHub](https://github.com/nestjs/nest/releases/tag/v12.0.0)
