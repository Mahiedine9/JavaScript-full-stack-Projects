class ResponseBuilder{
    #request; 
    #response;
    #url;
    #statusCode;
    #contentType;
    
    constructor(request, response, statusCode, contentType){
        this.#request = request;
        this.#response = response;
        this.#statusCode = statusCode;
        this.#contentType = contentType;
        this.#url = new URL(request.url,`http://${request.headers.host}`);   
    }

    get response() {
        return this.#response;
    }

    buildHeader(){
        this.response.statusCode = this.getStatusCode();
        this.response.setHeader( 'Content-Type' , this.#contentType);
    }

    buildBody(){
    }

    
    getUrl(){
        return this.#url;
    }

    getStatusCode(){
        return this.#statusCode;
    }



}

module.exports = ResponseBuilder;