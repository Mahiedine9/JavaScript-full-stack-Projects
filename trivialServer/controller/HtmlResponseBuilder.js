const ResponseBuilder = require('./ResponseBuilder');

class HtmlResponseBuilder extends ResponseBuilder {
    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, 'text/html');
        this.htmlContent = htmlContent;
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.response.end();  
    }

    buildHeader() {
        this.response.statusCode = 200;
        this.response.setHeader( 'Content-Type' , this.htmlContent);
        this.response.write('<html>');
        this.response.write('<head></head>');
        this.response.write('<body>');
        this.response.write('<h1>Hello, World!</h1>');       
    }


    buildBody(){

        if (this.getUrl().pathname === '/first') {
            this.response.write(`<h2>welcome to first</h2>`);
        }

        else if (this.getUrl().pathname === '/second') {
            this.response.write(`<h2>welcome to second</h2>`);
        }
        

    }

    buildFooter(){
        
        this.response.write(`<footer>`);
        this.response.write(`<p>Date et heure de construction : ${new Date().toLocaleString()}</p>`);        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

module.exports = HtmlResponseBuilder;