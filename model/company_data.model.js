const query = require('../db')

class CompanyDataModel{

    findAll = async()=>{

        let queryStatment = 'select * from company_data';
        let result = await query(queryStatment,[]);
        return result;

    }
    insert = async({name,cin})=>{
        let queryStatment = 'INSERT INTO company_data(name,cin) values ($1,$2)';
        let result = await query(queryStatment,[name,cin]);
        return result;

        
    }


}

module.exports = new CompanyDataModel;