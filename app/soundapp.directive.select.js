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
			link: linkSelect,
			//controller: linkSelect,
		};
	};

	function linkSelect ( $scope, $element, $attr, $ngModelCtrl ) {

		var $value = $scope.selectList;
		var $select = $attr.selectList;



		//selectChildren ( $element, $value );
		clickChildren ( $element );
		//console.log ( "select : " + $value );
		//console.log ( "select : " +  );
		
	};

	function selectChildren ( $element, $value ) {
		$( $element.children ( " > *" ) ).filter ( function ( ) {
			if ( $( this ).text ( ) == $value  ) {
				$element.prepend ( this );
			};
		} );
	};

	function clickChildren ( $element ) {
		$element
			.children ( "> *" )
			.on ( "click", function ( ) {
				var $that = angular.element( this );
				$that.parent ( ).prepend ( $that );

				var $value = $that.text ( );

				setParent ( $element, $value );



				return false;
			} );
		return false;
	};

	function setParent ( $element, $value ) {
		$element.attr ( "value", $value );
	};


} ) ( );