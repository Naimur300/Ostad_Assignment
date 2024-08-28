const http = require("http")
const fs = require('fs');
const server = http.createServer(function(req , res) {

    if(req.url==="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("This is the Home Page")
        res.end()
    }
    if(req.url==="/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("This is the About Page")
        res.end()

    }
    if(req.url==="/file-write"){
           const error = fs.writeFileSync('demo.text' , 'hello world')
        if(error){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("File write failed")
            res.end()
        }
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("File write Success")
            res.end()
        }


    }
    if(req.url==="/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("This is the Contact Page")
        res.end()

    }



})

server.listen(5500 , function(){
    console.log("Listening on port 5500..... ")
})