var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('index', {
    'title': 'dev4cloud',
    'message': 'Welcome to \"Software Development for Cloud Computing\".'
  })
});

app.listen(process.env.PORT || 8088)
