[NumberKit](../README.md) / core

# Module: core

## Functions

### add

▸ **add**(`augend`, `addend`): `number`

Adds two numbers.

**`Throws`**

If either `augend` or `addend` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `augend` | `number` | The first number to be added. |
| `addend` | `number` | The second number to be added. |

#### Returns

`number`

The sum of the two numbers.

___

### addAll

▸ **addAll**(`numbers`): `number`

Adds all numbers in an array together.

**`Throws`**

If any element in the `numbers` array is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be added. |

#### Returns

`number`

The sum of all numbers in the array, or NaN if the array is empty.

___

### divide

▸ **divide**(`dividend`, `divisor`): `number`

Divides one number by another.

**`Throws`**

If either `dividend` or `divisor` is not a number.

**`Throws`**

If `divisor` is 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dividend` | `number` | The number to be divided. |
| `divisor` | `number` | The number to divide by. |

#### Returns

`number`

The result of dividing `dividend` by `divisor`.

___

### multiply

▸ **multiply**(`multiplier`, `multiplicand`): `number`

Multiplies two numbers.

**`Throws`**

If either `multiplier` or `multiplicand` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multiplier` | `number` | The first number to be multiplied. |
| `multiplicand` | `number` | The second number to be multiplied. |

#### Returns

`number`

The product of the two numbers.

___

### multiplyAll

▸ **multiplyAll**(`numbers`): `number`

Multiplies all numbers in an array together.

**`Throws`**

If any element in the `numbers` array is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be multiplied. |

#### Returns

`number`

The product of all numbers in the array, or NaN if the array is empty.

___

### subtract

▸ **subtract**(`minuend`, `subtrahend`): `number`

Subtracts one number from another.

**`Throws`**

If either `minuend` or `subtrahend` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minuend` | `number` | The number from which `subtrahend` will be subtracted. |
| `subtrahend` | `number` | The number to be subtracted from `minuend`. |

#### Returns

`number`

The difference between the two numbers.
