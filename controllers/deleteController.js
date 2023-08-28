// Controlleur qui s'occupe de suprimmer un produit
const Produits = require('../models/ProduitsModel')

module.exports = async (req, res) => {

  await Produits.findByIdAndUpdate(req.params.id, {supprime: true})

  res.redirect('/products')
  
}