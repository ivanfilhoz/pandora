import compose from 'ramda/es/compose'
import contains from 'ramda/es/contains'
import filter from 'ramda/es/filter'
import propSatisfies from 'ramda/es/propSatisfies'
import toLower from 'ramda/es/toLower'

const lowerContains = (value: string) =>
  compose(
    contains(value),
    toLower
  )

export const searchBy = <T>(prop: string) => (value: string) =>
  filter<T>(propSatisfies<string, T>(lowerContains(toLower(value)), prop))
