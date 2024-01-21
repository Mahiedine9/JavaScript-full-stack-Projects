const ResponseBuilder = require("./ResponseBuilder");
const { readFileSync, accessSync } = require('fs');

class FileResponseBuilder extends ResponseBuilder{
    constructor(request, response, statusCode, contentType){
        super(request, response, statusCode, contentType);
    }

    handleRequest() {
        super.handleRequest();  
    }

    buildHeader() {
        super.buildHeader();
    }


    buildBody() {
        const fullPath = `.${this.getUrl().pathname}`; 
        try {
            accessSync(fullPath); 
            const content = readFileSync(fullPath);
            this.response.write(content);
        } catch (error) {
            this.response.statusCode = 404;
            this.response.write('Resource not found');
        }
    }
    

    buildFooter(){
        
        this.response.write(`<footer>`);
        this.response.write(`<p>Date et heure de construction : ${new Date().toLocaleString()}</p>`);        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

    
module.exports = FileResponseBuilder;
 