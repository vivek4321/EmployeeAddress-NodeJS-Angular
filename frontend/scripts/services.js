app.service("empServices",['$http',function($http){
  var obj = {};

  obj.getAllEmp = function(){
    return $http.get('http://localhost:8889/api/allEmployees');
  };
  obj.getOneById = function(id){
    return $http.get('http://localhost:8889/api/empById/'+id);
  }

  obj.saveEmp = function(emp){
    return $http.post('http://localhost:8889/api/postEmp',emp).then(function(data){
      console.log(data.status);
    });
  };
  obj.updateEmp = function(emp){
    return $http.post('http://localhost:8889/api/updateEmp',emp).then(function(data){
      console.log(data.status);
    });
  }
  obj.delete = function(id){
    return $http.delete('http://localhost:8889/api/delete/'+id).then(function(data){
      console.log(data.status);
    });
  }
  return obj;
}]);
