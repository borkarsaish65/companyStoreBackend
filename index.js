const cors = require("cors");

var express = require('express');
const companyController = require('./controller/company_data.controller');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    limit: '50mb',
    extended: true
}));


app.get('/list-company', companyController.listCompanyData)

app.post('/store-company', companyController.storeCompanyData)

app.post('/search-company', companyController.searchCompanyName)



app.all('*', (req, res) => {
   res.status(404).send({
    message:'Endpoint not found!'
   })
});

app.listen(port=8081, () =>
    console.log(`🚀 Server running on port ${port}!`)
);