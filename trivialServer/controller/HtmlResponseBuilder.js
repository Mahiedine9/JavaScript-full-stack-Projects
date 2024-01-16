class HtmlResponseBuilder extends ResponseBuilder {
    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, 'text/html');
        this.htmlContent = htmlContent;
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.sendResponse();   
    }

    buildHeader() {
        this.response.statusCode = 200;
        this.response.setHeader( 'Content-Type' , this.htmlContent);
        this.response.write('<html>');
        this.response.write('<head></head>');
        this.response.write('<body>');
        this.response.write('<h1>Hello, World!</h1>');       
    }


    buildBody(){

        if (this.#url.pathname === '/first') {
            this.response.write(`<h2>welcome to first</h2>`);
        }

        else if (this.#url.pathname === '/second') {
            this.response.write(`<h2>welcome to second</h2>`);
        }
        this.response.end();

    }

    buildFooter(){
        
        this.response.write(`<footer>`);
        this.response.write(`<p>Date et heure de construction : ${new Date().toLocaleString()}</p>`);        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}