jQuery(document).ready(function($){
    $('#form').submit(function(e){
        // On désactive le comportement par défaut du navigateur
        // (qui consiste à appeler la page action du formulaire)
        e.preventDefault();
         
        // On envoi la requête AJAX
        $.getJSON(
            'transmettre.php',
            {chaine: $('#chaine').val()},
            function(data){
                $('#retour').hide();
                $('#retour').html('')
                    .append('<b>Paramètre en majuscule</b> : '+data.chaine+'<br/>')
                    .append('<b>Date</b> : '+data.date+'<br/>')
                    .append('<b>Version PHP</b> : '+data.phpversion+'<br/>');
                $('#retour').fadeIn();
            }
        );
    });
});