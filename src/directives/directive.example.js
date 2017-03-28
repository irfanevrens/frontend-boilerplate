let ExampleDirective = (app) {
    // app is angular.module here
    app.directive('exampleDirective', ['$interval',($interval) => {
        return {
            restrict: 'E',
            transclude: false,
            scope: {},
            templateUrl: '',
            link($scope,$elem,$attrs) => {
                scope.name = 'Jeff';
            }
        }
    }])
}

export {ExampleDirective};
