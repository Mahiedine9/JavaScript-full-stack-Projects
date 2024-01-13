export default class ResquestController{
    #request; 
    #response;
    #url;
    
    constructor(request, response){
        this.#request = request;
        this.#response = response;
        this.#url = new URL(request.url,`http://${request.headers.host}`);   
    }

    get response() {
        return this.#response;
    }

    handleRequest() {
        this.prepareResponse();
        this.buildResponse();
    }
    









} 