var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Tests;
  (function(Tests) {

    // SetupTestData class to set all our default mock data
    var SetupTestData = (function() {
      function SetupTestData() {}
      SetupTestData.app = angular.module("testFakeApiCall", ["starter.angular.component"]);
      SetupTestData.backendPathHttp = "/hiHttp";
      SetupTestData.httpMethod = "GET";
      SetupTestData.backendResponse = { result: "OK" };
      return SetupTestData;
    })();

    describe("appCall service", function() {
      var _$httpBackend, _fakeApiCall;
      beforeEach(module("testFakeApiCall"));
      beforeEach(inject(function($httpBackend, fakeApiCall) {
        _$httpBackend = $httpBackend;
        _fakeApiCall = fakeApiCall;
      }));

      it("testNgHttpRequest mock backend should work", function() {
        var apiData;
        // setup our fake backend to listen for angular's $http 'GET' requests on '/hi'
        _$httpBackend.when(SetupTestData.httpMethod, SetupTestData.backendPath).respond(SetupTestData.backendResponse);
        _fakeApiCall.testNgHttpRequest()
          .then(function(data) { apiData = data; })
          .catch(function(error) { console.log(error); });
        _$httpBackend.flush();
        expect(apiData.result).toBe(SetupTestData.backendResponse.result);
      });

      it("testAjaxRequest mock backend should work", function() {
        jasmine.Ajax.install();
        var doneFn = jasmine.createSpy("ajaxRequestWorked"),
            successCallback = function (data) { doneFn(data); },
            errorCallback = function (error) { console.log(error); };
        _fakeApiCall.testAjaxRequest(successCallback, errorCallback);
        jasmine.Ajax.requests.mostRecent().respondWith({
            "status": 200,
            "contentType": "application/json",
            "responseText": SetupTestData.backendResponse
        });
        expect(doneFn).toHaveBeenCalledWith(SetupTestData.backendResponse);
        jasmine.Ajax.uninstall();
      });

    });
    angular.noop(Tests);

  })(Tests = StarterAngularComponent.Tests || (StarterAngularComponent.Tests = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
