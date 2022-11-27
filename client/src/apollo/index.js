import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'

const apiUrl = 'localhost:8081'
const httpLink = createHttpLink({
    uri: `http://${apiUrl}/api/graphql`,

});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})