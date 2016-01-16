angular.module('loginapp')
  .controller('LoginController', ['$scope', 'loginService', LoginController]);

function LoginController($scope, loginService) {
  $scope.userId = "";
  $scope.password = "";

  $scope.login = function() {

    if (!$scope.userId) {
      $scope.errTitle = "错误";
      $scope.errInfo = "请用入用户名！";
      $scope.displayOrHidden = {
        display: 'block'
      };
      return;
    }

    if (!$scope.password) {
      $scope.errTitle = "错误";
      $scope.errInfo = "请用入密码！";
      $scope.displayOrHidden = {
        display: 'block'
      };
      return;
    }

    $scope.editorMessage = '';

    var promise = loginService.login({
      "userId": $scope.userId,
      "password": $scope.password
    });
    promise.then(function (result) {
      if(result.err){
        $scope.errTitle = "错误";
        $scope.errInfo = result.err;
        $scope.displayOrHidden = {
          display: 'block'
        };
      }else{
      window.location.href="main.html"; 

      }
    }, function (error) {
        console.log(error);
    });
  };

}
