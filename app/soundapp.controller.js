( function ( ) {
	"use strict";

	angular
	.module ( "soundapp" )
	.controller ( "soundappController", soundappController );

	function soundappController ( $scope ) {
		
		var $that = this;
		
		$that.title = "Elétrica";
		
		$that.data = {
			tension: null,
			amperage: null,
			resistance: null,
			power: null,
			kv: null,
			kva: null,
		};

		$that.buffer = {
			primary: "11",
			secondary: "22",
			selectPrimary: "V",
			selectSecondary: "A",
			type: "nominal",
		};

		observer ( "soundapp.buffer.primary", eventCalc );
		observer ( 'soundapp.buffer.selectPrimary', eventCalc );
		observer ( "soundapp.buffer.secondary", eventCalc );
		observer ( "soundapp.buffer.selectSecondary", eventCalc );
		observer ( "soundapp.buffer.type", eventCalc );

		function eventCalc ( $value ) {
			//console.log ( "controller Observer : " + $value );
			return false;
		};

		function verify ( $data ) {
			return  ( 
				$data.primary > 0 
				&& $data.primary < 0 
				&& $data.secondary > 0 
				&& $data.secondary > 0 
				) ? true : false
		};

		function observer ( $variable, $fn ) {
			$scope.$watch ( $variable, function ( $newVal, $oldVal ) {

    			if ( typeof $fn == "function" ) {
    				$fn ( $newVal, $oldVal );
    			};

    			//return $newVal;
  			} );
		};

	};

} ) ( );