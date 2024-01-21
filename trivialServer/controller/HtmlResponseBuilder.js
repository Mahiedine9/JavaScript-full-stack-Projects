const ResponseBuilder = require('./ResponseBuilder');

class HtmlResponseBuilder extends ResponseBuilder {
    constructor(request, response, statusCode, htmlContent) {
        super(request, response, statusCode, htmlContent);
    }

    handleRequest() {
        this.buildHeader();
        this.buildBody();
        this.buildFooter(); 
        this.response.end();  
    }

    buildHeader() {
        super.buildHeader();
        this.response.write('<html>');
        this.response.write('<link href="./public/style/style.css" rel="stylesheet">');
        this.response.write('<head>');
        this.response.write('</head>');
        this.response.write('<body>');
        this.response.write('<h1>Hello, World!</h1>');       
    }


    buildBody() {
        const fullPath = this.getUrl().pathname;
        
        if (fullPath == '/first') {
            this.response.write(`<h2>welcome to first</h2>`);
        } else if (fullPath =='/second') {            
            this.response.write(`<h2>welcome to second</h2>`);
            this.response.write(`<img src="./public/img/timoleon_oceanie.jpg" alt="timoleon bien sur">`);
        }
    
    }
    

    buildFooter(){        
        this.response.write(`<footer>`);
        this.response.write(`<p>Date et heure de construction : ${new Date().toLocaleString()}</p>`);        this.response.write(`</footer>`);
        this.response.write('</body>');
        this.response.write('</html>');
    }

}

module.exports = HtmlResponseBuilder;