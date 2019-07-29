import filter from 'ramda/es/filter'
import propSatisfies from 'ramda/es/propSatisfies'
import contains from 'ramda/es/contains'

export const searchBy = <T>(prop: string) => (value: string) =>
  filter<T>(propSatisfies<string, T>(contains(value), prop))
