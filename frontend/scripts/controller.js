app.controller("empCtrl",['empServices','$scope',function(empServices,$scope){
  $scope.fillIt=function(){
    alert('Please fill Form');
  };
  function reload(){
    empServices.getAllEmp().then(function(data){
      $scope.Employes = data.data.employees;
    });
  };
  reload();
  $scope.saveEmp = function(emp){
   empServices.saveEmp(emp).then(function(data){
     reload();
   });
   $scope.emp={};
   }
  $scope.delete = function(id){
    empServices.delete(id).then(function(data){
        reload();
    });

  }
  $scope.edit = function(id){
    empServices.getOneById(id).then(function(data){
      $scope.emp = data.data;
    });
  }
  $scope.update = function(emp){
    empServices.delete(emp.id).then(function(data){
        reload();
    });
    empServices.updateEmp(emp).then(function(data){
      reload();
    });
    $scope.emp={};
  }

  }

]);
