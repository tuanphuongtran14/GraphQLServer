const { gql } = require('apollo-server-express');

module.exports = gql`
    input ColorInput {
        color: String!,
        images: [ID]!,
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

    input CreateProductInput {
        name: String!,
        slug: String,
        price: Int!,
        colors: [ColorInput]!,
        rating: RatingInput!,
        memory: MemoryInput!,
        dimensions: DimensionsInput!,
        screen: ScreenInput!,
        cpu: String!,
        gpu: String!
    },

    input EditProductInput {
        name: String,
        slug: String,
        price: Int,
        colors: [ColorInput],
        rating: RatingInput,
        memory: MemoryInput,
        dimensions: DimensionsInput,
        screen: ScreenInput,
        cpu: String,
        gpu: String
    },

    type Color {
        color: String!,
        images: [Image]!
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
        id: ID!,
        name: String!,
        slug: String,
        price: Int!,
        colors: [Color]!,
        rating: Rating!,
        memory: Memory!,
        dimensions: Dimensions!,
        screen: Screen!,
        cpu: String!,
        gpu: String!
    },

    type Query {
        products: [Product]!,
        hello: String!
    },

    type Mutation {
        createProduct(input: CreateProductInput): Product!,
        editProductById(id: ID!, editContent: EditProductInput!): Product!,
        deleteProductById(id: ID!): Product!,
    }
`
