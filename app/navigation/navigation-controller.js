(function(){
angular.module('SocialNetwork')
    .controller('NavigationController',['$scope','$state','$http',function($scope,$state,$http){
        $scope.logUser=function(){
            $http.post('api/user/login',$scope.login).success(function(response){
                    localStorage.setItem('User-Data',JSON.stringify(response));
            }).error(function(error)
            {
                console.log(error);
            });
        }

    }])
}());