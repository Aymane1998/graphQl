export const typeDefs = `#graphql
type Game{
    id: ID!,   #not alowed to be null => required type
    title:String!,
    platform: [String!]!,
    reviews: [Review!],
}
type Review{
    id: ID!,
    rating: String!,
    content: String!
    game: Game!,
    game_id: ID!,
    author:Author!,
}
type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!],
}
type Query {
    reviews: [Review],
    review(id:ID!): Review
    games: [Game],
    game(id:ID!): Game
    authors: [Author]
    author(id:ID!): Author
}
`;

// int , float ; string, boolean , ID