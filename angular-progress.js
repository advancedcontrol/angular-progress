(function (angular) {
    'use strict';


    var module;
    try {
        module = angular.module('coUtils');
    } catch (e) {
        module = angular.module('coUtils', []);
    }


    module
    .directive('progress', function () {
        return {
            restrict: 'A',
            scope: {
                value: '=',
                total: '=',
                start: '=?'
            },
            template: '<div ng-style="percentage"></div>',
            link: function(scope, element) {
                element.addClass('co-progress');

                scope.start = scope.start || 0;

                scope.$watch('value', function (value) {
                    var range = scope.total - scope.start,
                        adjusted = parseFloat(value - scope.start),
                        point =  100.0 / parseFloat(range);

                    scope.percentage = {
                        width: point * adjusted + '%'
                    };
                });
            }
        };
    });

}(this.angular));
