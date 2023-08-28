// Controlleur qui s'occupe d'annuler la supression d'un produit
const Produits = require('../models/ProduitsModel')


module.exports = async (req, res) => {

    await Produits.findByIdAndUpdate(req.params.id, {supprime: false})

    res.redirect('/products')
   
}