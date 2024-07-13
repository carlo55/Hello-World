Odocument.getElementById('cmdINGRESSO').addEventListener('click', function() {
    // URL del Google Apps Script
    const url = 'https://script.google.com/macros/s/AKfycby9wCzyyBJzc_NZ-cV8Qsa8_QVIGSu6Edulrf4IydC7OraFWproBIlKngpHoqSb8lVn/exec';

    // Eseguire una richiesta AJAX
    fetch(url)
        .then(response => response.json()) // Convertire la risposta in JSON
        .then(data => {
            // Visualizzare il risultato nella pagina
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Errore:', error);
        });
});
