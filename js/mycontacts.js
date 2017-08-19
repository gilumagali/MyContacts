  var app = angular.module("mycontacts",[]);
  angular.module('mycontacts').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
        app.controller("myCtrl",function($scope, $http){

$http({
    method: 'GET',
    url: "https://gilscontacts.azurewebsites.net/api/HttpTriggerJS1"
})
.then(function(data) {
    console.log(data);
});



           $scope.contacts = [{name:"Tom",tel:"012-345-6789"},
                {name:"Jerry",tel:"012-345-6789"},
                {name:"Philip",tel:"012-345-6789"}];

  

            $scope.addnewcontact = function(){
                return {
                    name: $scope.newName,
                    tel:$scope.newTel
                }
            }
            $scope.addItem = function(){
             for(var i=0;i<$scope.contacts.length;i++){
                 if($scope.contacts[i].name == $scope.addnewcontact().name){
                    alert("name alredy exist");
                    return false;
                 }
                    else if($scope.contacts[i].tel == $scope.addnewcontact().tel){
                     alert("telphone number alredy exist");
                     return false;
                 }
             }
             $scope.contacts.push($scope.addnewcontact());

              }
                

            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        })