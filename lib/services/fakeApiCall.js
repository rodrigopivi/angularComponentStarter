var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Base;
  (function(Base) {

    // FakeApiCall class will be exported as an angular service
    var FakeApiCall = (function() {
      function FakeApiCall($http, $q) {

        // Call a backend method using angular's $http service
        this.testNgHttpRequest = function() {
          var deferred = $q.defer();
          $http.get("/hiHttp")
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(error) {
              deferred.reject(error);
            });
          return deferred.promise;
        };

        // Call a backend method using ajax
        this.testAjaxRequest = function(onSuccessCallback, onErrorCallback) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/hiAjax", true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) { // NOTE: status 4 - request finished and response is ready
              if (xhr.status === 200) { onSuccessCallback(xhr.responseText); } // NOTE: status 200 - "OK"
              else { onErrorCallback(xhr); }
            } else { onErrorCallback(xhr); }
          };
          xhr.onerror = function() { onErrorCallback(xhr); };
          xhr.send();
        };

      }
      FakeApiCall.$inject = ["$http", "$q"];
      return FakeApiCall;
    })();
    Base.FakeApiCall = FakeApiCall;

    StarterAngularComponent.Modules.customServices.service("fakeApiCall", ["$http", "$q",
      function($http, $q) {
        return new FakeApiCall($http, $q);
      }
    ]);

  })(Base = StarterAngularComponent.Base || (StarterAngularComponent.Base = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
