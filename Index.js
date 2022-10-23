const http = require('http');
const Productcontroller = require('./controllers/productController');

const port = 3000;

const server=http.createServer(function(req, res) {
    console.log('ye')
    if(req.url === '/api/products' && req.method === 'GET') {
       Productcontroller.getAll(req,res);
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id=req.url.split('/')[3];
        console.log(id)
        Productcontroller.getById(req,res,id);
    } else {
        res.writeHead(404,{'content-type': 'application/json'})
        res.end(JSON.stringify ({message :'Route not found'}))
    }
});

server.listen(port,function(error) {
    if(error){
        console.log('something went wrong', error);
    } else {
        console.log('Server is up');
    }

});
