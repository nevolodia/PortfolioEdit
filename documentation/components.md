# Component documentation

The project includes various components that are specifically designed for the portfolio.
They are located in the `src/components` directory and are prefixed with `Pe` (PortfolioEdit).

Components generally can be divided into 2 categories:

- **Independent components** - components that are standalone and are be used on their own.
Examples are `PeText`, `PeImage`, `PePageMeta`, etc.
- **Dependent components** - components that work only with other components, but not on their own.
Examples are `PeGallery`, `PeBlock`, `PeInline`, etc.


## Table of contents

#### Independent components

- [PeText](#petext)
- [PeTitle](#petitle)
- [PeImage](#peimage)
- [PeVideo](#pevideo)
- [PeLogo](#pelogo)
- [PeCode](#pecode)
- [PeCodeWarp](#pecodewarp)
- [PeSpacer](#pespacer)
- [PeVerticalCard](#peverticalcard)
- [PeHorizontalCard](#pehorizontalcard)
- [PePageMeta](#pepagemeta)

#### Dependent components

- [PeLink](#pelink)
- [PeWarp](#pewarp)
- [PeBlock](#peblock)
- [PeInline](#peinline)
- [PeGallery](#pegallery)


## Independent components

### PeText

The `PeText` component displays text content.

```tsx
<PeText weight="bold">
	Hello, World!
</PeText>
```

#### Props

- `weight` - text weight (`bold`, `normal`, `light`).

### PeTitle

The `PeTitle` component displays a title.

```tsx
<PeTitle size="small" weight="bold">
	404 - Page not found!
</PeTitle>
```

#### Props

- `size` - title size (`normal`, `small`, `smaller`).
- `weight` - title weight (`bold`, `normal`, `light`).