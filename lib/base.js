var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";

  var Modules = (function() {
    function Modules() {}
    Modules.customDirectives = angular.module("customDirectives", []);
    Modules.customFilters = angular.module("customFilters", []);
    Modules.main = angular.module("starter.angular.component", [
      "customFilters",
      "customDirectives"
    ]);
    return Modules;
  })();

  StarterAngularComponent.Modules = Modules;
})(StarterAngularComponent || (StarterAngularComponent = {}));
