import gql from 'graphql-tag'

export const loginUser = gql`
    mutation loginUser($password: String!, $email: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`