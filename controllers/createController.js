// Controlleur de la page 'Créer un produit'

module.exports = (req, res) => {

    var code = ""
    var nom = ""
    var prix = ""


    // Données qui ont été rentré dans le formulaire lorsqu'une erreur c'est produite
    const donnees = req.flash('donnees')[0] 

    // Persistance des données dans le formulaire
    if(typeof donnees != "undefined"){
        code = donnees.code
        nom = donnees.nom
        prix = donnees.prix
    }


    res.render('new', {code, nom, prix, erreurs: req.flash('erreurs'), confirm: req.flash('confirm')})
}