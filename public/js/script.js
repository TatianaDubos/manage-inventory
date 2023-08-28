// Evenement OnClick pour afficher un message de confirmation suite a la demande de suppression d’un document ou d’annulation de la suppression

function showConfirmation(event) {
    var confirmation = confirm('Êtes-vous sûr(e) de vouloir continuer?');
  
    if (!confirmation) {
    
        return false; 

    } 
}


// Evenement OnChange pout afficher un apercu de l'image sélectionné dans le fomulaire de création
function previewImage(event) {
    var input = event.target;
    var imagePreview = document.getElementById('imagePreview');
  
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        imagePreview.setAttribute('src', e.target.result);
        imagePreview.style.display = 'block';
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  