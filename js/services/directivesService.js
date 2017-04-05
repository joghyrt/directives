angular.module("MainApp").service("directivesService", ["$compile", function ($compile) {
            var self = this;

            self.copyAttributes = function (element, scope) {

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
                  
            };

            return self;
        }
    ]);