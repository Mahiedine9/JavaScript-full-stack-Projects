const responseBuilder = require("./responseBuilder");
const { readFileSync, accessSync } = require('fs');
const path = require('path');


class auctioneer extends responseBuilder{
    constructor(request, response, statusCode, contentType){
        super(request, response, statusCode, contentType);
    }


    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.response.end();
    }

    buildHeader() {
        super.buildHeader();
    }


    buildBody() {
        const fullPath = './public/commissaire-priseur.html';
        try {
            const content = readFileSync(fullPath);
            this.response.write(content);
        } catch (error) {
            this.response.statusCode = 404;
            this.response.write('Error, Resource not found');
        }
    }
    

    buildFooter(){
        
        this.response.write(`<footer>`);
        this.response.write(`<p>Date et heure de construction : ${new Date().toLocaleString()}</p>`); 
        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

    
module.exports = auctioneer;
 