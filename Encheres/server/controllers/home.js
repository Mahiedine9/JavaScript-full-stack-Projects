const responseBuilder = require('./responseBuilder');
const { readFileSync, accessSync } = require('fs');
const path = require('path');


class home extends responseBuilder {
    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, htmlContent);
    }

    handleRequest() {
        this.buildBody();
        this.buildFooter(); 
        this.response.end();  
    }


    buildBody() {
        const fullPath = './public/html/home.html';
        try {
            accessSync(fullPath);
            const content = readFileSync(fullPath);
            this.response.write(content);
        } catch (error) {
            this.response.statusCode = 404;
            this.response.write('Error, Resource not found');
        }
    }
    
    buildFooter(){        
        this.response.write(`<footer>`);
        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

module.exports = home;