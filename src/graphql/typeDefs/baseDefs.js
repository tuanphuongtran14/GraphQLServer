const { gql } = require('apollo-server-express');

module.exports = gql`
    type Message {
        statusCode: Int!,
        message: String!,
    }
`