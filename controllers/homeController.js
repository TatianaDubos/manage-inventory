// Controlleur de la page 'Acceuil'

const Produits = require('../models/ProduitsModel')

module.exports = async (req, res) => {

   // Récupère les produits disponnibles
    const list = await Produits.find({supprime: false})

    // Le nombre de produits
    const num = list.length

    // Affiche le nombre de produits disponible
    res.render('index', {num})
}