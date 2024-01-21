const JsonResponseBuilder = require("./JsonResponseBuilder");


class JsonRandomResponse extends JsonResponseBuilder{

    constructor(request, response, statusCode, jsonData){
        super(request, response, statusCode, jsonData);
    }
    
    handleRequest(){
        super.handleRequest();
    }
    
    buildHeader() {
        super.buildHeader();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    buildBody(){
        const data = {
            randomValue: this.getRandomArbitrary(0,100)
        };
        const jsonString = JSON.stringify(data);
        this.response.write(jsonString); 
    } 

} 

module.exports = JsonRandomResponse;