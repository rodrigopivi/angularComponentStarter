var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Tests;
  (function(Tests) {

    var SetupTestData = (function() {
      function SetupTestData() {}
      SetupTestData.app = angular.module("testShowMoreOrLess", ["starter.angular.component"]);
      SetupTestData.text = "12345 abcde 67890";
      SetupTestData.maxLengthTestCases = [16, 17, 18];
      SetupTestData.template = '<show-more-or-less data-text="{{ truncateableText }}" data-max-length="{{ maxLength }}"></show-more-or-less>';
      SetupTestData.truncatedInnerText = "12345 abcde  ... [+] show more";
      SetupTestData.expandedInnerText = "12345 abcde 67890 [-] show less";
      return SetupTestData;
    })();

    describe("showMoreOrLess directive", function() {
      var _$compile, _$rootScope, _$timeout;
      beforeEach(module("testShowMoreOrLess"));
      beforeEach(inject(function($compile, $rootScope, $timeout) {
        _$compile = $compile;
        _$rootScope = $rootScope;
        _$timeout = $timeout;
      }));
      it("should truncate text, and show expected truncated inner text", function() {
        var scope = _$rootScope.$new(),
          element, isolatedScope;
        element = _$compile(SetupTestData.template)(scope);
        scope["truncateableText"] = SetupTestData.text;
        // First max length test case
        scope["maxLength"] = SetupTestData.maxLengthTestCases[0];
        scope.$digest();

        isolatedScope = element.children().scope();
        expect(element.text()).toBe(SetupTestData.truncatedInnerText);
        // Verify we can truncate this text for the initial test case (16 length)
        expect(isolatedScope.isTruncateable()).toBeTruthy();
        // Default state is collapsed
        expect(isolatedScope.text).toBe(SetupTestData.text);
        expect(isolatedScope.isTruncated).toBeTruthy(); // Initial state is to truncate
        isolatedScope.toggleCollapse(); // Expand the text
        _$timeout.flush();
        expect(element.text()).toBe(SetupTestData.expandedInnerText);
        expect(isolatedScope.isTruncated).toBeFalsy();
        // The second and third maxLength tests should not truncate
        scope["maxLength"] = SetupTestData.maxLengthTestCases[1];
        scope.$digest();
        expect(isolatedScope.isTruncateable()).toBeFalsy();
        expect(element.text().trim()).toBe(SetupTestData.text.trim());
        scope["maxLength"] = SetupTestData.maxLengthTestCases[2];
        scope.$digest();
        expect(isolatedScope.isTruncateable()).toBeFalsy();
        expect(element.text().trim()).toBe(SetupTestData.text.trim());
      });
    });
    angular.noop(Tests);

  })(Tests = StarterAngularComponent.Tests || (StarterAngularComponent.Tests = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
