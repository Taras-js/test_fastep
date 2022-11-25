import {gql} from '@apollo/client'

export const REMOVE_USER = gql`
    mutation RemoveUser($id: Float!) {
        removeUser(input: {id: $id}) {
            id
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateOrder($id: Float!) {
        updateOrder(input: {id: $id}) {
            id
        }
    }
`

