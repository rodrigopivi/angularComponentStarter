var TestApp;
(function(TestApp) {
  "use strict";

  var Modules = (function() {
    function Modules() {}
    // ========== initialize features modules ========== //
    Modules.testApp = angular.module("testApp", []);
    // ========== initialize main module ========== //
    Modules.app = angular.module("app", [
      "starter.angular.component",
      "testApp"
    ]);
    return Modules;
  })();

  TestApp.Modules = Modules;
})(TestApp || (TestApp = {}));
