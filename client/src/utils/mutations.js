import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(
      username: $username, 
      email: $email, 
      password: $password, 
      introduction: $introduction,
      # availabledays; $availabledays,
      # phonenumber; $phonenumber,
      # wanttobabysit; $wanttobabysit,
      # haslicense; $haslicense,
      # howmuchexperience; $howmuchexperience,
      # candolightduties; $candolightduties,
      # candopickupdropoff; $candopickupdropoff,
      # covidvaccinated; $covidvaccinated
      ) {
      token
      user {
        _id
        username
        email
        password
        introduction
        availabledays
        phonenumber
        wanttobabysit
        haslicense
        howmuchexperience
        candolightduties
        candopickupdropoff
        covidvaccinated
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;


