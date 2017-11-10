( function ( ) {
	"use strict";
	
	angular
		.module ( "soundapp" )
		.directive ( "selectEletric", [ SelectEletric ] );

	function SelectEletric ( ) {
		return {
			restrict: "A",
			require: 'ngModel',
			scope: {
				selectEletric: "=",
				element: "@",
				ngModel: "="
			},

			link: function ( $scope, $element, $attr, $ngModelCtrl ) {
				
				$element.one ( "click", function ( ) {
					
					$element.children ( "> li" ).on ( "click", function ( ) {

						var $value = $( this ).text ( );
						
						$ngModelCtrl.$setViewValue ( $value );

						$( this ).parent ( ).prepend ( $( this ) );
						
						return false;
					} );
					
					return false;
				})
			},
		}
	};

} ) ( );