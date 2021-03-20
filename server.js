const express = require ('express') ;
const mongoose = require ('mongoose');
const cors = require ('cors');
const requireDir = require('require-dir');

//iniciando app
const app = express();

//cors serve para permitir que outros dominios acessem no api
//npm install cors 
app.use(cors());

//as req e res são em formato json
app.use(express.json());

//iniciando Mongo
mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/Models');

//rota principal

app.use('/crud', require('./src/routes'));

app.listen(3001);

