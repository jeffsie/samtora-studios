var http = require('http');
var port = process.env.PORT || 3000;
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\nGitHub connection successful.',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen(port, () => {
    console.log('Server running at http://localhost:' + port + '/');
});