angular.module("MainApp").service("configService", [ function () {
            var self = this;

            self.getInputTemplatePath = function () {
              return "./templates/inputTemplate.html";
            };

            return self;
        }
    ]);