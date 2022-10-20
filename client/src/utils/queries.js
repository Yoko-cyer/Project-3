import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      introduction
      wanttobabysit
      # email
      # phonenumber
      # candolightduties
      # haslicense
      # howmuchexperience
      # candopickupdropoff
      # covidvaccinated
      # availabledays
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
      phonenumber
      introduction
      candolightduties
      wanttobabysit
      haslicense
      howmuchexperience
      candopickupdropoff
      covidvaccinated
      availabledays
      comments
    }
  }
`;


export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

