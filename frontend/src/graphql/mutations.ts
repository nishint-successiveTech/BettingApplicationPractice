import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
  ) {
    createUser(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      password: $password
    ) {
      id
      name
      email
      phoneNumber
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        phoneNumber
      }
    }
  }
`;
