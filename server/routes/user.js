module.exports = function(workify){

	workify.get('/user', function(req, res, next){

		res.send('User Route!');
		next();
		
	});

}