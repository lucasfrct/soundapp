( function ( ) {
	"use strict";
	
	angular
		.module ( "soundapp" )
		.directive ( "select", [ Select ] );

	function Select ( ) {
		return {
			restrict: "A",
			require: 'ngModel',
			scope: {
				ngModel: "="
			},
			link: linkScope,
		}
	};

	function linkScope ( $scope, $element, $attr, $ngModelCtrl ) {
		
		// Click uma única vez		
		$element.one ( "click", clickSelect );
			
		function clickSelect ( ) {
			angular.element( this ).children ( "> li" ).on ( "click", clickitemList );
			return false;
		};

		function clickitemList ( ) {
			var $that = angular.element( this );
			$ngModelCtrl.$setViewValue ( $that.text ( ) );

			$that.parent ( ).prepend ( $that ).off ( "click" );
			
			return false;
		};
	}

} ) ( );