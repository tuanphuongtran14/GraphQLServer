const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        hi: String!
    },

    extend type Mutation {
        uploadImage(images: [Upload!]!): Message!
    }
`

