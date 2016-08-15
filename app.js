angular.module('ngFun', [])
  .filter('reverse', function() {
    return function(input) {
      input = input || '';
      var out = input.split("").reverse().join("");
      // uppercase only first letter
      out = out.toLowerCase();
      out = out[0].toUpperCase() + out.slice(1);
      return out;
    };
  })

  .controller('PokemonController', function($scope) {

    // $scope.sortType     = 'Ndex'; // set the default sort type
    // $scope.sortReverse  = false;  // set the default sort order
    // $scope.searchName   = '';     // set the default search/filter term



    $scope.pokemons = [
      {
        "Ndex": "25",
        "name": "Pikachu",
        "type": "Electric"
      },
      {
        "Ndex": "10",
        "name": "Caterpie",
        "type": 'Bug'
      },
      {
        "Ndex": "39",
        "name": "Jigglypuff",
        "type": "Fairy"
      },
      {
        "Ndex": "94",
         "name": "Gengar",
        "type": "Ghost"
      },
      {
        "Ndex": "143",
        "name": "Snorlax",
        "type": "ß"
      }
    ];

    $scope.addRow = function(){
      $scope.name = $scope.name.split("").reverse().join("");
    	$scope.pokemons.push({ 'Ndex':$scope.Ndex, 'name': $scope.name, 'type':$scope.type });
    	$scope.Ndex='';
    	$scope.name='';
    	$scope.type='';
    };

    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
       $scope.editorEnabled = true;
       $scope.editableField = $scope.pokemons.name;
     };

    $scope.disableEditor = function() {
      $scope.editorEnabled = false;
    };

    $scope.save = function() {
     $scope.pokemons.name = $scope.editableField;
     $scope.disableEditor();
   };



    $scope.catchPhrase = "gotta catch 'em all!";


  });
