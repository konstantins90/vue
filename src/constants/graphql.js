import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql`
    mutation {
        generateCustomerToken(email: $email,
            password: $password) {
            token
        }
    }
`