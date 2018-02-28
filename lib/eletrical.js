var $eletrical = { };
( function ( ) {
	"use strict";

	$eletrical = $.extend ( $eletrical, {

		tension: {
			cr: __tensionCR,
			cp: __tensionCP,
			rp: __tensionRP,
		},

		current: {
			tr: __currentTR,
			tp: __currentTP,
			rp: __currentRP,
		},

		resistance: {
			tc: __resistanceTC,
			tp: __resistanceTP,
			cp: __resistanceCP
		},

		power: {
			tc: __powerTC,
			tr: __powerTR,
			cr: __powerCR,
		},

	} );

	function __precision ( $number = 0 ) {
		if ( $number !== 0 ) {
			return $number.toFixed ( 4 );
		} else {
			return $number;
		};
	};

	function __tensionCR( $current = 0, $resistance = 0 ) {
		return __precision ( $current * $resistance );
	};

	function __tensionCP ( $current = 0, $power = 0 ) {
		return __precision ( $power / $current );
	};

	function __tensionRP ( $resistance = 0, $power = 0 ) {
		return __precision ( Math.sqrt( ( $resistance * $power ) ) );
	};

	function __currentTR ( $tension = 0, $resistance = 0 ) {
		return __precision ( $tension / $resistance );
	};

	function __currentTP ( $tension = 0, $power = 0 ) {
		return __precision ( $power / $tension );
	};

	function __currentRP ( $resistance = 0, $power = 0 ) {
		return __precision ( Math.sqrt ( $power / $resistance ) );
	};

	function __resistanceTC ( $tension = 0, $current = 0 ) {
		return __precision ( $tension / $current );
	};

	function __resistanceTP ( $tension = 0, $power = 0 ) { 
		return __precision ( Math.pow( $tension, 2 ) / $power );
	};

	function __resistanceCP ( $current = 0, $power = 0 ) {
		return __precision ( $power / Math.pow( $current, 2 ) );
	};

	function __powerTC ( $tension = 0, $current = 0 ) {
		return __precision ( $tension * $current );
	};

	function __powerTR ( $tension = 0, $resistance = 0 ) {
		return __precision ( Math.pow ( $tension, 2 ) / $resistance );
	};

	function __powerCR ( $current = 0, $resistance = 0 ) {
		return __precision ( Math.pow ( $current, 2 ) * $resistance );
	};
 
} ) ( );

var _el = $eletrical;