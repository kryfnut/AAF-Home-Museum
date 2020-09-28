/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBasic = /* GraphQL */ `
  mutation CreateBasic(
    $input: CreateBasicInput!
    $condition: ModelBasicConditionInput
  ) {
    createBasic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateBasic = /* GraphQL */ `
  mutation UpdateBasic(
    $input: UpdateBasicInput!
    $condition: ModelBasicConditionInput
  ) {
    updateBasic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteBasic = /* GraphQL */ `
  mutation DeleteBasic(
    $input: DeleteBasicInput!
    $condition: ModelBasicConditionInput
  ) {
    deleteBasic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      basicId
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      basicId
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      basicId
      url
      createdAt
      updatedAt
    }
  }
`;
export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      id
      basicId
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      id
      basicId
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      id
      basicId
      value
      createdAt
      updatedAt
    }
  }
`;
