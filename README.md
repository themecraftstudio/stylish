Stylish
===============================

Modular and minimalist SCSS toolkit for vanilla CSS development.

## Usage

Configure your package manager to [use GitHub's npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package), then `@use` the module as you normally would:

```scss
@use './path/to/node_modules/stylish' as util;
```

or

```scss
@use './path/to/node_modules/stylish/reset';
@use './path/to/node_modules/stylish/device';
```

### Reset
TODO document mixins, functions, variables

### Device
TODO document mixins, functions, variables

### Debug

All debug mixins are gated by the `isWip` function that must be defined through the Javascript API. For instance:

```javascript
const sass = require('sass');

sass.compile('front.scss', {
    functions: {
        isWip: () => {
            return process.env.WIP ? 
                dartSass.types.Boolean.TRUE : 
                dartSass.types.Boolean.FALSE
            ;
        }
    }
});
```

## Design philosophy

- minimalistic: does not define any visual or typographic style
- modularity: authors shall be allowed to include only the rules they need;
- mixins *do not* define any classes;
- semantic classes must be explicitly included via *-classes mixins.



## Related Work

- [cmalven/sass-toolkit](https://github.com/cmalven/sass-toolkit)
