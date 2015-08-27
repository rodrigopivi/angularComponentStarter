var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Base;
  (function(Base) {

    var ExamComponentApiService = (function() {
      // Constructor fn
      function ExamComponentApiService($http, $rootScope) {
        var currentCount; // currentCount is undefined until we get api data
        // First initialization for currentCount
        syncWithStoredCount();

        this.getCurrentCount = function() { return currentCount; };
        this.syncWithStoredCount = syncWithStoredCount;
        this.incrementCount = function () { // Can only increment if we have some initial value
          if (currentCount !== undefined) {
            currentCount++;
            $rootScope.$broadcast("examComponent:updateCount");
          }
        };

        // Functions
        function syncWithStoredCount() {
          $http.get("/demo/getStoredCount.json")
            .success(function(data) {
              currentCount = data.count;
              $rootScope.$broadcast("examComponent:updateCount");
            }).error(function(error) { console.log(error); });
        }
      }
      ExamComponentApiService.$inject = ["$http", "$rootScope"];
      return ExamComponentApiService;
    })();
    Base.ExamComponentApiService = ExamComponentApiService;

    StarterAngularComponent.Modules.customServices.service("examComponentApi",
    ["$http", "$rootScope",
      function($http, $rootScope) {
        return new ExamComponentApiService($http, $rootScope);
      }
    ]);

  })(Base = StarterAngularComponent.Base || (StarterAngularComponent.Base = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
