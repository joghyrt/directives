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
                  var $element = angular.element(element);
                  var $input = $element.find("input");

                  $input.on("focusin", function () {
                    $element.addClass("used");
                  });

                  $input.on("focusout", function () {
                    if (!scope.ngModel.length > 0) {
                      $element.removeClass("used");
                    }
                  });

                  $element.addClass("money-input");
                  $element.find("label").addClass("money-input");
                  $input.addClass("money-input");

                  directivesService.copyAttributes(element, scope);

                }
            };
        }
    ]);