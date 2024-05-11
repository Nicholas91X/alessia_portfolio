document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_aswfdgp', 'template_mhaicod', '#myForm')
                .then(function() {
                    alert('Messaggio inviato con successo!');
                }, function(error) {
                    alert("Errore nell'invio del messaggio: " + JSON.stringify(error));
                });
        });
    }
});