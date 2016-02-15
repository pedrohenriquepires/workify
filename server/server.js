var restify = require('restify'),
	path = require('path'),
	fs = require('fs');

/*
Create Server
*/
var workify = restify.createServer();

workify.use(restify.authorizationParser());

/*
Autoloaders
*/
//Config
var configPath = __dirname + '/config';
fs.readdirSync(configPath).forEach(function (file) {
  module.exports[path.basename(file, '.js')] = require(path.join(configPath, file))(workify);
});
//Middlewares
var configPath = __dirname + '/middlewares';
fs.readdirSync(configPath).forEach(function (file) {
  module.exports[path.basename(file, '.js')] = require(path.join(configPath, file))(workify);
});
//Routes
var routesPath = __dirname + '/routes';
fs.readdirSync(routesPath).forEach(function (file) {
  module.exports[path.basename(file, '.js')] = require(path.join(routesPath, file))(workify);
});

/*
Start Server
*/
workify.listen(8080, function() {
  console.log('Workify running at %s', workify.name, workify.url);
});