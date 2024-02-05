const about = require('./about');
const InvalideResponse = require('./InvalideResponse');
const auctioneer = require('./auctioneer');
const home = require('./home');
const bidder = require('./bidder');



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
        if (this.#url == '/' ){
            this.#responseBuilder = new home(this.#request, this.#response, 200, 'text/html');
        } 

        if (this.#url == '/about') {
            this.#responseBuilder = new about(this.#request, this.#response, 200, 'text/html');
        }

        else if (this.#url == '/auctioneer') {
            this.#responseBuilder = new auctioneer(this.#request, this.#response, 200, 'text/html');
        }

        else if (this.#url == '/bidder') {
            this.#responseBuilder = new bidder(this.#request, this.#response, 200, 'text/html');
        }
        
        else{
            this.#responseBuilder = new InvalideResponse(this.#request, this.#response, 200, 'text/html');
        } 

        

        
        

        this.#responseBuilder.handleRequest();      
    }
}
module.exports = responseController;