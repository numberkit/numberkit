export enum NKError {
  NAN_VALUE = "The value must be a number",
  BOTH_PARAMS_NAN_VALUES = "Both {value1} and {value2} must be numbers",
  ARRAY_CONTAINS_NAN_VALUES = "The array must contain only numbers",
  ARRAY_CONTAINS_ZERO_VALUES = "The array must not contain any zero values",
  ARRAY_LENGTH_LESS_THAN_TWO = "The array must contain at least two numbers",
  ZERO_DIVISOR = "The divisor cannot be zero",
}
