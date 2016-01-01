angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  angular.extend($scope, Links);
  $scope.signout = Auth.signout;
});

