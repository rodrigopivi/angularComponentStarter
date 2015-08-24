var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Base;
  (function(Base) {

    /* <show-more-or-less data-text="{{ getInnerText() }}"
     *                    data-max-length="10">
     * <show-more-or-less>
     */
    var ShowMoreOrLess = (function() {
      function ShowMoreOrLess($timeout) {
        this.scope = {
          text: "@",
          maxLength: "@",
          showMoreText: "@",
          showLessText: "@",
          truncateSymbol: "@"
        };
        this.restrict = "E";
        this.replace = false;
        this.transclude = false;
        this.templateUrl = "lib/directives/showMoreOrLess/showMoreOrLess.html";
        this.link = {
          post: function($scope, $element, $attrs) {
            angular.noop($element, $attrs);
            if ($scope.showMoreText === undefined) {
              $scope.showMoreText = "[+] show more";
            }
            if ($scope.showLessText === undefined) {
              $scope.showLessText = "[-] show less";
            }
            if ($scope.truncateSymbol === undefined) {
              $scope.truncateSymbol = " ...";
            }
            $scope.isTruncateable = function() {
              return $scope.text.length > parseInt($scope.maxLength, 10);
            };
            $scope.isTruncated = true;
            $scope.toggleCollapse = function() {
              $timeout(function() {
                $scope.isTruncated = !$scope.isTruncated;
                $scope.$apply();
              });
            };
            $scope.getTruncatedString = function() {
              var maxLength = parseInt($scope.maxLength, 10) - $scope.truncateSymbol.length,
                ret = $scope.text;
              if (!$scope.isTruncateable() || !$scope.isTruncated) {
                ret = $scope.text;
              } else if (maxLength <= 0) {
                ret = $scope.truncateSymbol;
              } else if ($scope.text.length > maxLength) {
                ret = $scope.text.substring(0, maxLength) + $scope.truncateSymbol;
              }
              return ret;
            };
          }
        };
      }
      ShowMoreOrLess.$inject = ["$timeout"];
      return ShowMoreOrLess;
    })();
    Base.ShowMoreOrLess = ShowMoreOrLess;

    StarterAngularComponent.Modules.customDirectives.directive("showMoreOrLess", [
      "$timeout",
      function($timeout) {
        return new ShowMoreOrLess($timeout);
      }
    ]);

  })(Base = StarterAngularComponent.Base || (StarterAngularComponent.Base = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
