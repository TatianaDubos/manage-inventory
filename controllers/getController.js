// Controlleur qui s'occupe de la barre de recherche pour trouver un produit

const Produits = require('../models/ProduitsModel')

module.exports = async (req, res) => {

    // Récupérer la recherche
    const recherche = req.body.recherche

    // Récupérer les produits disponnibles qui correspondent à la recherche
    const list = await Produits.find({supprime: false, nom: {$regex : recherche, $options: 'i'}})

    // Récupérer les produits dans la corbeille qui correspondent à la recherche
    const supplist = await Produits.find({supprime: true, nom: {$regex : recherche, $options: 'i'}})

    res.render('products', {list, supplist})
}