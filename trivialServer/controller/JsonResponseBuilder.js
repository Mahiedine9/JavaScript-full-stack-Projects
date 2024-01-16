import ResponseBuilder from "./ResponseBuilder"

class JsonResponseBuilder extends ResponseBuilder{

    constructor(request, response, statusCode, jsonData){
        super(request, response, statusCode, 'application/json');
        this.jsonData = jsonData;
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.sendResponse();   
    }

    buildHeader() {
        this.response.statusCode = this.statusCode;
        this.response.setHeader('Content-Type', this.contentType);      
    }

    buildBody(){
        const params = this.url.searchParams;
        const data = {};
        params.forEach((value, key) => {
            data[key] = value;
        });
        data.date = new Date().toISOString();
        this.response.write(JSON.stringify(responseData)); 
    }


}