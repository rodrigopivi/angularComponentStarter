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
    function() { return new TestAppController(); }
  ]);

})(TestApp || (TestApp = {}));
