angular.module("MainApp").directive("inputText", ["directivesService", "configService", function (directivesService, configService) {

            var inputTemplatePath = configService.getInputTemplatePath();

            return {
                restrict: "E",
                transclude: true,
                replace: true,
                scope: {
                  label: "@",
                  ngModel: "="
                },
                templateUrl: inputTemplatePath,
                link: function (scope, element, attrs) {            
                  
                   directivesService.copyAttributes(element, scope);

                }
            };
        }
    ]);