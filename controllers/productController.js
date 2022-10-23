const ProductModel =  require('../models/productModel.js');

async function getAll(req,res){
    try {
        let products= await ProductModel.findAll();
        res.writeHead(200,{'content-type': 'application/json'})
        res.end(JSON.stringify(products))
        
    } catch (error) {
        
    }
}

module.exports = {getAll}