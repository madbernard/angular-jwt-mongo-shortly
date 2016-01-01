angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  angular.extend($scope, Links);
  $scope.getLinks().then(function(fetchedLinks){
    $scope.data.links = fetchedLinks;
    $scope.signout = Auth.signout;
  });
});
