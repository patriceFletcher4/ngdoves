
(function(){
  angular.module('ngdoves') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'DoveService'];

  function MainController($scope, DoveService){
   $scope.message = 'Prince sings, When Doves cry';

   var doves;
   DoveService.readAll()
              .then(function(){
              todos = DoveService.doves
               console.log(doves);
              });

  }
})();
