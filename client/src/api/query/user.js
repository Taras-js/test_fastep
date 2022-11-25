import {gql} from '@apollo/client'

export const GET_USERS = gql`
    query GetUsers {
        getUsers {
            id
            username
            first_name
            tokens
            orders
            tokens
            phones
            addresses
            phone
            role
            new_profile
            first_name
            last_name 
            last_profile
            use_safari
            username
            inventory
            limited
            points
        }
    }
`

