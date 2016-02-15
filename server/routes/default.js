module.exports = function(workify){

	workify.get('/', function(req, res, next){
		res.send('Workify!');
		next();
	});

}