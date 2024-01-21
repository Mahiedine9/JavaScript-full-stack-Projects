const ResponseBuilder = require('./ResponseBuilder');

class JsonResponseBuilder extends ResponseBuilder{

    constructor(request, response, statusCode, jsonData){
        super(request, response, statusCode, jsonData);
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.response.end();
    }

    buildHeader() {
        super.buildHeader;      
    }

    buildBody(){
        const params = this.getUrl().searchParams;
        const data = {};
        params.forEach((value, key) => {
            data[key] = value;
        });
        data.date = new Date().toISOString();
        this.response.write(JSON.stringify(data)); 
    }


}

module.exports = JsonResponseBuilder;