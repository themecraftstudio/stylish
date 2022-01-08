Stylish
===========================

Modular and minimalist SCSS toolkit empowering vanilla CSS development.

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

You'll likely want to include classes and rules defined by this module in your above-the-fold stylesheets. 


### Colors

Define your color palette as variables in a module:
```scss
// ui/_colors.scss
$red: #d6001c;
$brown: #3a2c24;
```
Then pass them to `stylish/colors` as such:
```scss
// main.scss
@use 'ui/colors' as colors;
@use 'sass:meta';
@use './path/to/node_modules/stylish' as color-helper with (
  $colors: meta.module-variables('colors'),
);

@include color-helper.classes;
@include color-helper.rules;
```

The `classes` mixin generates color classes using the pattern `color-<name>`, 
whereas the `rules` mixin adds CSS custom properties named `--color-<name>` to the document element (`html`).
This allows you to override these custom properties through the higher specificity `:root` pseudo-class.

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
