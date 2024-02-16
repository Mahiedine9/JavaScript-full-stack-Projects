const responseBuilder = require('./responseBuilder');

class about extends responseBuilder {
    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, htmlContent);
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.response.end();  
    }

    buildHeader() {
        super.buildHeader();
        this.response.write('<html>');
        this.response.write('<link href="./public/style/style.css" rel="stylesheet">');
        this.response.write('<head>');
        this.response.write('</head>');
        this.response.write('<body>');
        this.response.write('<h1>about page</h1>');       
    }


    buildBody() {
        
        
        this.response.write(`<h2>version : 1.0.0</h2>`);
        this.response.write(`<h2>auteur : Mahiedine Ferdjoukh</h2>`);
    }
    

    buildFooter(){        
        this.response.write(`<footer>`);
        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

module.exports = about;