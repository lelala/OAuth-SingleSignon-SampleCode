var http = require( 'http' );
var port = 1337;

http.createServer( function ( req, res ) {
    res.end("test");
    switch( require('url').parse(req.url).pathname){
        case '/OAuthCallBack':
            require('./oAuthCallBack.js').oAuthCallBack(req,res);
            break;
        default:
            require('./default').default(req,res);
            break;
    }
}).listen( port );