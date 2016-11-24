angular
  .module('fbb', []).directive('denglu',function(){
  	  return {
  	  	 restrict:"EACM",
		 templateUrl:"../views/fbb.html",
		 replace:true
  	  }
  }).controller("sign",function($scope,$http){
	  	$scope.sign=function(){
	  		$http({
	  			url:"http://www.bugcenter.com.cn:1511/users/login",
	  			method:"post",
	  			data:$scope.updata
	  		}).success(function(e){
	  			alert("success")
	  			$scope.updata=e
	  		}).error(function(){
	  			alert("error")
	  		})
	  	}
  })