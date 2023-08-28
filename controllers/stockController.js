// Controlleur de la page 'Gérer les stocks'

module.exports = (req, res) => {

    
    var code = ""
    var quantite = ""

    // Données qui ont été rentré dans le formulaire lorsqu'une erreur c'est produite
    const donnees = req.flash('donnees')[0] 

    // Persistance des données dans le formulaire
    if(typeof donnees != "undefined"){
        code = donnees.code
        quantite = donnees.quantite
    }


   res.render('stock', {code, quantite, erreurs: req.flash('erreurs'), confirm: req.flash('confirm')})
}