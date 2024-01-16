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
        try {
            this.prepareResponse();
            this.buildResponse();
            
        } catch (error) {
            this.handleInvalidRequest();
        }

    }


    prepareResponse() {
        this.response.statusCode = 200;
        this.response.setHeader( 'Content-Type' , contentType);
        if (contentType == 'text/html'){
            this.response.write('<html>');
            this.response.write('<head></head>');
            this.response.write('<body>');
            this.response.write('<h1>Hello, World!</h1>');
            this.response.write('</body>');
            this.response.write('</html>');
        } else if (contentType === 'application/json') {
            // Gérer le contenu JSON si nécessaire
            const jsonData = { message: 'Hello, World!' };
            this.response.write(JSON.stringify(jsonData));
        }
    }
    
    handleInvalidRequest() {
        this.response.statusCode = 404;
        this.response.setHeader( 'Content-Type' , text/plain);
        this.response.write('Invalid Request');
        this.response.end();

    }

    buildResponse(){
  
    }
    









} 