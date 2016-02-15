var neo4j = require('neo4j');

module.exports = function(workify){

	workify.neo4j = new neo4j.GraphDatabase('http://neo4j:workify@localhost:7474');

}