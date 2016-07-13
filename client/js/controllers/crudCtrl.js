'use strict';

let app = angular.module('myApp');

app.controller('crudCtrl', function($scope, Crud) {

  $scope.cruds = [];

  Crud.getAll()
  .then(res =>{
    $scope.cruds = res.data;
    console.log("$scope.cruds:", $scope.cruds);
  })
  .catch(err =>{
    console.log("err: ", err);
  })

  $scope.addCrud = () =>{
    Crud.addCrud($scope.newItem)
    .then(crud =>{
      $scope.cruds.push(crud);
      $scope.newItem = {};
    })
    .catch(err=>{
      console.log("error: ", err );
    });
  }


  $scope.deleteCrud = (ind, crud) =>{
    console.log("crud:", crud)
    Crud.deleteCrud(crud._id)
    .then(crud => {
      $scope.cruds.splice(ind,1);
    })
    .catch(err=>{
      console.log("error: ", err );
    });
  }

  $scope.showUpdateForm = (index, crud) =>{
    console.log("index: ", index);
    console.log("crud: ", crud);
    $scope.showUpdate =true;
    $scope.updateItem = crud;
    $scope.updateIndex = index;
  }

  $scope.updateCrud= () =>{
    $scope.showUpdate =false;
    Crud.updateCrud($scope.updateItem._id, $scope.updateItem)
    .then(crud =>{
      console.log("update apt:" , $scope.updateItem._id, " , " , $scope.updateItem);
    })
    .catch(err=>{
      console.log("error: ", err );
    });
  }

});
