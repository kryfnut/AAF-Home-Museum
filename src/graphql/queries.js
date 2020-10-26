/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBasic = /* GraphQL */ `
  query GetBasic($id: ID!) {
    getBasic(id: $id) {
      cityResidence
      contact
      countryResidence
      description
      email
      firstName
      id
      lastName
      nationality
      title
      images
      createdAt
      updatedAt
    }
  }
`;
export const listBasics = /* GraphQL */ `
  query ListBasics(
    $filter: ModelBasicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cityResidence
        contact
        countryResidence
        description
        email
        firstName
        id
        lastName
        nationality
        title
        images
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      basicId
      url
      width
      height
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basicId
        url
        width
        height
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
      id
      basicId
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basicId
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getGridInfo = /* GraphQL */ `
 query GetGridInfo(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
    $id: ID!
 ) {
     listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basicId
        url
        width
        height
        createdAt
        updatedAt
      }
    }
    getBasic(id: $id) {
      cityResidence
      contact
      countryResidence
      description
      email
      firstName
      id
      lastName
      nationality
      title
      images
      createdAt
      updatedAt
    }
 }
`
