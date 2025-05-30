# Changelog

All notable changes to this project will be documented in this file.

## [4.0.0](https://github.com/asdf-vm/actions/compare/v3.0.2...v4.0.0) (2025-03-16)


### ⚠ BREAKING CHANGES

* support asdf >= v0.16.0 ([#590](https://github.com/asdf-vm/actions/issues/590))

### Features

* support asdf &gt;= v0.16.0 ([#590](https://github.com/asdf-vm/actions/issues/590)) ([1117842](https://github.com/asdf-vm/actions/commit/1117842ea70e2711a0072e3a71265cbfe2c830be))


### Patches

* remove origin argument from git checkout command ([#591](https://github.com/asdf-vm/actions/issues/591)) ([179e953](https://github.com/asdf-vm/actions/commit/179e9530fcd91100e4621bf7e563e7daa8398c52))


### Documentation

* correct some grammar ([#574](https://github.com/asdf-vm/actions/issues/574)) ([6278efe](https://github.com/asdf-vm/actions/commit/6278efebb38ae025cc91dd008910f549e775a8c8))
* list all options for each Action ([#588](https://github.com/asdf-vm/actions/issues/588)) ([9cd779f](https://github.com/asdf-vm/actions/commit/9cd779f40fe38688dd19505ccbc4eaaf018b44e7))
* update GH Action versions in docs ([#573](https://github.com/asdf-vm/actions/issues/573)) ([212a976](https://github.com/asdf-vm/actions/commit/212a976c0b59e3c97158f181fccd006f3c4388e7))
* use full SHA refs as short are not supported ([#575](https://github.com/asdf-vm/actions/issues/575)) ([0460184](https://github.com/asdf-vm/actions/commit/0460184eb9fc6ee669a293c1e5f3c4fb5f52d55c))

## [3.0.2](https://github.com/asdf-vm/actions/compare/v3.0.1...v3.0.2) (2023-10-12)


### Patches

* update lockfile ([c01a934](https://github.com/asdf-vm/actions/commit/c01a9347ea98eeb94ee8901cc578bb8afc76b70e))

## [3.0.1](https://github.com/asdf-vm/actions/compare/v3.0.0...v3.0.1) (2023-10-12)


### Patches

* set same pnpm & node versions in pkg.json as in tool-versions ([e4a312a](https://github.com/asdf-vm/actions/commit/e4a312a59f7c4c5ed731f96d3fa89e9d8608e55c))

## [3.0.0](https://github.com/asdf-vm/actions/compare/v2.2.0...v3.0.0) (2023-09-17)


### ⚠ BREAKING CHANGES

* bump action to node20 ([#563](https://github.com/asdf-vm/actions/issues/563))

### Features

* bump action to node20 ([#563](https://github.com/asdf-vm/actions/issues/563)) ([a2d44a7](https://github.com/asdf-vm/actions/commit/a2d44a72f9174b83e100b92d27851c62696fa87c))
* bump dependencies & to `typescript@5`. Use `pnpm` ([#557](https://github.com/asdf-vm/actions/issues/557)) ([8d23981](https://github.com/asdf-vm/actions/commit/8d2398103bfd46c1eea5a588e1e90132d7c0e76c))

## [2.2.0](https://github.com/asdf-vm/actions/compare/v2.1.0...v2.2.0) (2023-04-02)


### Features

* update asdf repo if it exists ([#539](https://github.com/asdf-vm/actions/issues/539)) ([4907cdf](https://github.com/asdf-vm/actions/commit/4907cdfe90a7aa2c98ef4bc8d5415ef8a38bf079))

## [2.1.0](https://github.com/asdf-vm/actions/compare/v2.0.1...v2.1.0) (2023-03-15)


### Features

* skip_install option to skip asdf install on setup ([#536](https://github.com/asdf-vm/actions/issues/536)) ([c926367](https://github.com/asdf-vm/actions/commit/c926367c74d7ac64e42946f54849dfd9165e2b6f))

## [2.0.1](https://github.com/asdf-vm/actions/compare/v2.0.0...v2.0.1) (2023-03-15)


### Bug Fixes

* bump `@actions/*` SDKs & rebuild plugins ([#535](https://github.com/asdf-vm/actions/issues/535)) ([f2e8edb](https://github.com/asdf-vm/actions/commit/f2e8edb0852a0cc7e0de8e7f30c2b660be13e4e9))
* bump esbuild & rebuild plugins ([#532](https://github.com/asdf-vm/actions/issues/532)) ([1c86dd7](https://github.com/asdf-vm/actions/commit/1c86dd77827c32947af570f209c90092ddfcc873))

## [2.0.0](https://github.com/asdf-vm/actions/compare/v1.1.0...v2.0.0) (2023-03-09)

### ⚠ BREAKING CHANGES

- Update actions to use node16
  ([#488](https://github.com/asdf-vm/actions/issues/488))
  ([6844d09](https://github.com/asdf-vm/actions/commit/6844d09b13209e7d2ce3b63d2b089a2acef581ec))
  - released by
    ([2f61da5](https://github.com/asdf-vm/actions/commit/2f61da5af7da0a1216219da51d0718c25e159a77))

### Bug Fixes

- update codeql for dependabot compat
  ([3f6d713](https://github.com/asdf-vm/actions/commit/3f6d71382fe4c7807936733d72aef7ee6e56e7a9))
- use correct trigger type
  ([d464031](https://github.com/asdf-vm/actions/commit/d4640312f060abdd98823bf6bd9a2758851133c2))

## [1.1.0] - 2020-12-22

### Added

- Add the `github_token` input and set by default a token with only the
  necessary and sufficient privileges available only to the running job. In
  other words, users do not need to set this themselves except in exceptional
  cases. It's automatically exported in the runners as `GITHUB_API_TOKEN`.

## [1.0.1] - 2020-10-10

### Changed

- Port entire action to TypeScript from a runner plugin so it's easier to
  collaborate and accept contributions

## [1.0.0] - 2020-05-16

- Initial version

[unreleased]: https://github.com//asdf-vm/actions/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/asdf-vm/actions/compare/v1.0.0...v1.1.0
[1.0.1]: https://github.com/asdf-vm/actions/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/asdf-vm/actions/releases/tag/v1.0.0
