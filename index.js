const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/docker', function(req,res){
  res.sendFile(path + 'docker.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Listening on port 8080!')
})