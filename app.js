const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/libreria';

mongoose.connect(url_bd)
.then(() => {
    console.log('si jalo');
})
.catch((err) => {
    console.log('no jalo');
});

// Creación de esquema
const esquema_libreria = new mongoose.Schema({
    titulo: {
        type: String
    },
    autor: {
        type: String
    },
    editorial: {
        type: String
    },
    year_publicacion: {
        type: Number
    },
    idioma: {
        type: String
    },
    numero_paginas: {
        type: Number
    },
    categoria: {
        type: String
    }
});

// Creando colección
const modelo_libreria = mongoose.model('Libros', esquema_libreria);

// Crear datos
modelo_libreria.create({
    titulo: "Doctor sueño",
    autor: "Gallardo Ruiz",
    editorial: "Plumas",
    year_publicacion: "2000",
    idioma: "ingles",
    numero_paginas: "1233",
    categoria: "ciencia"
});
