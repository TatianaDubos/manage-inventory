// Controlleur qui s'occupe d'augmenter le stock d'un produit

const Produits = require('../models/ProduitsModel')

module.exports = async (req, res) => {
  try {
      // Récupère le document
    const doc = await Produits.findOne({ code: req.body.code });
     // Calcule la quantite
    const num = parseInt(doc.quantite) + parseInt(req.body.quantite);
    // Modifie le document
    await Produits.findByIdAndUpdate(doc._id, { quantite: num });

    req.flash('confirm', 'true');
    return res.redirect('/stock');

    // Si il y a des erreurs
  } catch (error) {
    if (error.errors != null) {
       // Récupérer le messages des erreurs et le corps du formulaire
      const err = Object.keys(error.errors).map(key => error.errors[key].message);
      
      req.flash('donnees', req.body);
      req.flash('erreurs', err);
      return res.redirect('/stock');
    }
  }
};