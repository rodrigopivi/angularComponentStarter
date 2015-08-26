var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";

  var Modules = (function() {
    function Modules() {}
    Modules.customDirectives = angular.module("customDirectives", []);
    Modules.customFilters = angular.module("customFilters", []);
    Modules.customServices = angular.module("customServices", []);
    Modules.main = angular.module("starter.angular.component", [
      "customDirectives",
      "customFilters",
      "customServices"
    ]);
    return Modules;
  })();

  StarterAngularComponent.Modules = Modules;
})(StarterAngularComponent || (StarterAngularComponent = {}));
