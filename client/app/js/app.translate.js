(function(){
	"use strict";

	angular.module("WorkifyApp")
	.config(["$translateProvider", function ($translateProvider) {
		$translateProvider.translations("en", {
		});

		$translateProvider.registerAvailableLanguageKeys(["en"], {
			"*"	: "en", // default system lang
		})
		.determinePreferredLanguage()
		.useSanitizeValueStrategy(null);
	}]);
}());