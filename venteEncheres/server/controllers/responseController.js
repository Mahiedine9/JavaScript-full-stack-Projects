const about = require('./about');
const InvalideResponse = require('./InvalideResponse');
const auctioneer = require('./auctioneer');
const home = require('./home');
const bidder = require('./bidder');
const FileResponseBuilder = require('./FileResponseBuilder');
const { getContentTypeFrom } = require('./mimeTypes');



class responseController {
    #responseBuilder;
    #url;
    #request;
    #response;

    constructor(url, request, response) {
        this.#url = url;
        this.#request = request;
        this.#response = response;
    }

    handleRequest() {
        const contentType = getContentTypeFrom(this.#url);
        
        if (this.#url == '/') {
            this.#responseBuilder = new home(this.#request, this.#response, 200, 'text/html');
        } else if (this.#url == '/about') {
            this.#responseBuilder = new about(this.#request, this.#response, 200, 'text/html');
        } else if (this.#url == '/auctioneer') {
            this.#responseBuilder = new auctioneer(this.#request, this.#response, 200, 'text/html');
        } else if (this.#url == '/bidder') {
            this.#responseBuilder = new bidder(this.#request, this.#response, 200, 'text/html');
        } else if (this.#url.startsWith('/public')) {
            
            this.#responseBuilder = new FileResponseBuilder(this.#request, this.#response, 200, contentType);
        } else if (this.#url.startsWith('/scripts')) {
            const newUrl = '/public' + this.#url;
            this.#responseBuilder = new FileResponseBuilder(this.#request, this.#response, 200, contentType);
        } else {
            this.#responseBuilder = new InvalideResponse(this.#request, this.#response, 200, 'text/html');
        }

        this.#responseBuilder.handleRequest();
    }
}

module.exports = responseController;
