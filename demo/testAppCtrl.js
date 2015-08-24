var TestApp;
(function(TestApp) {
  "use strict";

  var TestAppController = (function() {
    function TestAppController() {}
    TestAppController.$inject = [];
    return TestAppController;
  })();

  TestApp.TestAppController = TestAppController;
  TestApp.Modules.testApp.controller("testAppController", [
    "$scope",
    function($scope) {
      return new TestAppController($scope);
    }
  ]);

})(TestApp || (TestApp = {}));
