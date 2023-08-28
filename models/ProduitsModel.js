// Model de la collection Produits

const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

// Schema
const ProduitsSchema = new Schema({
    code : {
        type : String,
        required : [true, "Entrez le code du produit"],
        unique : true
    },

    nom : {
        type :String,
        required : [true, "Entrez le nom du produit"]
    },

    prix : {
        type : Number,
        required : [true, "Entrez le prix du produit"]
    },

    quantite : {
        type : Number,
        required : [true, "Entrez la quantité en stock du produit"],
        default : 0
    },

    
    image : {
        type : String,
        required : [true, "Sélectionner l'image du produit"]
    },
    
    supprime : {
        type : Boolean,
        default : false
    }
})


// Unique validator
ProduitsSchema.plugin(uniqueValidator, {message: "Le code du produit doit être unique."})

const Produits = mongoose.model('Produit', ProduitsSchema)

module.exports = Produits