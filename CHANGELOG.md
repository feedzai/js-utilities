# [2.0.0](https://github.com/feedzai/js-utilities/compare/v1.6.0...v2.0.0) (2025-06-03)


### Bug Fixes

* added peerDependenciesMeta instead of optionalDependencies ([6715a63](https://github.com/feedzai/js-utilities/commit/6715a638cc278a49f7f8cb357be20859c5483c18))


### Features

* add optional dependencies for react ([88cce74](https://github.com/feedzai/js-utilities/commit/88cce7456a3eb3e4642da8cf99ee815398c23165))
* **formatDate:** adds new date helper function ([26d3d34](https://github.com/feedzai/js-utilities/commit/26d3d349288ebaca81311c4a3bb53dbe15bd13e6))
* **hooks:** refactor useAutoId for better SSR and type safety ([4a99fd5](https://github.com/feedzai/js-utilities/commit/4a99fd50e92f390a9edea83549c3e0f0a7c64fd5))


### BREAKING CHANGES

* **hooks:** useAutoId now always returns a string instead of string | undefined

# [1.6.0](https://github.com/feedzai/js-utilities/compare/v1.5.0...v1.6.0) (2024-10-25)


### Features

* **clone-valid-element:** added tests and improved jsdocs ([a1dcb82](https://github.com/feedzai/js-utilities/commit/a1dcb8278d532ee9ea122c0962629610b8db8edc))
* **cookies:** added tests and improved jsdoc ([70fde77](https://github.com/feedzai/js-utilities/commit/70fde77e1c6ed887d4cebba6fb5a71f0404193eb))
* **useControlledState:** added tests and improved jsdoc ([e0919d2](https://github.com/feedzai/js-utilities/commit/e0919d254a204b404369f0f9121dc58845d05f29))
* **useEnsuredForwardedRef:** added tests and improved jsdoc and docs ([1dc889a](https://github.com/feedzai/js-utilities/commit/1dc889a5f8673926685047c3bee8afabfa2e644d))
* **usePageVisibility:** added tests ([0d85fcc](https://github.com/feedzai/js-utilities/commit/0d85fcc388931583513304200862ec59f155a2cd))
* **usePermission:** added tests ([ec60743](https://github.com/feedzai/js-utilities/commit/ec60743905fc91c77d7d8bc208b01ce9d03026dd))

# [1.5.0](https://github.com/feedzai/js-utilities/compare/v1.4.2...v1.5.0) (2024-07-23)


### Bug Fixes

* **at:** improved types ([0ef9282](https://github.com/feedzai/js-utilities/commit/0ef92820632af28f81ce3fcdfffdbc0ee24eb604))
* **get:** improved types ([f2af975](https://github.com/feedzai/js-utilities/commit/f2af97560cb74f9a214bac1bda359a5004025147))
* **getValue:** improved types ([dc12a95](https://github.com/feedzai/js-utilities/commit/dc12a95e4eea1eacf92b78e404edf28c59c840cb))


### Features

* **useIntersection:** adds new hook ([b7b8a32](https://github.com/feedzai/js-utilities/commit/b7b8a32162f5b1877f4d9385f5ed50d07ec63745))

## [1.4.2](https://github.com/feedzai/js-utilities/compare/v1.4.1...v1.4.2) (2024-07-08)


### Bug Fixes

* **useCustomEventListener:** changed import path from functions to hooks ([fc216cb](https://github.com/feedzai/js-utilities/commit/fc216cb1bbdaaba9c4e9802a1934acd5865a164e))

## [1.4.1](https://github.com/feedzai/js-utilities/compare/v1.4.0...v1.4.1) (2024-07-08)


### Bug Fixes

* **package.json:** added typesVersions entry ([8ff1649](https://github.com/feedzai/js-utilities/commit/8ff164963c9d3acaf830fe36d39c10fcdfad52ad))

# [1.4.0](https://github.com/feedzai/js-utilities/compare/v1.3.0...v1.4.0) (2024-07-08)


### Features

* **useAutoId:** Add support for react 18 useId hook ([c15a2ba](https://github.com/feedzai/js-utilities/commit/c15a2ba6fa3b863776e7b8ac7c9c959bf05e1082))

# [1.3.0](https://github.com/feedzai/js-utilities/compare/v1.2.1...v1.3.0) (2024-07-08)


### Bug Fixes

* **package.json:** wrong main, module and types folders ([4f23207](https://github.com/feedzai/js-utilities/commit/4f23207b68462cfb6de00c2bb5ccf17d70f17e3b))


### Features

* **bundle:** split between pure javascript and react modules ([48c9778](https://github.com/feedzai/js-utilities/commit/48c9778a429c806ba542ed429d8103e3360ae403))

## [1.2.1](https://github.com/feedzai/js-utilities/compare/v1.2.0...v1.2.1) (2024-07-05)


### Bug Fixes

* **package.json:** fixed paths on main, module and types ([2c0db7a](https://github.com/feedzai/js-utilities/commit/2c0db7a6259aa459ba268a9bec1a88981de754ab))

# [1.2.0](https://github.com/feedzai/js-utilities/compare/v1.1.0...v1.2.0) (2024-07-05)


### Features

* improved types on lodash helpers ([534a577](https://github.com/feedzai/js-utilities/commit/534a577cfd5a33afc14ab3bb603ecd4ceac272a5))
* **vite:** changed config to support preserving modules ([a753eee](https://github.com/feedzai/js-utilities/commit/a753eee4cdc33181bee26db4b6f56709de5f67b3))

# [1.1.0](https://github.com/feedzai/js-utilities/compare/v1.0.1...v1.1.0) (2024-03-18)


### Features

* **hooks:** adds useAutoId hook ([bdc9f17](https://github.com/feedzai/js-utilities/commit/bdc9f171b617043080de613a6e868ac9b0fd9ffc))
* **hooks:** adds useSafeLayoutEffect hook ([ceb9093](https://github.com/feedzai/js-utilities/commit/ceb9093ad677cee83919dae9b30c42b8546a4048))

## [1.0.1](https://github.com/feedzai/js-utilities/compare/v1.0.0...v1.0.1) (2024-03-18)


### Bug Fixes

* **package:** fixed repository url protocol ([1d5eda2](https://github.com/feedzai/js-utilities/commit/1d5eda20b5951d3b9fc57b6830bbaa9a1f596ab3))

# 1.0.0 (2024-03-18)


### Features

* added src files ([a9e1126](https://github.com/feedzai/js-utilities/commit/a9e1126ff2380b7d8e3ffaabe205e91d0906b38d))
* setup cypress ([78be290](https://github.com/feedzai/js-utilities/commit/78be290c5cc690aa301a03b124b1d12ad635fcf5))
* setup project ([cf22358](https://github.com/feedzai/js-utilities/commit/cf22358fd9939de76dd8dfccfae822d51861652e))
