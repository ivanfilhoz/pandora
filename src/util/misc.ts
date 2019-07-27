export const noop = () => {}

export const numbers = (length: number) =>
  Array.apply(null, { length }).map(Number.call, Number) as number[]
