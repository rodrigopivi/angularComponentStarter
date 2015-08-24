var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Base;
  (function(Base) {

    // Filter that returns the first word using space as default word separator
    StarterAngularComponent.Modules.customFilters.filter("firstWord", function() {
      return function(input, wordsSeparator) {
        var ret = "";
        if (wordsSeparator === undefined) {
          wordsSeparator = " ";
        }
        if (input && input.length) {
          ret = input.split(wordsSeparator)[0];
        }
        return ret;
      };
    });
    angular.noop(Base);

  })(Base = StarterAngularComponent.Base || (StarterAngularComponent.Base = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
