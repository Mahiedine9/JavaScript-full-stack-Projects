export default class ResponseBuilder{
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

    }

    buildBody(){

    }
    getUrl(){
        return this.#url;
    }

    sendResponse(){
        this.buildHeader();
        this.buildBody();
        this.buildFooter();
        this.response.end();
    }

}