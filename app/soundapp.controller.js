( function ( ) {
	"use strict";

	angular
	.module ( "soundapp" )
	.controller ( "soundappController", soundappController );

	function soundappController ( $scope ) {
		
		var $that = this;
		
		$that.title = "Elétrica";
		
		$that.data = {
			volts:[],
			amperes: [],
			ohms: [],
			watts: [],
			kV: [],
			KVA: [],
		};

		$that.buffer = {
			primary: 0,
			secondary: 0,
			selectPrimary: "V",
			selectSecondary: "A",
			type: "nominal",
		};

		observer ( "soundapp.buffer.primary", $that.eventCalc );
		observer ( 'soundapp.buffer.selectPrimary', $that.eventCalc );
		observer ( "soundapp.buffer.secondary", $that.eventCalc );
		observer ( "soundapp.buffer.selectSecondary", $that.eventCalc );
		observer ( "soundapp.buffer.type", $that.eventCalc );

		function eventCalc ( $value ) {
			console.log ( "evento calc:" + $value );
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
    			}
    			
  			});
		};

	};

} ) ( );