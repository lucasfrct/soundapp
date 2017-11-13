( function ( ) {
	"use strict";
	
	angular
		.module ( "soundapp" )
		.directive ( "selectList", [ SelectList ] );

	function SelectList ( ) {
		return {
			restrict: "A",
			require: 'ngModel',
			link: linkSelect,
		};
	};

	var $NGMODEL = null;

	function linkSelect ( $scope, $element, $attr, $ngModelCtrl ) {
		$NGMODEL = $ngModelCtrl;	
		$element.one ( "click", clickItemList );
	};

	function clickItemList ( ) {
		angular
			.element( this )
			.children ( "> li" )
			.on ( "click", function ( ) {
				var $that = angular.element( this );
				$NGMODEL.$setViewValue ( $that.text ( ) );
				$NGMODEL.$render ( );
				$that.parent ( ).prepend ( $that ).off ( "click" );
				return false;
			} );
		return false;
	};

} ) ( );