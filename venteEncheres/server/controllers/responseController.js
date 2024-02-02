const about = require('./about');
const InvalideResponse = require('./InvalideResponse');


class responseController{

    #responseBuilder;
    #url;
    #request;
    #response;


    constructor(url, request, response){
        this.#url = url;
        this.#request = request;
        this.#response = response;
    }


    handleRequest(){
        if (this.#url == '/about') {
            this.#responseBuilder = new about(this.#request, this.#response, 200, 'text/html');
        }

        if (this.#url == '/auctioneer ') {
            this.#responseBuilder = new auctioneer(this.#request, this.#response, 200, 'text/html');
        }
        else{
            const contenuHtml = '<h1>err</h1>';
            this.#responseBuilder = new InvalideResponse(this.#request, this.#response,404, contenuHtml);
        }

        this.#responseBuilder.handleRequest();      
    }



































}
module.exports = responseController;