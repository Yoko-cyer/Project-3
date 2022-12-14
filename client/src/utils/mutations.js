import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password, ) {
      token
      user {
        # _id
        username
        email
        phonenumber
        introduction
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($phonenumber: String!, $introduction: String!) {
  updateMyAccount(phonenumber: $phonenumber) {
    _id
    phonenumber
    introduction
  }
}
`

