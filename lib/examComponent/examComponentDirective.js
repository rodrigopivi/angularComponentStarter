var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Base;
  (function(Base) {

    /* <exam-component></exam-component>
     */
    var ExamComponentDirective = (function() {
      function ExamComponentDirective(examComponentApi) {
        this.scope = {};
        this.restrict = "E";
        this.replace = false;
        this.transclude = false;
        this.templateUrl = "lib/examComponent/examComponentView.html";
        this.link = function($scope, $element, $attrs) {
          angular.noop($element, $attrs);
          syncCount();

          $scope.incrementCount = function() {
            examComponentApi.incrementCount();
          };
          // Event listeners
          var desregisterExamComponentListener = $scope.$on("examComponent:updateCount", syncCount);
          $scope.$on("$destroy", function() { desregisterExamComponentListener(); });
          // Functions
          function syncCount() { $scope.count = examComponentApi.getCurrentCount(); }
        };
      }

      ExamComponentDirective.$inject = ["examComponentApi"];
      return ExamComponentDirective;
    })();

    Base.ExamComponentDirective = ExamComponentDirective;
    StarterAngularComponent.Modules.customDirectives.directive("examComponent", [
      "examComponentApi",
      function(examComponentApi) {
        return new ExamComponentDirective(examComponentApi);
      }
    ]);

  })(Base = StarterAngularComponent.Base || (StarterAngularComponent.Base = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
