[inherits-ex](../README.md) / [Exports](../modules.md) / createObjectWith

# Module: createObjectWith

## Table of contents

### Functions

- [export&#x3D;](createObjectWith.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aClass`, `aArguments`): `any`

Creates a new instance of the given class using the specified arguments.

**`Example`**

```ts
// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create a new instance of the Person class
const john = createObjectWith(Person, ['John', 30]);
console.log(john); // Output: Person { name: 'John', age: 30 }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aClass` | `Function` | The class to create an instance of. |
| `aArguments` | `any`[] | Arguments to pass to the class constructor. |

#### Returns

`any`

A new instance of the class.

#### Defined in

[src/createObjectWith.js:26](https://github.com/snowyu/inherits-ex.js/blob/2bbec9d/src/createObjectWith.js#L26)
