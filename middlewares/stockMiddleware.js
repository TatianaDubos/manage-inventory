const Produits = require('../models/ProduitsModel')

// Middleware qui effectue des vérification dans le formulaire des stocks

module.exports = (req, res, next) => {

    Produits.findOne({code : req.body.code})
    .then(function(doc) {
 
        // Vérifie si le code du produit existe dans la collection
        if(!doc){

            // Afficher les erreurs
            let err = new Array();
            err[0] = "Code innexistant."
   
            req.flash('donnees', req.body)
            req.flash('erreurs', err)
            return res.redirect('/stock')
        }
        // Verifie que la quantité du produit ne descende pas en dessous de zero lors d'une diminution
        else if(req.url == "/stock/remove"){

            const num = parseInt(doc.quantite) - parseInt(req.body.quantite)

             if(num < 0){

                 // Afficher les erreurs
                let err = new Array();
                err[0] = "La quantité en stock de ce produit est de "+ doc.quantite +"."
                err[1] =  "La quantité en stock ne peut descendre en dessous de zéro"
                
                req.flash('donnees', req.body)
                req.flash('erreurs', err)
                return res.redirect('/stock')
            }
           
        }
        
        next()
       
   })
   
};
   
