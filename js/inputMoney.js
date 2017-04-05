angular.module("MainApp").directive("inputMoney", ["directivesService", function (directivesService) {
            return {
                restrict: "E",
                transclude: true,
                replace: true,
                scope: {
                  label: "@",
                  ngModel: "="
                },
                template: "<div class='dollar-sign input_container'>"  +
							              "<input type='text' ng-class='{ used: ngModel.length > 0 }' ng-model='ngModel' />" +
	                          "<label class='container_label'>" +
		                          " {{label}} " +
	                          "</label>" +
                          "</div>",
                link: function (scope, element, attrs) {            

                  directivesService.copyAttributes(element, scope);

                }
            };
        }
    ]);