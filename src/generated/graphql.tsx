import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `AWSURL` scalar type provided by AWS AppSync, represents a valid URL string
   * (Ex: <https://www.amazon.com/>). The URL may use any scheme and may also be a
   * local URL (Ex: <http://localhost/>).  URLs without schemes like "**amazon.com**"
   * or "**www.amazon.com**" are considered invalid. URLs which contain double
   * slashes (two consecutive forward slashes) in their path are also considered invalid.
 **/
  AWSURL: any,
  /** 
 * The `AWSDate` scalar type provided by AWS AppSync, represents a valid
   * ***extended*** [ISO 8601
   * Date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) string. In other
   * words, this scalar type accepts date strings of the form `YYYY-MM-DD`.  The
   * scalar can also accept "negative years" of the form `-YYYY` which correspond to
   * years before `0000`. For example, "**-2017-05-01**" and "**-9999-01-01**" are
   * both valid dates.  This scalar type can also accept an optional [time zone
   * offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For
   * example, "**1970-01-01**", "**1970-01-01Z**", "**1970-01-01-07:00**" and
   * "**1970-01-01+05:30**" are all valid dates. The time zone offset must either be
   * `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The
   * seconds field in the timezone offset will be considered valid even though it is
   * not part of the ISO 8601 standard.
 **/
  AWSDate: any,
};









export type Allocation = {
   __typename?: 'Allocation',
  place: Place,
  date: Scalars['AWSDate'],
  people: Array<Person>,
};

export type AllocationInput = {
  place: Scalars['ID'],
  date: Scalars['AWSDate'],
  people: Array<Scalars['ID']>,
};



export type CreatePersonInput = {
  photo?: Maybe<Scalars['AWSURL']>,
  name: Scalars['String'],
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>,
};

export type CreatePlaceInput = {
  name: Scalars['String'],
  headcount: Scalars['Int'],
  personPrice: Scalars['Int'],
  leaderPrice: Scalars['Int'],
  retailPrice: Scalars['Int'],
};

export type DeletePersonInput = {
  id: Scalars['ID'],
};

export type DeletePlaceInput = {
  id: Scalars['ID'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createPerson?: Maybe<Person>,
  updatePerson?: Maybe<Person>,
  deletePerson?: Maybe<Person>,
  createPlace?: Maybe<Place>,
  updatePlace?: Maybe<Place>,
  deletePlace?: Maybe<Place>,
  setAllocation?: Maybe<Allocation>,
  createUser?: Maybe<UserOutput>,
  deleteUser?: Maybe<Scalars['Boolean']>,
};


export type MutationCreatePersonArgs = {
  input: CreatePersonInput
};


export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput
};


export type MutationDeletePersonArgs = {
  input: DeletePersonInput
};


export type MutationCreatePlaceArgs = {
  input: CreatePlaceInput
};


export type MutationUpdatePlaceArgs = {
  input: UpdatePlaceInput
};


export type MutationDeletePlaceArgs = {
  input: DeletePlaceInput
};


export type MutationSetAllocationArgs = {
  input: AllocationInput
};


export type MutationCreateUserArgs = {
  input: UserInput
};


export type MutationDeleteUserArgs = {
  username: Scalars['String']
};

export type MyAllocation = {
   __typename?: 'MyAllocation',
  date: Scalars['AWSDate'],
  people: Array<Person>,
};

export type MyPlace = {
   __typename?: 'MyPlace',
  id: Scalars['ID'],
  name: Scalars['String'],
  headcount: Scalars['Int'],
  retailPrice: Scalars['Int'],
};

export type Person = {
   __typename?: 'Person',
  id: Scalars['ID'],
  photo?: Maybe<Scalars['AWSURL']>,
  name: Scalars['String'],
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>,
};

export type PersonConnection = {
   __typename?: 'PersonConnection',
  items?: Maybe<Array<Maybe<Person>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Place = {
   __typename?: 'Place',
  id: Scalars['ID'],
  name: Scalars['String'],
  headcount: Scalars['Int'],
  personPrice: Scalars['Int'],
  leaderPrice: Scalars['Int'],
  retailPrice: Scalars['Int'],
};

export type PlaceConnection = {
   __typename?: 'PlaceConnection',
  items?: Maybe<Array<Maybe<Place>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  getPerson?: Maybe<Person>,
  listPeople?: Maybe<PersonConnection>,
  getPlace?: Maybe<Place>,
  listPlaces?: Maybe<PlaceConnection>,
  listAllocations?: Maybe<Array<Maybe<Allocation>>>,
  listMyAllocations?: Maybe<Array<Maybe<MyAllocation>>>,
  listUsers?: Maybe<Array<Maybe<User>>>,
};


export type QueryGetPersonArgs = {
  id: Scalars['ID']
};


export type QueryListPeopleArgs = {
  filter?: Maybe<TablePersonFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};


export type QueryGetPlaceArgs = {
  id: Scalars['ID']
};


export type QueryListPlacesArgs = {
  filter?: Maybe<TablePlaceFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};


export type QueryListAllocationsArgs = {
  place: Scalars['ID'],
  from: Scalars['AWSDate'],
  to: Scalars['AWSDate']
};


export type QueryListMyAllocationsArgs = {
  from: Scalars['AWSDate'],
  to: Scalars['AWSDate']
};


export type QueryListUsersArgs = {
  place: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  onCreatePerson?: Maybe<Person>,
  onUpdatePerson?: Maybe<Person>,
  onDeletePerson?: Maybe<Person>,
  onCreatePlace?: Maybe<Place>,
  onUpdatePlace?: Maybe<Place>,
  onDeletePlace?: Maybe<Place>,
};


export type SubscriptionOnCreatePersonArgs = {
  id?: Maybe<Scalars['ID']>,
  photo?: Maybe<Scalars['AWSURL']>,
  name?: Maybe<Scalars['String']>,
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>
};


export type SubscriptionOnUpdatePersonArgs = {
  id?: Maybe<Scalars['ID']>,
  photo?: Maybe<Scalars['AWSURL']>,
  name?: Maybe<Scalars['String']>,
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>
};


export type SubscriptionOnDeletePersonArgs = {
  id?: Maybe<Scalars['ID']>,
  photo?: Maybe<Scalars['AWSURL']>,
  name?: Maybe<Scalars['String']>,
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>
};


export type SubscriptionOnCreatePlaceArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  headcount?: Maybe<Scalars['Int']>,
  personPrice?: Maybe<Scalars['Int']>,
  leaderPrice?: Maybe<Scalars['Int']>
};


export type SubscriptionOnUpdatePlaceArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  headcount?: Maybe<Scalars['Int']>,
  personPrice?: Maybe<Scalars['Int']>,
  leaderPrice?: Maybe<Scalars['Int']>
};


export type SubscriptionOnDeletePlaceArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  headcount?: Maybe<Scalars['Int']>,
  personPrice?: Maybe<Scalars['Int']>,
  leaderPrice?: Maybe<Scalars['Int']>
};

export type TableBooleanFilterInput = {
  ne?: Maybe<Scalars['Boolean']>,
  eq?: Maybe<Scalars['Boolean']>,
};

export type TableFloatFilterInput = {
  ne?: Maybe<Scalars['Float']>,
  eq?: Maybe<Scalars['Float']>,
  le?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  ge?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  contains?: Maybe<Scalars['Float']>,
  notContains?: Maybe<Scalars['Float']>,
  between?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type TableIdFilterInput = {
  ne?: Maybe<Scalars['ID']>,
  eq?: Maybe<Scalars['ID']>,
  le?: Maybe<Scalars['ID']>,
  lt?: Maybe<Scalars['ID']>,
  ge?: Maybe<Scalars['ID']>,
  gt?: Maybe<Scalars['ID']>,
  contains?: Maybe<Scalars['ID']>,
  notContains?: Maybe<Scalars['ID']>,
  between?: Maybe<Array<Maybe<Scalars['ID']>>>,
  beginsWith?: Maybe<Scalars['ID']>,
};

export type TableIntFilterInput = {
  ne?: Maybe<Scalars['Int']>,
  eq?: Maybe<Scalars['Int']>,
  le?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  ge?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  contains?: Maybe<Scalars['Int']>,
  notContains?: Maybe<Scalars['Int']>,
  between?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TablePersonFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  photo?: Maybe<TableStringFilterInput>,
  name?: Maybe<TableStringFilterInput>,
  battalion?: Maybe<TableStringFilterInput>,
  department?: Maybe<TableStringFilterInput>,
};

export type TablePlaceFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  name?: Maybe<TableStringFilterInput>,
  headcount?: Maybe<TableIntFilterInput>,
  personPrice?: Maybe<TableIntFilterInput>,
  leaderPrice?: Maybe<TableIntFilterInput>,
  retailPrice?: Maybe<TableIntFilterInput>,
};

export type TableStringFilterInput = {
  ne?: Maybe<Scalars['String']>,
  eq?: Maybe<Scalars['String']>,
  le?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  ge?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  notContains?: Maybe<Scalars['String']>,
  between?: Maybe<Array<Maybe<Scalars['String']>>>,
  beginsWith?: Maybe<Scalars['String']>,
};

export type UpdatePersonInput = {
  id: Scalars['ID'],
  photo?: Maybe<Scalars['AWSURL']>,
  name?: Maybe<Scalars['String']>,
  battalion?: Maybe<Scalars['String']>,
  department?: Maybe<Scalars['String']>,
};

export type UpdatePlaceInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  headcount?: Maybe<Scalars['Int']>,
  personPrice?: Maybe<Scalars['Int']>,
  leaderPrice?: Maybe<Scalars['Int']>,
  retailPrice?: Maybe<Scalars['Int']>,
};

export type User = {
   __typename?: 'User',
  username: Scalars['String'],
  email: Scalars['String'],
  group: UserGroup,
  place?: Maybe<MyPlace>,
};

export enum UserGroup {
  Admins = 'Admins',
  Managers = 'Managers',
  Supervisors = 'Supervisors',
  Assistants = 'Assistants'
}

export type UserInput = {
  username: Scalars['ID'],
  email: Scalars['String'],
  place: Scalars['ID'],
  group: UserGroup,
};

export type UserOutput = {
   __typename?: 'UserOutput',
  user: User,
  password: Scalars['String'],
};
export type ListAllocationsQueryVariables = {
  place: Scalars['ID'],
  from: Scalars['AWSDate'],
  to: Scalars['AWSDate']
};


export type ListAllocationsQuery = (
  { __typename?: 'Query' }
  & { listAllocations: Maybe<Array<Maybe<(
    { __typename?: 'Allocation' }
    & Pick<Allocation, 'date'>
    & { people: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name' | 'department'>
    )> }
  )>>> }
);

export type SetAllocationMutationVariables = {
  input: AllocationInput
};


export type SetAllocationMutation = (
  { __typename?: 'Mutation' }
  & { setAllocation: Maybe<(
    { __typename?: 'Allocation' }
    & Pick<Allocation, 'date'>
    & { place: (
      { __typename?: 'Place' }
      & Pick<Place, 'id'>
    ) }
  )> }
);

export type ListMyAllocationsQueryVariables = {
  from: Scalars['AWSDate'],
  to: Scalars['AWSDate']
};


export type ListMyAllocationsQuery = (
  { __typename?: 'Query' }
  & { listMyAllocations: Maybe<Array<Maybe<(
    { __typename?: 'MyAllocation' }
    & Pick<MyAllocation, 'date'>
    & { people: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name' | 'department'>
    )> }
  )>>> }
);

export type ListPeopleQueryVariables = {
  filter?: Maybe<TablePersonFilterInput>
};


export type ListPeopleQuery = (
  { __typename?: 'Query' }
  & { listPeople: Maybe<(
    { __typename?: 'PersonConnection' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'photo' | 'name' | 'department'>
    )>>> }
  )> }
);

export type CreatePersonMutationVariables = {
  input: CreatePersonInput
};


export type CreatePersonMutation = (
  { __typename?: 'Mutation' }
  & { createPerson: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id'>
  )> }
);

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput
};


export type UpdatePersonMutation = (
  { __typename?: 'Mutation' }
  & { updatePerson: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id'>
  )> }
);

export type DeletePersonMutationVariables = {
  input: DeletePersonInput
};


export type DeletePersonMutation = (
  { __typename?: 'Mutation' }
  & { deletePerson: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id'>
  )> }
);

export type ListPlacesQueryVariables = {
  filter?: Maybe<TablePlaceFilterInput>
};


export type ListPlacesQuery = (
  { __typename?: 'Query' }
  & { listPlaces: Maybe<(
    { __typename?: 'PlaceConnection' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'Place' }
      & Pick<Place, 'id' | 'name' | 'headcount' | 'personPrice' | 'leaderPrice' | 'retailPrice'>
    )>>> }
  )> }
);

export type GetPlaceQueryVariables = {
  id: Scalars['ID']
};


export type GetPlaceQuery = (
  { __typename?: 'Query' }
  & { getPlace: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'name' | 'headcount' | 'personPrice' | 'leaderPrice' | 'retailPrice'>
  )> }
);

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput
};


export type CreatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { createPlace: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id'>
  )> }
);

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput
};


export type UpdatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { updatePlace: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id'>
  )> }
);

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput
};


export type DeletePlaceMutation = (
  { __typename?: 'Mutation' }
  & { deletePlace: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id'>
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'group'>
    & { place: Maybe<(
      { __typename?: 'MyPlace' }
      & Pick<MyPlace, 'name' | 'headcount' | 'retailPrice'>
    )> }
  )> }
);

export type ListUsersQueryVariables = {
  place: Scalars['ID']
};


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { listUsers: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email' | 'group'>
  )>>> }
);

export type CreateUserMutationVariables = {
  input: UserInput
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: Maybe<(
    { __typename?: 'UserOutput' }
    & Pick<UserOutput, 'password'>
  )> }
);

export type DeleteUserMutationVariables = {
  username: Scalars['String']
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export const ListAllocationsDocument = gql`
    query listAllocations($place: ID!, $from: AWSDate!, $to: AWSDate!) {
  listAllocations(place: $place, from: $from, to: $to) {
    date
    people {
      id
      name
      department
    }
  }
}
    `;
export type ListAllocationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListAllocationsQuery, ListAllocationsQueryVariables>, 'query'> & ({ variables: ListAllocationsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListAllocationsComponent = (props: ListAllocationsComponentProps) => (
      <ApolloReactComponents.Query<ListAllocationsQuery, ListAllocationsQueryVariables> query={ListAllocationsDocument} {...props} />
    );
    

    export function useListAllocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListAllocationsQuery, ListAllocationsQueryVariables>) {
      return ApolloReactHooks.useQuery<ListAllocationsQuery, ListAllocationsQueryVariables>(ListAllocationsDocument, baseOptions);
    }
      export function useListAllocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllocationsQuery, ListAllocationsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ListAllocationsQuery, ListAllocationsQueryVariables>(ListAllocationsDocument, baseOptions);
      }
      
export type ListAllocationsQueryHookResult = ReturnType<typeof useListAllocationsQuery>;
export type ListAllocationsQueryResult = ApolloReactCommon.QueryResult<ListAllocationsQuery, ListAllocationsQueryVariables>;
export const SetAllocationDocument = gql`
    mutation setAllocation($input: AllocationInput!) {
  setAllocation(input: $input) {
    place {
      id
    }
    date
  }
}
    `;
export type SetAllocationMutationFn = ApolloReactCommon.MutationFunction<SetAllocationMutation, SetAllocationMutationVariables>;
export type SetAllocationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetAllocationMutation, SetAllocationMutationVariables>, 'mutation'>;

    export const SetAllocationComponent = (props: SetAllocationComponentProps) => (
      <ApolloReactComponents.Mutation<SetAllocationMutation, SetAllocationMutationVariables> mutation={SetAllocationDocument} {...props} />
    );
    

    export function useSetAllocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetAllocationMutation, SetAllocationMutationVariables>) {
      return ApolloReactHooks.useMutation<SetAllocationMutation, SetAllocationMutationVariables>(SetAllocationDocument, baseOptions);
    }
export type SetAllocationMutationHookResult = ReturnType<typeof useSetAllocationMutation>;
export type SetAllocationMutationResult = ApolloReactCommon.MutationResult<SetAllocationMutation>;
export type SetAllocationMutationOptions = ApolloReactCommon.BaseMutationOptions<SetAllocationMutation, SetAllocationMutationVariables>;
export const ListMyAllocationsDocument = gql`
    query listMyAllocations($from: AWSDate!, $to: AWSDate!) {
  listMyAllocations(from: $from, to: $to) {
    date
    people {
      id
      name
      department
    }
  }
}
    `;
export type ListMyAllocationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>, 'query'> & ({ variables: ListMyAllocationsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListMyAllocationsComponent = (props: ListMyAllocationsComponentProps) => (
      <ApolloReactComponents.Query<ListMyAllocationsQuery, ListMyAllocationsQueryVariables> query={ListMyAllocationsDocument} {...props} />
    );
    

    export function useListMyAllocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>) {
      return ApolloReactHooks.useQuery<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>(ListMyAllocationsDocument, baseOptions);
    }
      export function useListMyAllocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>(ListMyAllocationsDocument, baseOptions);
      }
      
export type ListMyAllocationsQueryHookResult = ReturnType<typeof useListMyAllocationsQuery>;
export type ListMyAllocationsQueryResult = ApolloReactCommon.QueryResult<ListMyAllocationsQuery, ListMyAllocationsQueryVariables>;
export const ListPeopleDocument = gql`
    query listPeople($filter: TablePersonFilterInput) {
  listPeople(filter: $filter) {
    items {
      id
      photo
      name
      department
    }
  }
}
    `;
export type ListPeopleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListPeopleQuery, ListPeopleQueryVariables>, 'query'>;

    export const ListPeopleComponent = (props: ListPeopleComponentProps) => (
      <ApolloReactComponents.Query<ListPeopleQuery, ListPeopleQueryVariables> query={ListPeopleDocument} {...props} />
    );
    

    export function useListPeopleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListPeopleQuery, ListPeopleQueryVariables>) {
      return ApolloReactHooks.useQuery<ListPeopleQuery, ListPeopleQueryVariables>(ListPeopleDocument, baseOptions);
    }
      export function useListPeopleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPeopleQuery, ListPeopleQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ListPeopleQuery, ListPeopleQueryVariables>(ListPeopleDocument, baseOptions);
      }
      
export type ListPeopleQueryHookResult = ReturnType<typeof useListPeopleQuery>;
export type ListPeopleQueryResult = ApolloReactCommon.QueryResult<ListPeopleQuery, ListPeopleQueryVariables>;
export const CreatePersonDocument = gql`
    mutation createPerson($input: CreatePersonInput!) {
  createPerson(input: $input) {
    id
  }
}
    `;
export type CreatePersonMutationFn = ApolloReactCommon.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;
export type CreatePersonComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePersonMutation, CreatePersonMutationVariables>, 'mutation'>;

    export const CreatePersonComponent = (props: CreatePersonComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePersonMutation, CreatePersonMutationVariables> mutation={CreatePersonDocument} {...props} />
    );
    

    export function useCreatePersonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
      return ApolloReactHooks.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, baseOptions);
    }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = ApolloReactCommon.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation updatePerson($input: UpdatePersonInput!) {
  updatePerson(input: $input) {
    id
  }
}
    `;
export type UpdatePersonMutationFn = ApolloReactCommon.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;
export type UpdatePersonComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePersonMutation, UpdatePersonMutationVariables>, 'mutation'>;

    export const UpdatePersonComponent = (props: UpdatePersonComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePersonMutation, UpdatePersonMutationVariables> mutation={UpdatePersonDocument} {...props} />
    );
    

    export function useUpdatePersonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, baseOptions);
    }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = ApolloReactCommon.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const DeletePersonDocument = gql`
    mutation deletePerson($input: DeletePersonInput!) {
  deletePerson(input: $input) {
    id
  }
}
    `;
export type DeletePersonMutationFn = ApolloReactCommon.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;
export type DeletePersonComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePersonMutation, DeletePersonMutationVariables>, 'mutation'>;

    export const DeletePersonComponent = (props: DeletePersonComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePersonMutation, DeletePersonMutationVariables> mutation={DeletePersonDocument} {...props} />
    );
    

    export function useDeletePersonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>) {
      return ApolloReactHooks.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, baseOptions);
    }
export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = ApolloReactCommon.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePersonMutation, DeletePersonMutationVariables>;
export const ListPlacesDocument = gql`
    query listPlaces($filter: TablePlaceFilterInput) {
  listPlaces(filter: $filter) {
    items {
      id
      name
      headcount
      personPrice
      leaderPrice
      retailPrice
    }
  }
}
    `;
export type ListPlacesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListPlacesQuery, ListPlacesQueryVariables>, 'query'>;

    export const ListPlacesComponent = (props: ListPlacesComponentProps) => (
      <ApolloReactComponents.Query<ListPlacesQuery, ListPlacesQueryVariables> query={ListPlacesDocument} {...props} />
    );
    

    export function useListPlacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListPlacesQuery, ListPlacesQueryVariables>) {
      return ApolloReactHooks.useQuery<ListPlacesQuery, ListPlacesQueryVariables>(ListPlacesDocument, baseOptions);
    }
      export function useListPlacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPlacesQuery, ListPlacesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ListPlacesQuery, ListPlacesQueryVariables>(ListPlacesDocument, baseOptions);
      }
      
export type ListPlacesQueryHookResult = ReturnType<typeof useListPlacesQuery>;
export type ListPlacesQueryResult = ApolloReactCommon.QueryResult<ListPlacesQuery, ListPlacesQueryVariables>;
export const GetPlaceDocument = gql`
    query getPlace($id: ID!) {
  getPlace(id: $id) {
    id
    name
    headcount
    personPrice
    leaderPrice
    retailPrice
  }
}
    `;
export type GetPlaceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPlaceQuery, GetPlaceQueryVariables>, 'query'> & ({ variables: GetPlaceQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPlaceComponent = (props: GetPlaceComponentProps) => (
      <ApolloReactComponents.Query<GetPlaceQuery, GetPlaceQueryVariables> query={GetPlaceDocument} {...props} />
    );
    

    export function useGetPlaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
      return ApolloReactHooks.useQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, baseOptions);
    }
      export function useGetPlaceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, baseOptions);
      }
      
export type GetPlaceQueryHookResult = ReturnType<typeof useGetPlaceQuery>;
export type GetPlaceQueryResult = ApolloReactCommon.QueryResult<GetPlaceQuery, GetPlaceQueryVariables>;
export const CreatePlaceDocument = gql`
    mutation createPlace($input: CreatePlaceInput!) {
  createPlace(input: $input) {
    id
  }
}
    `;
export type CreatePlaceMutationFn = ApolloReactCommon.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;
export type CreatePlaceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePlaceMutation, CreatePlaceMutationVariables>, 'mutation'>;

    export const CreatePlaceComponent = (props: CreatePlaceComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePlaceMutation, CreatePlaceMutationVariables> mutation={CreatePlaceDocument} {...props} />
    );
    

    export function useCreatePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
      return ApolloReactHooks.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, baseOptions);
    }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = ApolloReactCommon.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const UpdatePlaceDocument = gql`
    mutation updatePlace($input: UpdatePlaceInput!) {
  updatePlace(input: $input) {
    id
  }
}
    `;
export type UpdatePlaceMutationFn = ApolloReactCommon.MutationFunction<UpdatePlaceMutation, UpdatePlaceMutationVariables>;
export type UpdatePlaceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>, 'mutation'>;

    export const UpdatePlaceComponent = (props: UpdatePlaceComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePlaceMutation, UpdatePlaceMutationVariables> mutation={UpdatePlaceDocument} {...props} />
    );
    

    export function useUpdatePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdatePlaceMutation, UpdatePlaceMutationVariables>(UpdatePlaceDocument, baseOptions);
    }
export type UpdatePlaceMutationHookResult = ReturnType<typeof useUpdatePlaceMutation>;
export type UpdatePlaceMutationResult = ApolloReactCommon.MutationResult<UpdatePlaceMutation>;
export type UpdatePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>;
export const DeletePlaceDocument = gql`
    mutation deletePlace($input: DeletePlaceInput!) {
  deletePlace(input: $input) {
    id
  }
}
    `;
export type DeletePlaceMutationFn = ApolloReactCommon.MutationFunction<DeletePlaceMutation, DeletePlaceMutationVariables>;
export type DeletePlaceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePlaceMutation, DeletePlaceMutationVariables>, 'mutation'>;

    export const DeletePlaceComponent = (props: DeletePlaceComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePlaceMutation, DeletePlaceMutationVariables> mutation={DeletePlaceDocument} {...props} />
    );
    

    export function useDeletePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePlaceMutation, DeletePlaceMutationVariables>) {
      return ApolloReactHooks.useMutation<DeletePlaceMutation, DeletePlaceMutationVariables>(DeletePlaceDocument, baseOptions);
    }
export type DeletePlaceMutationHookResult = ReturnType<typeof useDeletePlaceMutation>;
export type DeletePlaceMutationResult = ApolloReactCommon.MutationResult<DeletePlaceMutation>;
export type DeletePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePlaceMutation, DeletePlaceMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    group
    place {
      name
      headcount
      retailPrice
    }
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

    export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
      return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
    }
      export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
      
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const ListUsersDocument = gql`
    query listUsers($place: ID!) {
  listUsers(place: $place) {
    username
    email
    group
  }
}
    `;
export type ListUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListUsersQuery, ListUsersQueryVariables>, 'query'> & ({ variables: ListUsersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListUsersComponent = (props: ListUsersComponentProps) => (
      <ApolloReactComponents.Query<ListUsersQuery, ListUsersQueryVariables> query={ListUsersDocument} {...props} />
    );
    

    export function useListUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
      return ApolloReactHooks.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
    }
      export function useListUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
      }
      
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersQueryResult = ApolloReactCommon.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: UserInput!) {
  createUser(input: $input) {
    password
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    

    export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
    }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($username: String!) {
  deleteUser(username: $username)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    

    export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
    }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;