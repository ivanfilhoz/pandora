import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSURL` scalar type provided by AWS AppSync, represents a valid URL string
   * (Ex: <https://www.amazon.com/>). The URL may use any scheme and may also be a
   * local URL (Ex: <http://localhost/>).  URLs without schemes like "**amazon.com**"
   * or "**www.amazon.com**" are considered invalid. URLs which contain double
   * slashes (two consecutive forward slashes) in their path are also considered invalid.
   */
  AWSURL: any;
};

export type CreatePersonInput = {
  photo?: Maybe<Scalars["AWSURL"]>;
  name: Scalars["String"];
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type CreatePlaceInput = {
  name: Scalars["String"];
  headcount: Scalars["Int"];
  personPrice: Scalars["Int"];
  leaderPrice: Scalars["Int"];
  retailPrice: Scalars["Int"];
};

export type DeletePersonInput = {
  id: Scalars["ID"];
};

export type DeletePlaceInput = {
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPerson?: Maybe<Person>;
  updatePerson?: Maybe<Person>;
  deletePerson?: Maybe<Person>;
  createPlace?: Maybe<Place>;
  updatePlace?: Maybe<Place>;
  deletePlace?: Maybe<Place>;
};

export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};

export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};

export type MutationDeletePersonArgs = {
  input: DeletePersonInput;
};

export type MutationCreatePlaceArgs = {
  input: CreatePlaceInput;
};

export type MutationUpdatePlaceArgs = {
  input: UpdatePlaceInput;
};

export type MutationDeletePlaceArgs = {
  input: DeletePlaceInput;
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  photo?: Maybe<Scalars["AWSURL"]>;
  name: Scalars["String"];
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type PersonConnection = {
  __typename?: "PersonConnection";
  items?: Maybe<Array<Maybe<Person>>>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type Place = {
  __typename?: "Place";
  id: Scalars["ID"];
  name: Scalars["String"];
  headcount: Scalars["Int"];
  personPrice: Scalars["Int"];
  leaderPrice: Scalars["Int"];
  retailPrice: Scalars["Int"];
};

export type PlaceConnection = {
  __typename?: "PlaceConnection";
  items?: Maybe<Array<Maybe<Place>>>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  getPerson?: Maybe<Person>;
  listPeople?: Maybe<PersonConnection>;
  getPlace?: Maybe<Place>;
  listPlaces?: Maybe<PlaceConnection>;
};

export type QueryGetPersonArgs = {
  id: Scalars["ID"];
};

export type QueryListPeopleArgs = {
  filter?: Maybe<TablePersonFilterInput>;
  limit?: Maybe<Scalars["Int"]>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type QueryGetPlaceArgs = {
  id: Scalars["ID"];
};

export type QueryListPlacesArgs = {
  filter?: Maybe<TablePlaceFilterInput>;
  limit?: Maybe<Scalars["Int"]>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  onCreatePerson?: Maybe<Person>;
  onUpdatePerson?: Maybe<Person>;
  onDeletePerson?: Maybe<Person>;
  onCreatePlace?: Maybe<Place>;
  onUpdatePlace?: Maybe<Place>;
  onDeletePlace?: Maybe<Place>;
};

export type SubscriptionOnCreatePersonArgs = {
  id?: Maybe<Scalars["ID"]>;
  photo?: Maybe<Scalars["AWSURL"]>;
  name?: Maybe<Scalars["String"]>;
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type SubscriptionOnUpdatePersonArgs = {
  id?: Maybe<Scalars["ID"]>;
  photo?: Maybe<Scalars["AWSURL"]>;
  name?: Maybe<Scalars["String"]>;
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type SubscriptionOnDeletePersonArgs = {
  id?: Maybe<Scalars["ID"]>;
  photo?: Maybe<Scalars["AWSURL"]>;
  name?: Maybe<Scalars["String"]>;
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type SubscriptionOnCreatePlaceArgs = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  headcount?: Maybe<Scalars["Int"]>;
  personPrice?: Maybe<Scalars["Int"]>;
  leaderPrice?: Maybe<Scalars["Int"]>;
};

export type SubscriptionOnUpdatePlaceArgs = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  headcount?: Maybe<Scalars["Int"]>;
  personPrice?: Maybe<Scalars["Int"]>;
  leaderPrice?: Maybe<Scalars["Int"]>;
};

export type SubscriptionOnDeletePlaceArgs = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  headcount?: Maybe<Scalars["Int"]>;
  personPrice?: Maybe<Scalars["Int"]>;
  leaderPrice?: Maybe<Scalars["Int"]>;
};

export type TableBooleanFilterInput = {
  ne?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["Boolean"]>;
};

export type TableFloatFilterInput = {
  ne?: Maybe<Scalars["Float"]>;
  eq?: Maybe<Scalars["Float"]>;
  le?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  ge?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  contains?: Maybe<Scalars["Float"]>;
  notContains?: Maybe<Scalars["Float"]>;
  between?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type TableIdFilterInput = {
  ne?: Maybe<Scalars["ID"]>;
  eq?: Maybe<Scalars["ID"]>;
  le?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  ge?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  contains?: Maybe<Scalars["ID"]>;
  notContains?: Maybe<Scalars["ID"]>;
  between?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  beginsWith?: Maybe<Scalars["ID"]>;
};

export type TableIntFilterInput = {
  ne?: Maybe<Scalars["Int"]>;
  eq?: Maybe<Scalars["Int"]>;
  le?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  ge?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  contains?: Maybe<Scalars["Int"]>;
  notContains?: Maybe<Scalars["Int"]>;
  between?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type TablePersonFilterInput = {
  id?: Maybe<TableIdFilterInput>;
  photo?: Maybe<TableStringFilterInput>;
  name?: Maybe<TableStringFilterInput>;
  battalion?: Maybe<TableStringFilterInput>;
  department?: Maybe<TableStringFilterInput>;
};

export type TablePlaceFilterInput = {
  id?: Maybe<TableIdFilterInput>;
  name?: Maybe<TableStringFilterInput>;
  headcount?: Maybe<TableIntFilterInput>;
  personPrice?: Maybe<TableIntFilterInput>;
  leaderPrice?: Maybe<TableIntFilterInput>;
  retailPrice?: Maybe<TableIntFilterInput>;
};

export type TableStringFilterInput = {
  ne?: Maybe<Scalars["String"]>;
  eq?: Maybe<Scalars["String"]>;
  le?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  ge?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  notContains?: Maybe<Scalars["String"]>;
  between?: Maybe<Array<Maybe<Scalars["String"]>>>;
  beginsWith?: Maybe<Scalars["String"]>;
};

export type UpdatePersonInput = {
  id: Scalars["ID"];
  photo?: Maybe<Scalars["AWSURL"]>;
  name?: Maybe<Scalars["String"]>;
  battalion?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
};

export type UpdatePlaceInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  headcount?: Maybe<Scalars["Int"]>;
  personPrice?: Maybe<Scalars["Int"]>;
  leaderPrice?: Maybe<Scalars["Int"]>;
  retailPrice?: Maybe<Scalars["Int"]>;
};
export type ListPeopleQueryVariables = {
  filter?: Maybe<TablePersonFilterInput>;
};

export type ListPeopleQuery = { __typename?: "Query" } & {
  listPeople: Maybe<
    { __typename?: "PersonConnection" } & {
      items: Maybe<
        Array<
          Maybe<
            { __typename?: "Person" } & Pick<
              Person,
              "id" | "photo" | "name" | "department"
            >
          >
        >
      >;
    }
  >;
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput;
};

export type CreatePersonMutation = { __typename?: "Mutation" } & {
  createPerson: Maybe<{ __typename?: "Person" } & Pick<Person, "id">>;
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput;
};

export type UpdatePersonMutation = { __typename?: "Mutation" } & {
  updatePerson: Maybe<{ __typename?: "Person" } & Pick<Person, "id">>;
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput;
};

export type DeletePersonMutation = { __typename?: "Mutation" } & {
  deletePerson: Maybe<{ __typename?: "Person" } & Pick<Person, "id">>;
};

export type ListPlacesQueryVariables = {
  filter?: Maybe<TablePlaceFilterInput>;
};

export type ListPlacesQuery = { __typename?: "Query" } & {
  listPlaces: Maybe<
    { __typename?: "PlaceConnection" } & {
      items: Maybe<
        Array<
          Maybe<
            { __typename?: "Place" } & Pick<
              Place,
              | "id"
              | "name"
              | "headcount"
              | "personPrice"
              | "leaderPrice"
              | "retailPrice"
            >
          >
        >
      >;
    }
  >;
};

export type GetPlaceQueryVariables = {
  id: Scalars["ID"];
};

export type GetPlaceQuery = { __typename?: "Query" } & {
  getPlace: Maybe<
    { __typename?: "Place" } & Pick<
      Place,
      | "id"
      | "name"
      | "headcount"
      | "personPrice"
      | "leaderPrice"
      | "retailPrice"
    >
  >;
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput;
};

export type CreatePlaceMutation = { __typename?: "Mutation" } & {
  createPlace: Maybe<{ __typename?: "Place" } & Pick<Place, "id">>;
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput;
};

export type UpdatePlaceMutation = { __typename?: "Mutation" } & {
  updatePlace: Maybe<{ __typename?: "Place" } & Pick<Place, "id">>;
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput;
};

export type DeletePlaceMutation = { __typename?: "Mutation" } & {
  deletePlace: Maybe<{ __typename?: "Place" } & Pick<Place, "id">>;
};

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
export type ListPeopleComponentProps = Omit<
  ReactApollo.QueryProps<ListPeopleQuery, ListPeopleQueryVariables>,
  "query"
>;

export const ListPeopleComponent = (props: ListPeopleComponentProps) => (
  <ReactApollo.Query<ListPeopleQuery, ListPeopleQueryVariables>
    query={ListPeopleDocument}
    {...props}
  />
);

export type ListPeopleProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ListPeopleQuery, ListPeopleQueryVariables>
> &
  TChildProps;
export function withListPeople<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ListPeopleQuery,
    ListPeopleQueryVariables,
    ListPeopleProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ListPeopleQuery,
    ListPeopleQueryVariables,
    ListPeopleProps<TChildProps>
  >(ListPeopleDocument, {
    alias: "withListPeople",
    ...operationOptions
  });
}
export const CreatePersonDocument = gql`
  mutation createPerson($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`;
export type CreatePersonMutationFn = ReactApollo.MutationFn<
  CreatePersonMutation,
  CreatePersonMutationVariables
>;
export type CreatePersonComponentProps = Omit<
  ReactApollo.MutationProps<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >,
  "mutation"
>;

export const CreatePersonComponent = (props: CreatePersonComponentProps) => (
  <ReactApollo.Mutation<CreatePersonMutation, CreatePersonMutationVariables>
    mutation={CreatePersonDocument}
    {...props}
  />
);

export type CreatePersonProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreatePersonMutation, CreatePersonMutationVariables>
> &
  TChildProps;
export function withCreatePerson<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreatePersonMutation,
    CreatePersonMutationVariables,
    CreatePersonProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreatePersonMutation,
    CreatePersonMutationVariables,
    CreatePersonProps<TChildProps>
  >(CreatePersonDocument, {
    alias: "withCreatePerson",
    ...operationOptions
  });
}
export const UpdatePersonDocument = gql`
  mutation updatePerson($input: UpdatePersonInput!) {
    updatePerson(input: $input) {
      id
    }
  }
`;
export type UpdatePersonMutationFn = ReactApollo.MutationFn<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>;
export type UpdatePersonComponentProps = Omit<
  ReactApollo.MutationProps<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >,
  "mutation"
>;

export const UpdatePersonComponent = (props: UpdatePersonComponentProps) => (
  <ReactApollo.Mutation<UpdatePersonMutation, UpdatePersonMutationVariables>
    mutation={UpdatePersonDocument}
    {...props}
  />
);

export type UpdatePersonProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdatePersonMutation, UpdatePersonMutationVariables>
> &
  TChildProps;
export function withUpdatePerson<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdatePersonMutation,
    UpdatePersonMutationVariables,
    UpdatePersonProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdatePersonMutation,
    UpdatePersonMutationVariables,
    UpdatePersonProps<TChildProps>
  >(UpdatePersonDocument, {
    alias: "withUpdatePerson",
    ...operationOptions
  });
}
export const DeletePersonDocument = gql`
  mutation deletePerson($input: DeletePersonInput!) {
    deletePerson(input: $input) {
      id
    }
  }
`;
export type DeletePersonMutationFn = ReactApollo.MutationFn<
  DeletePersonMutation,
  DeletePersonMutationVariables
>;
export type DeletePersonComponentProps = Omit<
  ReactApollo.MutationProps<
    DeletePersonMutation,
    DeletePersonMutationVariables
  >,
  "mutation"
>;

export const DeletePersonComponent = (props: DeletePersonComponentProps) => (
  <ReactApollo.Mutation<DeletePersonMutation, DeletePersonMutationVariables>
    mutation={DeletePersonDocument}
    {...props}
  />
);

export type DeletePersonProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeletePersonMutation, DeletePersonMutationVariables>
> &
  TChildProps;
export function withDeletePerson<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeletePersonMutation,
    DeletePersonMutationVariables,
    DeletePersonProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeletePersonMutation,
    DeletePersonMutationVariables,
    DeletePersonProps<TChildProps>
  >(DeletePersonDocument, {
    alias: "withDeletePerson",
    ...operationOptions
  });
}
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
export type ListPlacesComponentProps = Omit<
  ReactApollo.QueryProps<ListPlacesQuery, ListPlacesQueryVariables>,
  "query"
>;

export const ListPlacesComponent = (props: ListPlacesComponentProps) => (
  <ReactApollo.Query<ListPlacesQuery, ListPlacesQueryVariables>
    query={ListPlacesDocument}
    {...props}
  />
);

export type ListPlacesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ListPlacesQuery, ListPlacesQueryVariables>
> &
  TChildProps;
export function withListPlaces<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ListPlacesQuery,
    ListPlacesQueryVariables,
    ListPlacesProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ListPlacesQuery,
    ListPlacesQueryVariables,
    ListPlacesProps<TChildProps>
  >(ListPlacesDocument, {
    alias: "withListPlaces",
    ...operationOptions
  });
}
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
export type GetPlaceComponentProps = Omit<
  ReactApollo.QueryProps<GetPlaceQuery, GetPlaceQueryVariables>,
  "query"
> &
  ({ variables: GetPlaceQueryVariables; skip?: false } | { skip: true });

export const GetPlaceComponent = (props: GetPlaceComponentProps) => (
  <ReactApollo.Query<GetPlaceQuery, GetPlaceQueryVariables>
    query={GetPlaceDocument}
    {...props}
  />
);

export type GetPlaceProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetPlaceQuery, GetPlaceQueryVariables>
> &
  TChildProps;
export function withGetPlace<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetPlaceQuery,
    GetPlaceQueryVariables,
    GetPlaceProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetPlaceQuery,
    GetPlaceQueryVariables,
    GetPlaceProps<TChildProps>
  >(GetPlaceDocument, {
    alias: "withGetPlace",
    ...operationOptions
  });
}
export const CreatePlaceDocument = gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
    }
  }
`;
export type CreatePlaceMutationFn = ReactApollo.MutationFn<
  CreatePlaceMutation,
  CreatePlaceMutationVariables
>;
export type CreatePlaceComponentProps = Omit<
  ReactApollo.MutationProps<CreatePlaceMutation, CreatePlaceMutationVariables>,
  "mutation"
>;

export const CreatePlaceComponent = (props: CreatePlaceComponentProps) => (
  <ReactApollo.Mutation<CreatePlaceMutation, CreatePlaceMutationVariables>
    mutation={CreatePlaceDocument}
    {...props}
  />
);

export type CreatePlaceProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreatePlaceMutation, CreatePlaceMutationVariables>
> &
  TChildProps;
export function withCreatePlace<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreatePlaceMutation,
    CreatePlaceMutationVariables,
    CreatePlaceProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreatePlaceMutation,
    CreatePlaceMutationVariables,
    CreatePlaceProps<TChildProps>
  >(CreatePlaceDocument, {
    alias: "withCreatePlace",
    ...operationOptions
  });
}
export const UpdatePlaceDocument = gql`
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
    }
  }
`;
export type UpdatePlaceMutationFn = ReactApollo.MutationFn<
  UpdatePlaceMutation,
  UpdatePlaceMutationVariables
>;
export type UpdatePlaceComponentProps = Omit<
  ReactApollo.MutationProps<UpdatePlaceMutation, UpdatePlaceMutationVariables>,
  "mutation"
>;

export const UpdatePlaceComponent = (props: UpdatePlaceComponentProps) => (
  <ReactApollo.Mutation<UpdatePlaceMutation, UpdatePlaceMutationVariables>
    mutation={UpdatePlaceDocument}
    {...props}
  />
);

export type UpdatePlaceProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdatePlaceMutation, UpdatePlaceMutationVariables>
> &
  TChildProps;
export function withUpdatePlace<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdatePlaceMutation,
    UpdatePlaceMutationVariables,
    UpdatePlaceProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdatePlaceMutation,
    UpdatePlaceMutationVariables,
    UpdatePlaceProps<TChildProps>
  >(UpdatePlaceDocument, {
    alias: "withUpdatePlace",
    ...operationOptions
  });
}
export const DeletePlaceDocument = gql`
  mutation deletePlace($input: DeletePlaceInput!) {
    deletePlace(input: $input) {
      id
    }
  }
`;
export type DeletePlaceMutationFn = ReactApollo.MutationFn<
  DeletePlaceMutation,
  DeletePlaceMutationVariables
>;
export type DeletePlaceComponentProps = Omit<
  ReactApollo.MutationProps<DeletePlaceMutation, DeletePlaceMutationVariables>,
  "mutation"
>;

export const DeletePlaceComponent = (props: DeletePlaceComponentProps) => (
  <ReactApollo.Mutation<DeletePlaceMutation, DeletePlaceMutationVariables>
    mutation={DeletePlaceDocument}
    {...props}
  />
);

export type DeletePlaceProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeletePlaceMutation, DeletePlaceMutationVariables>
> &
  TChildProps;
export function withDeletePlace<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeletePlaceMutation,
    DeletePlaceMutationVariables,
    DeletePlaceProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeletePlaceMutation,
    DeletePlaceMutationVariables,
    DeletePlaceProps<TChildProps>
  >(DeletePlaceDocument, {
    alias: "withDeletePlace",
    ...operationOptions
  });
}
