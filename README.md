<h1 align="center">
  <img alt="camomile" title="Camomile" height="120" src="https://raw.githubusercontent.com/camomilejs/brand/main/logotype.png">
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/camomile"><img alt="npm" src="https://img.shields.io/npm/v/camomile?style=for-the-badge"></a>
</p>

> **WARNING:** This project is WIP and under no circumstances production-ready.

**Camomile** is a toolkit for automating usual tiresome project tasks:
building, linting, testing, and packaging.

Think _Gulp_ or _Make_, but more compact, more customizable, yet less annoying
and easy-to-use.

## Why?

To be honest, I just find it annoying, that tools like _Gulp_ take loads of
space inside my `node_modules`, tools like _Make_ aren't JS-friendly, and tools
like _Rollup_ or _Webpack_ weren't built for something that isn't JS. When one
tries to build something that isn't a web application (like a CLI, static site
or a simple script), it's hard to find a lightweight yet robust and modular
tool. _Camomile_ is the solution to all the stress and headaches one gets when
developing something simple for modern web 🍵

## Ambitions

_Camomile_ is not a ready project, but rather a list of ambitions. Here is a
list of features we want _Camomile_ to have, in comparison to other similar
tools:

- [ ] like _Make_, _Camomile_ is easy yet configurable. Each task is a mere JS
      function, that can do anything
- [ ] unlike most JS build tools, _Camomile_ is compact. _Broccoli_ installs
      255 extra packages, _Camomile_ will aim to install < 10
- [ ] like _Ninja_, _Camomile_ is effective and doesn't do unneeded work.
      When a source file didn't change, it won't be compiled
- [ ] unlike _Gulp_, we will always try to ship the latest dependencies, so that
      you would never get red text inside `npm audit`
- [ ] like _Taskr_, we will aim to provide long-term support for older Node.js
      versions. Starting with Node.js 12, every LTS version will get all
      security updates. Yes, beyond after end-of-life
- [ ] like _Rome_, TypeScript is the language of _Camomile_. With strong typing,
      we try to eliminate silly bugs
- [ ] like _Rollup_, _Camomile_ is next-generation. It is aimed at ESM codebases
      and favors ESM output. The configuration is ESM too!
- [ ] like _Snowpack_, _Camomile_ is fast. The defined tasks run in parallel,
      and we're ready to write native code to speed up the slow chunks

## License

[BSD-3-Clause](https://spdx.org/licenses/BSD-3-Clause.html) © 2021, Nikita Karamov and other contributors
