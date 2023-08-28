// Middleware qui 

const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {

    const uploadedFile = req.files.image.name; 
    const targetPath = path.resolve(__dirname, '..', 'public/img', uploadedFile);

    //  Verifie si l'image existe déjà dans le dossier img
    if (fs.existsSync(targetPath)) {

        const err = "Le nom de fichier '" + uploadedFile + "' n'est pas unique."
        
        req.flash('erreurs', err)
        req.flash('donnees', req.body)
      
        return res.redirect('/new')
    }

    // Vérifie si l'extension du fichier selectionné dans le formulaire de création correspond a jpg,jpeg ou png
    if (!uploadedFile.match(/\.(jpg|jpeg|png)$/i)) {
        const err = "Uniquement les fichiers d'extension jpg, jpeg et png sont acceptés."
        
        req.flash('erreurs', err)
        req.flash('donnees', req.body)
      
        return res.redirect('/new')
    }

    next();
  
};