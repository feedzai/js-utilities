<div align="center">
<h1>@feedzai/js-utilities</h1>
<p>A collection of common javascript utilities for web projects</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

## The problem

I do a bunch of open source and want to make it easier to share utilities between multiple projects.

## This solution

This is a collection of javascript functions, utilities and react hooks that are available on npm.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [React Hooks](#react-hooks)
- [Utils](#utils)
- [Tests](#tests)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save-dev @feedzai/js-utilities
```

## Usage

This is a collection of functions, utilities and react hooks. You'll find all available code in `src`.

The bundle is available as:

- ES Modules
- UMD (Universal Module Definition)

To import a piece of code into your javascript project just do:

```js
import { callIfExists, throwError, getLSItem, useConstant } from "@feedzai/js-utilities";
```

## Functions

WIP

## React Hooks

WIP

## Utils

WIP

## Tests

All tests have been written using cypress.

To run tests locally:

```
# using npm
npm run test:open

# using npm (headless)
npm run test

# using yarn
yarn test:open

# using yarn (headless)
yarn test
```

## Other Solutions

If you are aware of any please [make a pull request][prs] and add it here!
Again, this is a very specific-to-me solution.

- [Lightdash](https://github.com/FelixRilling/lightdash) - A small JavaScript utility library to complement lodash.
- [You might not need lodash](https://youmightnotneed.com/lodash) - It’s a great website, well crafted, battle tested and with a very skilled and active community contributing. The goal of that project is NOT to provide drop in replacements, but to show how to achieve similar functionalities in plain Javascript, to understand how things work behind the hood.

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://joaodias.me">
        <img src="https://avatars.githubusercontent.com/u/2223881?v=4?s=100" width="100px;" alt=""/>
        <br />
        <sub><b>João Dias</b></sub>
      </a>
      <br />
      <a href="https://github.com/feedzai/js-utilities/commits?author=joaotmdias" title="Code">💻</a>
      <a href="https://github.com/feedzai/js-utilities/commits?author=joaotmdias" title="Documentation">📖</a>
      <a href="https://github.com/feedzai/js-utilities/commits?author=joaotmdias" title="Tests">⚠️</a>
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://github.com/feedzai/js-utilities/actions/workflows/publish.yml/badge.svg?branch=main
[build]: https://github.com/feedzai/js-utilities/actions/workflows/publish.yml
[coverage-badge]: https://img.shields.io/codecov/c/github/feedzai/js-utilities.svg?style=flat-square
[coverage]: https://codecov.io/github/feedzai/js-utilities
[version-badge]: https://img.shields.io/npm/v/@feedzai/js-utilities.svg?style=flat-square
[package]: https://www.npmjs.com/package/@feedzai/js-utilities
[downloads-badge]: https://img.shields.io/npm/dm/@feedzai/js-utilities.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@feedzai/js-utilities
[license-badge]: https://img.shields.io/npm/l/@feedzai/js-utilities.svg?style=flat-square
[license]: https://github.com/feedzai/js-utilities/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/feedzai/js-utilities/blob/main/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/feedzai/js-utilities?color=orange&style=flat-square
[bugs]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->
