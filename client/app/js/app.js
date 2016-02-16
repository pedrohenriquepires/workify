(function(){
	"use strict";

	angular.module("WorkifyApp")
		.run([
			"$log",
			"$filter",
			function($log, $filter){
				$log.debug($filter("translate")("Workify initialized"));
			}
		])
}());