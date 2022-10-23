const products=require('../data/product')

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(products)
    
    })
    
}

function findById(id){
    console.log(id)
    return new Promise((resolve, reject) => {
        resolve(products.find((product)=>product.id === id))
    
    })
    
}


module.exports = {findAll,findById}
