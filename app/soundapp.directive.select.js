( function ( ) {
	"use strict";
	
	angular
		.module ( "soundapp" )
		.directive ( "selectList", [ SelectList ] );

	function SelectList ( $rootScope ) { 
		return { 
			restrict: "A", 
			scope: {
				selectList: '=', 
			}, 
			link: linkSelect, //controller: linkSelect, 
		}; 
	};

	function linkSelect ( $scope, $element, $attr, $ngModelCtrl ) {

		selectChildrens ( $scope, $element );
		clickChildrens ($scope,  $element );
		
	};

	function selectChildrens ( $scope, $element ) {
		$( $element.children ( " > *" ) ).filter ( function ( ) {
			if ( $( this ).text ( ) == $scope.selectList  ) {
				$element.prepend ( this );
			};
		} );
	};

	function clickChildrens ( $scope, $element ) {
		$element
			.children ( "> *" )
			.on ( "click", function ( ) {
				var $that = angular.element( this );
				$that.parent ( ).prepend ( $that );

				//set variable in scope
				$scope.selectList = $that.text ( );
				$scope.$apply ( );

				return false;
			} );
		return false;
	};



} ) ( );