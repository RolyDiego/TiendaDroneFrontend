const { GraphQLString } = require('graphql');
const { User } = require('../models');

const register = {
    type: GraphQLString,
    description: 'Register a new user',
    args: {
        nombre: { type: GraphQLString },
        apellido: { type: GraphQLString },
        correo: { type: GraphQLString },
        direccion: { type: GraphQLString },
    },
    async resolve(_, args) {
        try {
            const { nombre, apellido, correo, direccion } = args;

            console.log(args)

            const newUser = await User.create({ nombre, apellido, correo, direccion });

            console.log(newUser)


            return 'new User registered'
        } catch (error) {
            console.error(error)
        }
    },
};

module.exports = {
    register,
}