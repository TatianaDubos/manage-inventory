// Controlleur de la page 'Afficher les produits'

const Produits = require('../models/ProduitsModel')

module.exports = async (req, res) => {

    // Récupèrer les produits disponibles
    const list = await Produits.find({supprime: false})

    // Récupérer les produits dans la corbeille
    const supplist = await Produits.find({supprime: true})


    res.render('products', {list, supplist})
}