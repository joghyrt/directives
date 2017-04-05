angular.module("MainApp").directive("inputMoney", ["$compile", function ($compile) {
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
	                          "<lable class='metro_label'>" +
		                          " {{label}} " +
	                          "</lable>" +
                          "</div>",
                link: function (scope, element, attrs) {            
                  
                  var attributes = $(element).prop("attributes");
                  var $input = $(element).find("input");

                  $.each(attributes, function () {
                    var isProperAttribute = this.name !== "ng-model" && 
                                            this.name !== "class" && 
                                            this.name !== "lable";
                      if (isProperAttribute) {
                          $input.attr(this.name, this.value);
                      }
                  });

                  $compile($input)(scope);
                }
            };
        }
    ]);