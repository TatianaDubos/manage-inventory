// Controlleur qui s'occupe de créer un nouveau produit avec les valeurs du formulaire

const Produits = require('../models/ProduitsModel')
const path = require('path')

module.exports = (req, res) => {

  // Récupérer l'image
    const img = req.files.image

  // Créer un nouveau document
   Produits.create({...req.body, image: "/img/" + img.name })
   .then(function(doc) {

    // Déplacer l'image
    img.mv(path.resolve(__dirname, '..', 'public/img', img.name))

    // Confirmation
    req.flash('confirm', "true")
    return res.redirect('/new')
   })
   // Si il y a des erreurs
  .catch(function(error) {
    if (error.errors != null) {
      // Récupérer le message des erreurs et le corp du formulaire
      const err = Object.keys(error.errors).map(key => error.errors[key].message)

      req.flash('erreurs', err)
      req.flash('donnees', req.body)
    }
    return res.redirect('/new')
  });

}