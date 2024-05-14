const { GraphQLSchema, GraphQLObjectType } = require("graphql")
const { hello } = require('./queries')
const { register } = require('./mutations')


const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: ' the root query type',
    fields: {
        hello,
    }
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: ' the root mutation type',
    fields: {
        register,
    }

})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

