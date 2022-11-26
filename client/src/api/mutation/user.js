import {gql} from '@apollo/client'

export const REMOVE_USER = gql`
    mutation RemoveUser($id: Float!) {
        removeUser(input: {id: $id}) {
            id
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($id: Float! $name: String! $phone: String! $role: String!) {
        updateUser(input: {id: $id first_name: $name phone: $phone role: $role}) {
            id
            first_name
            role
            phone
        }
    }
`

export const CREATE_USER = gql`
    mutation CreateUser($name: String! $phone: String! $role: String!) {
        createUser(input: {first_name: $name phone: $phone role: $role}) {
            id
            first_name
            role
            phone
        }
    }
`
