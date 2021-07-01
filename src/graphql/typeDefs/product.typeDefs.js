const { gql } = require('apollo-server-express');

module.exports = gql`
    input ColorInput {
        color: String!,
        images: String!,
    },

    input RatingInput {
        stars: Int!,
        votes: Int!
    },

    input MemoryInput {
        ram: Float!,
        internal: Int!,
        hasCardSlot: Boolean!
    },

    input DimensionsInput {
        height: Float!,
        width: Float!,
        depth: Float!,
        weight: Float!,
    },

    input ScreenInput {
        panel: String!,
        resolution: String!,
        size: Float!
    },

    input ProductInput {
        name: String!,
        slug: String,
        price: Int!,
        colors: [ColorInput]!,
        rating: RatingInput!,
        memory: MemoryInput!,
        dimensions: DimensionsInput!,
        screen: ScreenInput!
    },

    type Color {
        color: String!,
        images: [String]!
        quantity: Int!,
        sold: Int!
    },

    type Rating {
        stars: Int!,
        votes: Int!
    },

    type Memory {
        ram: Float!,
        internal: Int!,
        hasCardSlot: Boolean!
    },

    type Dimensions {
        height: Float!,
        width: Float!,
        depth: Float!,
        weight: Float!,
    },

    type Screen {
        panel: String!,
        resolution: String!,
        size: Float!
    },

    type Product {
        name: String!,
        slug: String,
        price: Int!,
        colors: [Color]!,
        rating: Rating!,
        memory: Memory!,
        dimensions: Dimensions!,
        screen: Screen!
    },

    type Query {
        products: [Product]!,
        hello: String!
    },

    type Mutation {
        createProduct(input: ProductInput): Product!,
    }
`
