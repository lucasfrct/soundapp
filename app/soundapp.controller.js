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
			primary: 220,
			secondary: 2.5,
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

			setData ( $condition, $buffer.primary, $buffer.secondary );
			setType ( $buffer.type );

			return false;
		};

		function setData ( $condition, $primary, $secondary ) {
			var $data = $that.data;

			switch ( $condition ) {
				case "V:A":
					$data.tension = $primary;
					$data.amperage = $secondary;
					$data.resistance = _e.resistance.ta ( $primary, $secondary );
					$data.power = _e.power.ta ( $primary, $secondary );
					$data.kv = _e.kv.tension ( $primary );
					$data.kva = _e.kva.ta ( $primary, $secondary );
					break;
				case "V:R":
					$data.tension = $primary;
					$data.amperage = _e.amperage.tr ( $primary, $secondary );
					$data.resistance = $secondary;
					$data.power = _e.power.tr ( $primary, $secondary );
					$data.kv = _e.kv.tension ( $primary );
					$data.kva = _e.kva.tr ( $primary, $secondary );
					break;
				case "V:W":
					$data.tension = $primary;
					$data.amperage = _e.amperage.tp ( $primary, $secondary );
					$data.resistance = _e.resistance.tp ( $primary, $secondary );
					$data.power = $secondary;
					$data.kv = _e.kv.tension ( $primary );
					$data.kva = _e.kva.power ( $secondary );
					break;
				case "V:KV":
					$data.tension = $primary;
					$data.amperage = "";
					$data.resistance = "";
					$data.power = "";
					$data.kv = _e.kv.tension ( $primary );
					$data.kva = "";
					break;
				case "V:KVA":
					$data.tension = $primary;
					$data.amperage = _e.amperage.tkva ( $primary, $secondary );
					$data.resistance = _e.resistance.tkva ( $primary, $secondary );
					$data.power = _e.power.kva ( $secondary );
					$data.kv = _e.kv.tension ( $primary );
					$data.kva = $secondary;
					break;
				case "A:V":
					$data.tension = $secondary;
					$data.amperage = $primary;
					$data.resistance = _e.resistance.ta ( $secondary, $primary );
					$data.power = _e.power.ta ( $secondary, $primary );
					$data.kv = _e.kv.tension ( $secondary );
					$data.kva = _e.kva.ta ( $secondary, $primary );
					break;
				case "A:R":
					$data.tension = _e.tension.ar ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = $secondary;
					$data.power = _e.power.ar ( $primary, $secondary );
					$data.kv = _e.kv.ar ( $primary, $secondary );
					$data.kva = _e.kva.ar ( $primary, $secondary );
					break;
				case "A:W":
					$data.tension = _e.tension.ap ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = _e.resistance.ap ( $primary, $secondary );
					$data.power = $secondary;
					$data.kv = _e.kv.ap ( $primary, $secondary );
					$data.kva = _e.kva.power ( $secondary );
					break;
				case "A:KV":
					$data.tension = _e.tension.kv ( $secondary );
					$data.amperage = $primary;
					$data.resistance = _e.resistance.ak ( $primary, $secondary );
					$data.power = _e.power.ak ( $primary, $secondary );
					$data.kv = $secondary;
					$data.kva = _e.kva.ak (  $primary, $secondary );
					break;
				case "A:KVA":
					$data.tension = _e.tession.akva ( $primary, $secondary );
					$data.amperage = $primary;
					$data.resistance = _e.reistance.akva ( $primary, $secondary );
					$data.power = _e.power.kva ( $secondary );
					$data.kv = _e.kv.akva ( $primary, $secondary );
					$data.kva = $secondary;
					break;
				case "R:V":
					$data.tension = $secondary;
					$data.amperage = _e.amperage.tr ( $secondary, $primary );
					$data.resistance = $primary;
					$data.power = _e.power.tr ( $secondary, $primary );
					$data.kv = _e.kv.tension ( $secondary );
					$data.kva = _e.kva.tr ( $secondary, $primary );
					break;
				case "R:A":
					$data.tension = _e.tension.ar ( $secondary, $primary );
					$data.amperage = $secondary;
					$data.resistance = $primary;
					$data.power = _e.power.ar ( $secondary, $primary );
					$data.kv = _e.kv.ar ( $secondary, $primary );
					$data.kva = _e.kva.ar ( $secondary, $primary );
					break;
				case "R:W":
					$data.tension = _e.tension.rp ( $primary, $secondary );
					$data.amperage = _e.amperage.rp ( $primary, $secondary );
					$data.resistance = $primary;
					$data.power = $secondary;
					$data.kv = _e.kv.rp ( $primary, $secondary );
					$data.kva = _e.kva.power ( $secondary );
					break;
				case "R:KV":
					$data.tension = _e.tension.kv ( $secondary );
					$data.amperage = _e.amperage.rk ( $primary, $secondary );
					$data.resistance = $primary;
					$data.power = _e.power.rk ( $primary, $secondary );
					$data.kv = $secondary;
					$data.kva = _r.kva.rk ( $primary, $secondary );
					break;
				case "R:KVA":
					$data.tension = _e.tension.rkva ( $primary, $secondary );
					$data.amperage = _e.amperage.rkva( $primary, $secondary );
					$data.resistance = $primary;
					$data.power = _e.power.kva ( $secondary );
					$data.kv = _e.kv.rkva ( $primary, $secondary );
					$data.kva = $secondary;
					break;
				case "W:V":
					$data.tension = $secondary;
					$data.amperage = _e.amperage.tp ( $secondary, $primary );
					$data.resistance = _e.resistance.tp ( $secondary, $primary ); 
					$data.power = $primary;
					$data.kv = _e.kv.tension ( $secondary );
					$data.kva = _e.kva.power ( $primary );
					break;
				case "W:A":
					$data.tension = _e.tension.ap ( $secondary, $primary );
					$data.amperage = $secondary;
					$data.resistance = _e.resistance.ap ( $secondary, $primary ); 
					$data.power = $primary;
					$data.kv = _e.kv.ap ( $secondary, $primary );
					$data.kva = _e.kva.power ( $primary );
					break;
				case "W:R":
					$data.tension = _e.tension.rp ( $secondary, $primary );
					$data.amperage = _e.amperage.rp ( $secondary, $primary );
					$data.resistance = $secondary;
					$data.power = $primary;
					$data.kv = _e.kv.rp ( $secondary, $primary );
					$data.kva = _e.kva.power ( $primary );
					break;
				case "W:KV":
					$data.tension = _e.tension.kv ( $secondary );
					$data.amperage = _e.amperage.pk ( $primary, $secondary );
					$data.resistance = _e.resistance.pk ( $primary, $secondary ); 
					$data.power = $primary;
					$data.kv = $secondary;
					$data.kva = _e.kva.power ( $primary );
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
					$data.tension = _e.tension.kv ( $primary );
					$data.amperage = $secondary;
					$data.resistance = _e.reisitance.ak ( $secondary, $primary ); 
					$data.power = _e.power.ak ( $secondary, $primary );
					$data.kv = $primary;
					$data.kva = _e.kva.ak ( $secondary, $primary );
					break;
				case "KV:R":
					$data.tension = _e.tension.kv ( $primary );
					$data.amperage = _e.amperage.rk ( $secondary, $primary );
					$data.resistance =  $secondary;
					$data.power = _e.power.rk ( $secondary, $primary );
					$data.kv = $primary;
					$data.kva = _e.kva.rk ( $secondary, $primary );
					break;
				case "KV:W":
					$data.tension = _e.tension.kv ( $primary );
					$data.amperage = _e.amperage.pk ( $secondary, $primary );
					$data.resistance = _e.resistance.pk ( $secondary, $primary );
					$data.power = $secondary;
					$data.kv = $primary;
					$data.kva = _e.kva.power ( $secondary );
					break;
				case "KV:KVA":
					$data.tension = _e.tension.kv ( $primary );
					$data.amperage = _e.amperage.kkva ( $primary, $secondary );
					$data.resistance = _e.resistance.kkva ( $primary, $secondary );
					$data.power = _e.power.kva ( $secondary );
					$data.kv = $primary;
					$data.kva = $secondary;
					break;
				case "KVA:V":
					$data.tension = $secondary;
					$data.amperage = _e.amperage.tkva ( $secondary, $primary );
					$data.resistance = _e.resistance.tkva ( $secondary, $primary );
					$data.power = _e.power.kva ( $primary );
					$data.kv = _e.kv.tension ( $secondary );
					$data.kva = $primary;
					break;
				case "KVA:A":
					$data.tension = _e.tension.akva ( $secondary, $primary );
					$data.amperage = $secondary;
					$data.resistance = _e.resistance.akva (  $secondary, $primary );
					$data.power = _e.power.kva ( $primary );
					$data.kv = _e.kv.akva ( $secondary, $primary );
					$data.kva = $primary;
					break;
				case "KVA:R":
					$data.tension = _e.tension.rkva ( $secondary, $primary );
					$data.amperage = _e.amperage.rkva ( $secondary, $primary );
					$data.resistance = $secondary;
					$data.power = _e.power.kva ( $primary );
					$data.kv = _e.kv.rkva ( $secondary, $primary );
					$data.kva = $primary;
					break;
				case "KVA:W":
					$data.tension = "";
					$data.amperage = "";
					$data.resistance = "";
					$data.power = $secondary;
					$data.kv = "";
					$data.kva = $primary;
					break;
				case "KVA:KV":
					$data.tension = _e.tension.kv ( $secondary );
					$data.amperage = _e.amperage.kkva ( $secondary, $primary );
					$data.resistance = _e.resistance.kkva ( $secondary, $primary );
					$data.power = _e.power.kva ( $primary );
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
					strategySet ( _e.nominalToRms );
					$that.data.tension = strategyParse ( $that.data.tension );
					$that.data.amperage = strategyParse ( $that.data.amperage );
					$that.data.resistance = strategyParse ( $that.data.resistance );
					$that.data.power = strategyParse ( $that.data.power );
					$that.data.kv = strategyParse ( $that.data.kv );
					$that.data.kva = strategyParse ( $that.data.kva );
					break;
				case "pico":
					strategySet ( _e.nominalToPico );
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
    			if ( $.isFunction( $fn ) ) {
    				$fn ( $newVal, $oldVal );
    			};
  			} );
		};

	};

} ) ( );