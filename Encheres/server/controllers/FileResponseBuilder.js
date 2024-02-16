const responseBuilder = require("./responseBuilder");
const { readFileSync, accessSync } = require('fs');


class FileResponseBuilder extends responseBuilder {
    constructor(request, response, statusCode, contentType) {
        super(request, response, statusCode, contentType);
    }
   

    handleRequest() {
        this.buildBody();
        this.response.end();
    }



    buildBody() {
        const fullPath = `.${this.getUrl().pathname}`;
        try {
            accessSync(fullPath);
            super.buildHeader();
            const content = readFileSync(fullPath);
            this.response.write(content);
        } catch (error) {
            this.response.statusCode = 404;
            this.response.write('Resource not found');
        }
    }


}

module.exports = FileResponseBuilder;
