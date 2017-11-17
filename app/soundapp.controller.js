( function ( ) {
	"use strict";

	angular
	.module ( "soundapp" )
	.controller ( "soundappController", soundappController );

	function soundappController ( $scope ) {
		
		var $that = this;
		var $ALGORITM = null;
		
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
			primary: 1,
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

			setData ( $condition, $buffer.primary, $buffer.secondary );

			setType ( $buffer.type );

            //console.log ( "controller Observer Condition : " + $condition );
			console.log ( $that.data );
			return false;
		};

		function setData ( $condition, $primary, $secondary ) {
			var $data = $that.data;

			switch ( $condition ) {
				case "V:A":
					$data.tension = $primary;
					$data.amperage = $secondary;
					$data.resistance = mathEletric.VAResistance ( $primary, $secondary );
					$data.power = mathEletric.VAPower ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VAKva ( $primary, $secondary );
					break;
				case "V:R":
					$data.tension = $primary;
					$data.amperage = mathEletric.VRAmperage ( $primary, $secondary );
					$data.resistance = $secondary;
					$data.power = mathEletric.VRPower ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VRKva ( $primary, $secondary );
					break;
				case "V:W":
					$data.tension = $primary;
					$data.amperage = mathEletric.VWAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.VWResistance ( $primary, $secondary );
					$data.power = $secondary;
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = mathEletric.VWKva ( $secondary );
					break;
				case "V:KV":
					$data.tension = $primary;
					$data.amperage = "";
					$data.resistance = "";
					$data.power = "";
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = "";
					break;
				case "V:KVA":
					$data.tension = $primary;
					$data.amperage = mathEletric.VKvaAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.VKvaResistance ( $primary, $secondary );
					$data.power = mathEletric.VKvaPower ( $secondary );
					$data.kv = mathEletric.VKv ( $primary );
					$data.kva = $secondary;
					break;
				case "A:V":
					$data.tension = $secondary;
					$data.amperage = $primary;
					$data.resistance = mathEletric.VAResistance ( $secondary, $primary );
					$data.power = mathEletric.VAPower ( $secondary, $primary );
					$data.kv = mathEletric.VKv ( $secondary );
					$data.kva = mathEletric.VAKva ( $secondary, $primary );
					break;
				case "A:R":
					$data.tension = mathEletric.ARTension ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = $secondary;
					$data.power = mathEletric.ARPower ( $primary, $secondary );
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.ARKva ( $primary, $secondary );
					break;
				case "A:W":
					$data.tension = mathEletric.AWTension ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = mathEletric.AWResistance ( $primary, $secondary );
					$data.power = $secondary;
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.WKva ( $secondary );
					break;
				case "A:KV":
					$data.tension = mathEletric.KvV ( $secondary );
					$data.amperage = $primary;
					$data.resistance = mathEletric.VAResistance ( $data.tension, $primary );
					$data.power = mathEletric.VAPower ( $data.tension, $primary );
					$data.kv = $secondary;
					$data.kva = mathEletric.VAKva ( $data.tension, $primary );
					break;
				case "A:KVA":
					$data.tension = mathEletric.AKvaTension ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = mathEletric.AKvaResistance ( $primary, $secondary );
					$data.power = mathEletric.KvaW ( $secondary );
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = $secondary;
					break;
				case "R:V":
					$data.tension = $secondary;
					$data.amperage = mathEletric.VRAmperage ( $secondary, $primary );
					$data.resistance = $primary;
					$data.power = mathEletric.VRPower ( $secondary, $primary );
					$data.kv = mathEletric.VKv ( $data.tension  );
					$data.kva = mathEletric.VRKva ( $secondary, $primary );
					break;
				case "R:A":
					$data.tension = mathEletric.ARTension ( $secondary, $primary );
					$data.amperage = $secondary;
					$data.resistance = $primary;
					$data.power = mathEletric.ARPower ( $secondary, $primary );
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.ARKva ( $secondary, $primary );
					break;
				case "R:W":
					$data.tension = mathEletric.RWTension ( $primary, $secondary );
					$data.amperage = mathEletric.RWAmperage ( $primary, $secondary );
					$data.resistance = $primary;
					$data.power = $secondary;
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.WKva ( $secondary );
					break;
				case "R:KV":
					$data.tension = mathEletric.KvV ( $secondary );
					$data.amperage = mathEletric.VRAmperage ( $data.tension ,$primary );
					$data.resistance = $primary;
					$data.power = mathEletric.VRPower ( $data.tension, $primary );
					$data.kv = $secondary;
					$data.kva = mathEletric.VRKva ( $data.tension, $primary );
					break;
				case "R:KVA":
					$data.tension = mathEletric.RKvaTension ( $primary, $secondary );
					$data.amperage = mathEletric.RKvaAmperage ( $primary, $secondary );
					$data.resistance = $primary;
					$data.power = mathEletric.KvaW ( $secondary );
					$data.kv = mathEletric.VKv ( $data.tension);
					$data.kva = $secondary;
					break;
				case "W:V":
					$data.tension = $secondary;
					$data.amperage = mathEletric.VWAmperage ( $secondary, $primary );
					$data.resistance = mathEletric.VWResistance ( $secondary, $primary ); 
					$data.power = $primary;
					$data.kv = mathEletric.VKv ( $secondary );
					$data.kva = mathEletric.WKva( $primary );
					break;
				case "W:A":
					$data.tension = mathEletric.AWTension ( $secondary, $primary );
					$data.amperage = $secondary;
					$data.resistance = mathEletric.AWResistance ( $secondary, $primary ); 
					$data.power = $primary;
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.WKva ( $primary );
					break;
				case "W:R":
					$data.tension = mathEletric.RWTension ( $secondary, $primary );
					$data.amperage = mathEletric.RWAmperage ( $secondary, $primary );
					$data.resistance = $secondary;
					$data.power = $primary;
					$data.kv = mathEletric.VKv ( $data.tension );
					$data.kva = mathEletric.WKva ( $primary );
					break;
				case "W:KV":
					$data.tension = mathEletric.KvV ( $secondary );
					$data.amperage = mathEletric.VWAmperage ( $data.tension , $primary );
					$data.resistance = mathEletric.VWResistance ( $data.tension, $primary ); 
					$data.power = $primary;
					$data.kv = $secondary;
					$data.kva = mathEletric.WKva ( $primary );
					break;
				case "W:KVA":
					$data.tension = "";
					$data.amperage = "";
					$data.resistance = "";
					$data.power = $primary;
					$data.kv = "";
					$data.kva = $secondary;
					break;
				case "KV:V":
					$data.tension = $secondary;
					$data.amperage = "";
					$data.resistance = "";
					$data.power = "";
					$data.kv = $primary;
					$data.kva = "";					
				case "KV:A":
					$data.tension = mathEletric.KvV ( $primary );
					$data.amperage = $secondary;
					$data.resistance = mathEletric.VAResistance ( $data.tension, $secondary ); 
					$data.power = mathEletric.VAPower ( $data.tension, $secondary );
					$data.kv = $primary;
					$data.kva = mathEletric.VAKva ( $data.tension, $secondary );
					break;
				case "KV:R":
					$data.tension = mathEletric.KvV ( $primary );
					$data.amperage = mathEletric.VRAmperage ( $data.tension, $secondary );
					$data.resistance =  $secondary;
					$data.power = mathEletric.VRPower ( $data.tension, $secondary );
					$data.kv = $primary;
					$data.kva = mathEletric.VRKva ( $data.tension, $secondary );
					break;
				case "KV:W":
					$data.tension = mathEletric.KvV ( $primary );
					$data.amperage = mathEletric.VWAmperage ( $data.tension, $secondary );
					$data.resistance = mathEletric.VWResistance ( $data.tension, $secondary );
					$data.power = $secondary;
					$data.kv = $primary;
					$data.kva = mathEletric.WKva ( $secondary );
					break;
				case "KV:KVA":
					$data.tension = mathEletric.KvV ( $primary );
					$data.amperage = mathEletric.VKvaAmperage ( $data.tension, $secondary );
					$data.resistance = mathEletric.VKvaResistance ( $data.tension, $secondary );
					$data.power = mathEletric.KvaW ( $secondary );
					$data.kv = $primary;
					$data.kva = $secondary;
					break;
				case "KVA:V":
					$data.tension = $secondary;
					$data.amperage = mathEletric.KvaVAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.KvaVResistance ( $primary, $secondary );
					$data.power = mathEletric.KvaVPower ( $primary, $secondary );
					$data.kv = mathEletric.KvaVKv ( $primary, $secondary );
					$data.kva = $primary;
					break;
				case "KVA:A":
					$data.tension = mathEletric.KvaATension ( $primary, $secondary );
					$data.amperage = $secondary;
					$data.resistance = mathEletric.KvaAResistance ( $primary, $secondary );
					$data.power = mathEletric.KvaAPower ( $primary, $secondary );
					$data.kv = mathEletric.KvaAKv ( $primary, $secondary );
					$data.kva = $primary;
					break;
				case "KVA:R":
					$data.tension = mathEletric.KvaRTension ( $primary, $secondary );
					$data.amperage = mathEletric.KvaAAmperage ( $primary, $secondary );
					$data.resistance = $secondary;
					$data.power = mathEletric.KvaRPower ( $primary, $secondary );
					$data.kv = mathEletric.KvaRKv ( $primary, $secondary );
					$data.kva = $primary;
					break;
				case "KVA:W":
					$data.tension = mathEletric.KvaWTension ( $primary, $secondary );
					$data.amperage = mathEletric.KvaWAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.KvaWResistance ( $primary, $secondary );
					$data.power = $secondary;
					$data.kv = mathEletric.KvaWKv ( $primary, $secondary );
					$data.kva = $primary;
					break;
				case "KVA:KV":
					$data.tension = mathEletric.KvaKvTension ( $primary, $secondary );
					$data.amperage = mathEletric.KvaKvAmperage ( $primary, $secondary );
					$data.resistance = mathEletric.KvaKvResistance ( $primary, $secondary );
					$data.power = mathEletric.KvaKvPower ( $primary, $secondary );
					$data.kv = $secondary;
					$data.kva = $primary;
					break;
				default:
					"";			
			};
		};

		function setType ( $type ) {

			switch ( $type ) {
				case "nominal":
					break;
				case "rms":
					strategySet ( mathEletric.nominalToRms );
					$that.data.tension = strategyParse ( $that.data.tension );
					$that.data.amperage = strategyParse ( $that.data.amperage );
					$that.data.resistance = strategyParse ( $that.data.resistance );
					$that.data.power = strategyParse ( $that.data.power );
					$that.data.kv = strategyParse ( $that.data.kv );
					$that.data.kva = strategyParse ( $that.data.kva );
					break;
				case "pico":
					strategySet ( mathEletric.nominalToPico );
					$that.data.tension = strategyParse ( $that.data.tension );
					$that.data.amperage = strategyParse ( $that.data.amperage );
					$that.data.resistance = strategyParse ( $that.data.resistance );
					$that.data.power = strategyParse ( $that.data.power );
					$that.data.kv = strategyParse ( $that.data.kv );
					$that.data.kva = strategyParse ( $that.data.kva );
					break;
			};

		};

		
		function strategySet ( $algoritm ) {
			if ( $.isFunction ( $algoritm ) ) {
				$ALGORITM = $algoritm;
			};
		};

		function strategyParse ( $value ) {
			if ( $.isFunction ( $ALGORITM ) ) {
				return $ALGORITM ( $value );
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