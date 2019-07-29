import filter from 'ramda/es/filter'
import propSatisfies from 'ramda/es/propSatisfies'
import contains from 'ramda/es/contains'
import toLower from 'ramda/es/toLower'
import compose from 'ramda/es/compose'

const lowerContains = (value: string) =>
  compose(
    contains(value),
    toLower
  )

export const searchBy = <T>(prop: string) => (value: string) =>
  filter<T>(propSatisfies<string, T>(lowerContains(value), prop))
