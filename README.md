Stylish
===============================

Modular and minimalist SCSS toolkit vanilla CSS development.

### Usage

```sass
@use './path/to/node_modules/stylish' as util;
```

or

```sass
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
