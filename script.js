Odocument.getElementById('cmdINGRESSO').addEventListener('click', function() {
    // URL del Google Apps Script
    
    const url = 'https://script.google.com/macros/s/AKfycbzNAAgn9ZYbB8A2zBoidfNM4GTcpq8lKnNd7eMJHLQkE5EsW9GHdrAfPqEAiBlqbC4K/exec?Nome=Carlo&InOut=IN
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
