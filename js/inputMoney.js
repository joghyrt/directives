angular.module("MainApp").directive("inputMoney", ["directivesService", "configService", function (directivesService, configService) {

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

                  $(element).addClass("dollar-sign");

                  directivesService.copyAttributes(element, scope);

                }
            };
        }
    ]);