// Create a web server that can respond to requests for /comments.json with a
// JSON representation of the comments list from the previous assignment.
// Use our new helper function serveJSON from the previous assignment to send
// back the comments as JSON.

var serveJSON = require('./serveJSON');

var comments = [
  {name: "John", comment: "I like this article!"},
  {name: "Tim", comment: "I hate this article!"},
  {name: "Lily", comment: "This article is OK."}
];

var http = require('http');
var server = http.createServer(function(req, res) {
  if (req.url === '/comments.json') {
    serveJSON(res, comments);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8080);
