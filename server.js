const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Examen 1 web/graphql/schema.js');
const {conectDB} = require('./Examen 1 web/db/index.js');

conectDB()
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to muy graphql api');

});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000)
console.log('Server is running on port 3000');