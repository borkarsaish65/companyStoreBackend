const companyDataModel = require('../model/company_data.model');
const axios = require('axios');
const FormData = require('form-data');


class CompanyDataController{

    listCompanyData = async(req,res)=>{
        let companyList = await companyDataModel.findAll();

        res.status(200).send({
            companyList
        })

    }
    storeCompanyData = async(req,res)=>{

        let {
            name,cin
        } = req.body;
        
        let companyList = await companyDataModel.insert({
            name,
            cin
        });

        res.status(200).send({
            response:1,
            message:'company added successfully!'
        })
        
    }
    searchCompanyName = async(req,res)=>{

        let {
            search
        } = req.body;

        var data = new FormData();

        data.append('search', search);

        data.append('filter', 'company');

        var config = {
            method: 'post',
            url: 'https://www.zaubacorp.com/custom-search',
            data : data
          };
          
          axios(config)
          .then(function (response) {
             res.status(200).send(response.data);
          })
          .catch(function (error) {
              console.log(error)
          });


    }

}

module.exports = new CompanyDataController;