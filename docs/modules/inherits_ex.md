[inherits-ex](../README.md) / [Exports](../modules.md) / inherits-ex

# Module: inherits-ex

## Table of contents

### Namespaces

- [export&#x3D;](inherits_ex.export_.md)

### Functions

- [export&#x3D;](inherits_ex.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aDefaultRequire`): `Function`

The enhanced dynamical `inherits` implementation.

+ load the class via dynamical name.
* requireClass *(Function)*:
* scope *(Object)*: collects the register classes.
  * the inherits ctor will be added into the scope automatically.

The default requireClass is `getClassByName`.

**`Example`**

```ts
var InheritsEx = require('inherits-ex/lib/inherits-ex')
  var defaultRequire = InheritsEx.requireClass;
  // You should return the proper class(ctor) here.
  InheritsEx.requireClass = function(className, scope){return defaultRequire.apply(null, arguments)};
  var inherits = InheritsEx()

const requireClass = (aClassName, aScope) => getClassViaName(aClassName)
const InheritsEx = require('inherits-ex/lib/inherits-ex')
const inherits   = InheritsEx(requireClass)

class RootClass {}
class Parent {}
InheritsEx.setScope([RootClass, Parent])

class MyClass3 {}
inherits(MyClass3, RootClass)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aDefaultRequire` | `Function` | custom the requireClass function. |

#### Returns

`Function`

the `inherits` function

#### Defined in

[src/inherits-ex.js:51](https://github.com/snowyu/inherits-ex.js/blob/2bbec9d/src/inherits-ex.js#L51)
