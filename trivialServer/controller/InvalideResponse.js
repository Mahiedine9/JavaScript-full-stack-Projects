const ResponseBuilder = require('./ResponseBuilder');


class InvalideResponse extends ResponseBuilder{


    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, 'text/html');
        this.htmlContent = htmlContent;
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody(); 
        this.response.end();  
    }

    buildHeader() {
        this.response.statusCode = this.getStatusCode();
        this.response.setHeader( 'Content-Type' , 'text/html');
        this.response.write('<html>');
        this.response.write('<head></head>');
        this.response.write('<body>');
    }


    buildBody(){

        this.response.write('<h2>404 : page /chemin/non/valide not found</h2>')
        

    }






} 

module.exports = InvalideResponse;
