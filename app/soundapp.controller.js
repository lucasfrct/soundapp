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
			primary: "",
			secondary: "",
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
			var $buffer = $that.buffer;
			var $condition = $buffer.selectPrimary + ":" + $buffer.selectSecondary;
			$condition = $condition.split ( ':' );

			$that.data.tension = setTencion ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.amperage = setAmperage ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.resistance = setResistance ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.power = setPower ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.kv = setKv ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.kva = setKva ( $condition, $buffer.primary, $buffer.secondary );

			console.log ( "controller Observer Condition : " + $condition );
			return false;
		};

		function setTencion ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "V" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "V") {
				return $secondary;
			};

		};

		function setAmperage ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "A" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "A") {
				return $secondary;
			};

		};

		function setResistance ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "R" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "R") {
				return $secondary;
			};

		};

		function setPower ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "W" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "W") {
				return $secondary;
			};

		};

		function setKv ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "KV" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "KV") {
				return $secondary;
			};

		};

		function setKva ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "KVA" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "KVA") {
				return $secondary;
			};

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