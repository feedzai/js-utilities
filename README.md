<div align="center">
<img src="./docs/static/img/logo.svg" width="64" height="64" alt="">

<h1>@feedzai/js-utilities</h1>
<p>A collection of common javascript utilities for web projects</p>
<br />

[**Read The Docs**](https://feedzai.github.io/js-utilities/)

</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![GNU AGPL License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

## Intro

In this vast landscape of JavaScript and TypeScript development, having a reliable set of tools at your disposal when building web projects can make all the difference. `@feedzai/js-utilities` is a comprehensive collection of JavaScript helpers, functions and custom React hooks designed to streamline projects with ease and efficiency.

With this package, developers gain access to a treasure trove of utilities crafted to simplify common tasks encountered in JS/TS projects. From handy helpers to custom React hooks, this library empowers developers to write cleaner, more concise code without sacrificing functionality.

Each function and hook is [tested](https://github.com/feedzai/js-utilities/tree/main/cypress/test) to ensure functionality and effectiveness, whilst giving developers the confidence to integrate them seamlessly into their projects.

It also comes with comprehensive documentation, making it a breeze to navigate and utilize its features effectively.

The package is available in both UMD and ES Modules formats so, whether you're working in a traditional environment or embracing the latest ES Modules, we have you covered.

For JavaScript and TypeScript developers seeking a lightweight but robust toolkit that balances simplicity with utility, `@feedzai/js-utilities` might jus be the answer!

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Intro](#intro)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [DOM](#dom)
  - [Random](#random)
  - [Arrays](#arrays)
  - [Browsers](#browsers)
  - [Curry](#curry)
  - [Dates](#dates)
  - [Events](#events)
  - [Internationalization](#internationalization)
  - [Numbers](#numbers)
  - [Objects](#objects)
  - [String](#string)
  - [Typed](#typed)
  - [Utilities](#utilities)
- [React Hooks](#react-hooks)
- [Tests](#tests)
- [Other solutions available](#other-solutions-available)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies` or `devDependencies`:

```sh
## using npm
npm install --save-dev @feedzai/js-utilities

## using yarn
yarn add --dev @feedzai/js-utilities

## using pnpm
pnpm add -D @feedzai/js-utilities
```

## Usage

This is a collection of functions, utilities and react hooks. You'll find all available code in `src`.

The bundle is available as:

- ES Modules
- UMD (Universal Module Definition)

To import a piece of code into your javascript project just do:

```js
// Just one function
import { throwError } from "@feedzai/js-utilities";

// Multiple functions
import { callIfExists, throwError, getLSItem, useConstant } from "@feedzai/js-utilities";

// Alias the whole object
import * as JS_UTILS from "@feedzai/js-utilities";
```

## Functions

### DOM

| Name                | Source                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| classNames          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/DOM/class-names.ts)           |
| cloneValidElement   | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/DOM/clone-valid-element.ts)   |
| queueMicrotask      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/DOM/queue-microtask.ts)       |
| toggleDataAttribute | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/DOM/toggle-data-attribute.ts) |
| wait                | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/DOM/wait.ts)                  |

### Random

| Name   | Source                                                                                     |
| ------ | ------------------------------------------------------------------------------------------ |
| draw   | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/random/draw.ts)   |
| random | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/random/random.ts) |

### Arrays

| Name        | Source                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------- |
| arrayMove   | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/array-move.ts)   |
| chunk       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/chunk.ts)        |
| findIndex   | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/find-index.ts)   |
| find        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/find.ts)         |
| flatMap     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/flat-map.ts)     |
| flatten     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/flatten.ts)      |
| groupBy     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/group-by.ts)     |
| inRange     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/in-range.ts)     |
| includes    | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/includes.ts)     |
| merge       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/merge.ts)        |
| removeIndex | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/remove-index.ts) |
| removeItem  | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/remove-item.ts)  |
| uniqBy      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/uniq-by.ts)      |
| uniq        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/array/uniq.ts)         |

### Browsers

| Name      | Source                                                                                                |
| --------- | ----------------------------------------------------------------------------------------------------- |
| isBrowser | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/browers/is-browser.ts)       |
| DEV       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/constants/is-development.ts) |

### Curry

| Name     | Source                                                                                      |
| -------- | ------------------------------------------------------------------------------------------- |
| debounce | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/curry/debounce.ts) |
| memo     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/curry/memo.ts)     |
| throttle | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/curry/throttle.ts) |

### Dates

| Name               | Source                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| getBrowserTimezone | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/dates/get-browser-timezone.ts) |

### Events

| Name                   | Source                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| on                     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/events/on.ts)                                      |
| off                    | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/events/off.ts)                                     |
| emitCustomEvent        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/events/custom-events/emit-custom-event.ts)         |
| useCustomEventListener | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/events/custom-events/use-custom-event-listener.ts) |

### Internationalization

| Name             | Source                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| getBrowserLocale | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/i18n/get-browser-locale.ts) |

### Numbers

| Name          | Source                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------- |
| formatNumber  | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/number/format-number.ts)  |
| round         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/number/round.ts)          |
| shortenNumber | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/number/shorten-number.ts) |
| toInt         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/number/to-int.ts)         |

### Objects

| Name     | Source                                                                                        |
| -------- | --------------------------------------------------------------------------------------------- |
| at       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/at.ts)        |
| clone    | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/clone.ts)     |
| getValue | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/get-value.ts) |
| get      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/get.ts)       |
| has      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/has.ts)       |
| isEqual  | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/is-equal.ts)  |
| omit     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/omit.ts)      |
| pick     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/pick.ts)      |
| set      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/object/set.ts)       |

### String

| Name               | Source                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| camelCase          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/camel-case.ts)           |
| capitalize         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/capitalize.ts)           |
| escapeRegExp       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/escape-reg-exp.ts)       |
| kebabCase          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/kebab-case.ts)           |
| makeId             | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/make-id.ts)              |
| pascalCase         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/pascal-case.ts)          |
| readableStringList | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/readable-string-list.ts) |
| stripUnit          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/strip-unit.ts)           |
| template           | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/template.ts)             |
| titleCase          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/title.ts)                |
| trim               | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/string/trim.ts)                 |

### Typed

| Name             | Source                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| boolOrBoolString | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/bool-or-bool-string.ts) |
| isArray          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-array.ts)            |
| isBlank          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-blank.ts)            |
| isBoolean        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-boolean.ts)          |
| isDate           | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-date.ts)             |
| isElement        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-element.ts)          |
| isEmpty          | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-empty.ts)            |
| isFunction       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-function.ts)         |
| isNil            | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-nil.ts)              |
| isNull           | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-null.ts)             |
| isNumber         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-number.ts)           |
| isObject         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-object.ts)           |
| isPlainObject    | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-plain-object.ts)     |
| isPrimitive      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-primitive.ts)        |
| isPromise        | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-promise.ts)          |
| isString         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-string.ts)           |
| isUndefined      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/typed/is-undefined.ts)        |

### Utilities

| Name               | Source                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| callIfExists       | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/utilities/call-if-exists.ts)    |
| emptyFunction      | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/utilities/empty-function.ts)    |
| makeCancelable     | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/utilities/make-cancelable.ts)   |
| throwError         | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/utilities/throw-error.ts)       |
| HTTP StatusCodes   | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/constants/http-status-codes.ts) |
| Keyboard Key Codes | [source](https://github.com/feedzai/js-utilities/blob/main/src/functions/constants/key-codes.ts)         |

## React Hooks

| Name                | Source                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| useContainerQuery   | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-container-query)       |
| useControlledState  | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-controlled-state)      |
| useNetworkState     | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-network-state)         |
| usePageVisibility   | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-page-visibility)       |
| usePermission       | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-permission)            |
| useAutoId           | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-auto-id.ts)            |
| useClickOutside     | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-click-outside.ts)      |
| useConstant         | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-constant.ts)           |
| useCopyToClipboard  | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-copy-to-clipboard.ts)  |
| useEffectOnce       | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-effect-once.ts)        |
| useLifecycle        | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-lifecycle.ts)          |
| useLiveRef          | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-life-ref.ts)           |
| useMergeRefs        | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-merge-refs.ts)         |
| useMount            | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-mount.ts)              |
| useMountedState     | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-mounted-state.ts)      |
| usePrevious         | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-previous.ts)           |
| useSafeLayoutEffect | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-safe-layout-effect.ts) |
| useScript           | [source](https://github.com/feedzai/js-utilities/tree/main/src/hooks/use-script.ts)             |

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

## Other solutions available

If you are aware of any, please [make a pull request][prs] and add it here!

- [Lightdash](https://github.com/FelixRilling/lightdash) - A small JavaScript utility library to complement lodash.
- [Radash](https://radash-docs.vercel.app/docs/getting-started) - A drop-in replacement for lodash, also written in ES Modules.
- [You might not need lodash](https://youmightnotneed.com/lodash) - It’s a great website, well crafted, battle tested and with a very skilled and active community contributing. The goal of that project is NOT to provide drop in replacements, but to show how to achieve similar functionalities in plain Javascript, to understand how things work behind the hood.

## Issues

Looking to contribute? Look for the [Good First Issue][good-first-issue] label.
You also need to be a Feedzai-aproved contributor to contribute directly to the repo.
Otherwise, you always fork the repo and open a merge-request.

[**See Issues**][issues]

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
      <a href="https://github.com/joaotmdias">
        <img src="https://avatars.githubusercontent.com/u/2223881?v=4?s=100" width="80" height="80" loading="lazy" alt=""/>
        <br />
        <sub><b>João Dias</b></sub>
      </a>
      <br />
      <br />
      <a href="https://github.com/feedzai/js-utilities/commits?author=joaotmdias" title="Code">💻</a>
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

[GNU Affero General Public License v3.0](https://github.com/feedzai/js-utilities/blob/main/LICENSE)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://github.com/feedzai/js-utilities/actions/workflows/main.yml/badge.svg?branch=main
[build]: https://github.com/feedzai/js-utilities/actions/workflows/main.yml
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
[issues]: https://github.com/feedzai/js-utilities/issues
[bugs]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/feedzai/js-utilities/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->
