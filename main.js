// gekopieerd van jonas cristens en naar eigen gebruik proberen omvormen uit noodzaak
// ik probeer tegen woensdag iets deftig in elkaar te steken
// dit is slechts voor 1 van mijn resources


// inladen van de dependencies - externe dependencies inladen via het commando:
// npm install express --save
// npm install body-parser --save

var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen

//aanwezigheden
// Toevoegen van de code van de dalAanwezigheid vervangt onze
// onze lokale 'datastore'. deze variable bewaart onze state.
var dalAanwezigheid = require("./AanwezighedenStorage.js");


// aanmaken van de webserver variabele
var app = express();
// automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
app.use(parser.json());

// opvangen van een GET op /aanwezigheden.
app.get("/aanwezigheden", function (request, response) {
    //stuurt als antwoord de inhoud van onze database. Standaard in json terug gestuurd.
    response.send(dalAanwezigheid.listAllProducts());
});

// opvangen van een GET op /aanwezigheden/{aanwezigheidsId}.
app.get("/aanwezigheden/:id", function (request, response) {
    var aanwezigheid = dalAanwezigheid.findProduct(request.params.id);
    if(aanwezigheid) {
        response.send(aanwezigheid);
    }else {
        response.status(404).send();
    }
});


// de server starten op poort 8000 (bereikbaar op http://localhost:8000 )
app.listen(8000);
// lijntje voor te zien dat alles is opgestart.
console.log("Server started");