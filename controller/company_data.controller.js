const companyDataModel = require('../model/company_data.model');



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


}

module.exports = new CompanyDataController;