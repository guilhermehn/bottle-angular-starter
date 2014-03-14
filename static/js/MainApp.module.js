angular.module('MainApp', [])
  .run(['$rootScope', function ($rootScope) {
    $rootScope.$scopeExtend = function (obj, cb) {
      $rootScope = angular.extend($rootScope, obj)

      if (cb) {
        cb()
      }
    }
  }])
