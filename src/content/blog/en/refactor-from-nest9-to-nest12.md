---
title: 'Refactoring and upgrading from Nest 10 to Nest 12'
description: 'A few thoughts on the ecosystem'
createdAt: 2026-09-25
tags: ['nestjs', 'nodejs']
---

## Why touch it if it works?

I decided to update an old project of mine. Besides fixing various security issues, it should bring other benefits too, including better performance.
And a whole pile of dependencies (some with CVEs) will finally be more or less up to date.

### A few thoughts along the way

- Coming back to your old code (written by hand, not an agent) and being horrified that _you_ wrote it is pretty useful. I guess it's some kind of sign that you've grown. Also a reminder that code written by hand isn't always good :D (and agents will replace us all).

- After several years away from it, [Prisma](https://www.prisma.io/) 5 and all the marketing around it look pretty funny. Especially in light of version 8 (they're moving toward a model similar to [Drizzle](https://orm.drizzle.team/)). A bit of a cold shower, really: don't count on hype trains in the long run. They might end up right where Prisma did.

- So many CVEs. Seriously, so many. In the couple of years I hadn't touched the repo, a lot happened, including major supply chain attacks on [npm](https://www.npmjs.com/). Sorting some of it out was pretty tricky, but after N iterations, it was all resolved.

- One thing that feels unfamiliar: with [Nest 12](https://nestjs.com/) and [ESM](https://nodejs.org/api/esm.html), relative imports use `.js` extensions (still feels a little weird).

```typescript
import { AppModule } from './app.module.js';
```

- I've also been thinking about where Nest could go next. I like its framework-agnostic approach, where we're free to choose [Express](https://expressjs.com/) or [Fastify](https://fastify.dev/). I think it could go even further:

1. Become runtime-agnostic, with the option to use [Deno](https://deno.com/) or [Bun](https://bun.sh/) under the hood. [Hono](https://hono.dev/) already does this, for example.
2. Add AOT compilation like [Angular](https://angular.dev/tools/cli/aot-compiler) and move away from [reflect-metadata](https://www.npmjs.com/package/reflect-metadata). Maybe that would earn Nest some points in serverless environments, where a fast startup matters.

But that's a lot more complicated. Even the move to ESM took a lot of time and effort.
Overall, it was a successful and interesting experience. Nest keeps getting better. In [12.1](https://github.com/nestjs/nest/releases/tag/v12.1.0), they added Drizzle as an official package, [@nest/Drizzle](https://www.npmjs.com/package/@nestjs/drizzle). I hope they keep going in this direction.

If anyone made it this far, thanks for being here :)
