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
			primary: 220,
			secondary: 1,
			selectPrimary: "A",
			selectSecondary: "R",
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

			/*$that.data.tension = setTencion ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.amperage = setAmperage ( $condition, $buffer.primary, $buffer.secondary );
			/*$that.data.resistance = setResistance ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.power = setPower ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.kv = setKv ( $condition, $buffer.primary, $buffer.secondary );
			$that.data.kva = setKva ( $condition, $buffer.primary, $buffer.secondary );*/

			setData ( $condition, $buffer.primary, $buffer.secondary );

            //console.log ( "controller Observer Condition : " + $condition );
			console.log ( $that.data );
			return false;
		};

		function setTencion ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "V" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "V") {
				return $secondary;
			} else {
				return "";
			};

		};

		function setAmperage ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "A" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "A") {
				return $secondary;
			} else {
				return "";
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
			} else if ( $condition[ 0 ] == "V" ) {
				return ( $primary / 1000 )
			} else if ( $condition[ 1 ] == "V" ) {
				return ( $secondary / 1000 );
			} else {
				return ""
			};

		};

		function setKva ( $condition, $primary, $secondary ) {

			if ( $condition[ 0 ] == "KVA" ) {
				return $primary;
			} else if ( $condition[ 1 ] == "KVA") {
				return $secondary;
			};

		};

		function setData ( $condition, $primary, $secondary ) {
			var $data = $that.data;

			switch ( $condition.join ( ":" ) ) {
				case "V:A":
					$data.resistance = mathEletric.VAResistance ( $primary, $secondary );
					$data.power = mathEletric.VAPower ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VAKva ( $primary, $secondary );
					break;
				case "V:R":
					$data.amperage = mathEletric.VRAmperage ( $primary, $secondary );
					$data.power = mathEletric.VRPower ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VRKva ( $primary, $secondary );
					break;
				case "V:W":
					$data.amperage = mathEletric.VWAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.VWResistance ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VWKva ( $secondary );
					break;
				case "V:KV":
					$data.kv = mathEletric.VKv ( $primary );
					break;
				case "V:KVA":
					$data.amperage = mathEletric.VKvaAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.VKvaResistance ( $primary, $secondary );
					$data.power = mathEletric.VKvaPower ( $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					break;
				case "A:V":
					$data.resistance = mathEletric.VAResistance ( $secondary, $primary );
					$data.power = mathEletric.VAPower ( $secondary, $primary );
					$data.kv = mathEletric.VKv ( $secondary );
					$data.kva = mathEletric.VAKva ( $secondary,$primary );
					break;
				case "A:R":
					$data.tension = mathEletric.ARTension ( $primary, $secondary );
					$data.power = mathEletric.ARPower ( $primary, $secondary );
					break;

				default:
					"";			
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