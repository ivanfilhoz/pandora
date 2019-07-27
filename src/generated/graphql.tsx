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

export type Allocation = {
  __typename?: "Allocation";
  placeId: Scalars["ID"];
  period: Scalars["String"];
  people: Array<Maybe<Scalars["ID"]>>;
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
export type ListPeopleQueryVariables = {};

export type ListPeopleQuery = { __typename?: "Query" } & {
  listPeople: Maybe<
    { __typename?: "PersonConnection" } & {
      items: Maybe<
        Array<
          Maybe<
            { __typename?: "Person" } & Pick<
              Person,
              "id" | "photo" | "name" | "battalion" | "department"
            >
          >
        >
      >;
    }
  >;
};

export type ListPlacesQueryVariables = {};

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

export const ListPeopleDocument = gql`
  query listPeople {
    listPeople {
      items {
        id
        photo
        name
        battalion
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
export const ListPlacesDocument = gql`
  query listPlaces {
    listPlaces {
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
