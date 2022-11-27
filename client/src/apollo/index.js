import {ApolloClient, InMemoryCache, createHttpLink, } from '@apollo/client'

const apiUrl = 'taras-server'
// const apiUrl =  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_PROD : process.env.REACT_APP_SERVER_DEV;

const httpLink = createHttpLink({
    uri: `http://${apiUrl}/api/graphql`,

});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})