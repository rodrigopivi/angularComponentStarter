var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Tests;
  (function(Tests) {

    // SetupTestData class to set all our default mock data
    var SetupTestData = (function() {
      function SetupTestData() {}
      SetupTestData.app = angular.module("testFilters", ["starter.angular.component"]);
      SetupTestData.firstWordFilterFullText = "Lorem.ipsum.ad.his.scripta.blandit.partiendo";
      SetupTestData.firstWordSeparator = ".";
      SetupTestData.firstWordResult = "Lorem";
      return SetupTestData;
    })();

    describe("firstWord filter", function() {
      var _$filter;
      beforeEach(module("testFilters"));
      beforeEach(inject(function($filter) {
        _$filter = $filter;
      }));
      it("should return the first word", function() {
        var result = _$filter('firstWord')(SetupTestData.firstWordFilterFullText, SetupTestData.firstWordSeparator);
        expect(result.toString()).toBe(SetupTestData.firstWordResult);
      });
    });
    angular.noop(Tests);

  })(Tests = StarterAngularComponent.Tests || (StarterAngularComponent.Tests = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
