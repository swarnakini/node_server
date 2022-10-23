const products=require('../data/product')

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(products)
    
    })
    
}

module.exports = {findAll}
