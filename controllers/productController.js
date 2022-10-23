const ProductModel =  require('../models/productModel.js');

async function getAll(req,res){
    try {
        let products= await ProductModel.findAll();
        res.writeHead(200,{'content-type': 'application/json'})
        res.end(JSON.stringify(products))
        
    } catch (error) {
        
    }
}

async function getById(req,res,id){
    try {
        let product = await ProductModel.findById(id);
        console.log(product)
        
        if(product){
            res.writeHead(200,{'content-type': 'application/json'})
            res.end(JSON.stringify(product))
            
        }
        else{
            res.writeHead(404,{'content-type': 'application/json'})
            res.end(JSON.stringify({message : 'not found'}))

        }
        
    } catch (error) {
        
    }
}

module.exports = {getAll,getById}