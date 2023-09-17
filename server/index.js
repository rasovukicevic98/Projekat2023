var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();


app.use(cors());
app.use(bodyParser.json());

const connection = require("./common/db-connection");

var apiRouter = require("./routes/api_router");
app.use("/api", apiRouter);

var oglasRouter = require("./routes/oglas_router");
app.use("/oglasi", oglasRouter);

var proizvodjacRouter = require('./routes/proizvodjac_router');
app.use("/proizvodjac", proizvodjacRouter);

var modelRouter = require('./routes/model_router');
app.use("/model", modelRouter);

var automobilRouter = require('./routes/automobil_router');
app.use("/automobil", automobilRouter);

var pregledOglasaRouter = require('./routes/pregledOglasa_router');
app.use("/pregledOglasa", pregledOglasaRouter);

var filtrirajPretraguRouter = require('./routes/filtrirajPretragu_router');
app.use("/filtrirajPretragu", filtrirajPretraguRouter);

var dodajOglasRouter = require('./routes/dodajOglas_router');
app.use("/dodajOglas", dodajOglasRouter);

var loginRouter = require('./routes/logIn_router');
app.use("/login", loginRouter);


var mojiOglasiRouter = require('./routes/mojiOglasi_router');
app.use("/mojiOglasi", mojiOglasiRouter);

var izmijeniOglasRouter = require('./routes/izmijeniOglas_router');
app.use("/izmijeniOglas", izmijeniOglasRouter);
connection.connect((err) => {
    if(err){
        console.log('Error while conecting to the database');
        console.log(err);
    }else{
        console.log('Connected to the database');
    }
})

app.listen(3000);