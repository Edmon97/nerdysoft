var app = angular.module('sliderApp', ['rzModule', 'ui.bootstrap']);

app.controller('sliderCtrl', function ($scope, $interval, $http, $location) {
    var timer;
    var url = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/";

    $scope.minRangeSlider = {
        value: 100,
        options: {
            floor: 0,
            ceil: 1000,
            step: 1
        }
    };

    $scope.start = function () {
        if (angular.isDefined(timer)) return;
        timer = $interval(getRandomInt, 2000);
    }

    $scope.stop = function () {
        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        }
    }

    function getRandomInt() {
        $http.get(url + "api/Number/" + $scope.minRangeSlider.options.ceil)
            .then(function (response) {
                $scope.minRangeSlider.value = response.data;
            });
    }

});