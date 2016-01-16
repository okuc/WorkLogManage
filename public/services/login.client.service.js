angular.module("loginapp")
  .service("loginService",["$http","$q",loginService]);

  function loginService($http,$q){
    function handleRequest(method,url,data){
        var defered = $q.defer();
        var config = {
          method:method,
          url:url
        };
        config.data = data;
        $http(config).success(function(data){
          defered.resolve(data);
        }).error(function(err){
            defered.reject(err);
        });
        return defered.promise;
    }
    return {
      login:function(data){
          return handleRequest("POST","/users/login",data);
      }
    }
  }
