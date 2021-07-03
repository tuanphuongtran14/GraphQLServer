const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar FileUpload

    type Image {
        id: ID!,
        filename: String,
        mimetype: String,
        url: String,
        path: String
    },
     
    extend type Query {
        images: [Image]!,
    },

    extend type Mutation {
        uploadImages(files: [FileUpload!]!): [Image!]!,
    }
`

