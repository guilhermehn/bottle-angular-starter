angular.module('MainApp.directives', [])
  .directive('ngMinlength', [function () {
    return {
        require: 'ngModel'
      , restrict: 'A'
      , link: function (scope, elem, attrs, ctrl) {
          function minlength (val) {

          }

          ctrl.$parsers.push(minlength)
        }
    }
  }])