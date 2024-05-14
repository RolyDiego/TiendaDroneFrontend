const { Schema, model } = require('mongoose')


const UserSchame = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Correo invalido']
    },
    direccion: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});



module.exports = model("User", UserSchame);
