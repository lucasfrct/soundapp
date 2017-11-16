var mathEletric = { };

( function ( ) {
	"use strict";

	var $FACTOR = 0.6;
	var $DECIMAL = 2;

	mathEletric = $.extend ( mathEletric, {
		VKv: parsekv,
		WKva: __primaryKva,
		KvV: reduceKv,
		kvaW: __thirdPower,

		VAResistance: __primaryResistance,
		VAPower: __primaryPower,
		VAKva: __secondaryKva,

		VRAmperage: __primaryAmperage,
		VRPower: __secondaryPower,
		VRKva: __thirdKva,

		VWAmperage: __secondaryAmperage,
		VWResistance: __secondaryResistance,
		VWKva: __primaryKva,

		VKvaAmperage: __thirdAmperage,
		VKvaResistance: __thirdResistance,
		VKvaPower: __thirdPower,
		
		ARTension: __primaryTension,
		ARPower: __fourthPower,
		ARKva: __fourthKva,

		AWTension: __secondaryTension,
		AWResistance: __fourthResistance,

		AKvaTension: __thirdTencion,
		AKvaResistance: __fifthResistance,

		RWTension: __fourthTension,
		RWAmperage: __fourthAmperage,

		RKvaTention: __fifthTension,
		RKvaAmperage: __fifthAmperage,

		nominalToRms: parseNominalToRMS,
		nominalToPico: parseRmsToPico,
	} );

	function reduceKva ( ) { 
		return ( 1000 * $FACTOR ).toFixed ( $DECIMAL );
	};

	function parsekv ( $tension ) {
		return ( Number ( $tension ) / 1000 ).toFixed ( $DECIMAL );
	};

	function reduceKv ( $kv ) {
		return ( Number ( $kv ) * 1000 ).toFixed ( $DECIMAL );
	}

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryTension ( $amperage, $resistance ) {
		return ( Number ( $amperage ) * Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __secondaryTension ( $amperage, $power ) {
		return ( Number ( $power ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __thirdTencion ( $amperage, $kva ) {
		return ( ( 1000 * Number ( $kva ) ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __fourthTension ( $resistance, $power ) {
		return ( Math.sqrt ( Number ( $resistance ) * Number ( $power ) ) ) .toFixed ( $DECIMAL );
	};

	function __fifthTension ( $resistance, $kva ) {
		return ( __thirdTencion ( $resistance, ( Number ( $kva ) * reduceKva ( ) ) ) ).toFixed ( $DECIMAL );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryAmperage ( $tension, $resistance ) {
		return ( Number ( $tension ) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __secondaryAmperage ( $tension, $power ) {
		return ( Number ( $power ) / Number ( $tension) ).toFixed ( $DECIMAL );
	};

	function __thirdAmperage ( $tension, $kva ) {
		return ( ( 1000 * Number ( $kva ) ) /Number ( $tension ) ).toFixed ( $DECIMAL );
	};

	function __fourthAmperage ( $resistance, $power ) {
		return Math.sqrt ( Number ( $power ) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __fifthAmperage ( $resistance, $kva ) {
		return ( __fourthAmperage ( $resistance, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryResistance ( $tension, $amperage ) {
		return ( Number ( $tension ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __secondaryResistance ( $tension, $power ) {
		return ( Math.pow ( Number ( $tension ), 2 ) / Number ( $power ) );
	};

	function __thirdResistance ( $tension, $kva ) {
		return ( __secondaryResistance ( $tension, ( Number ( $kva ) * reduceKva ( ) ) ) ).toFixed ( $DECIMAL );
	};

	function __fourthResistance ( $amperage, $power ) {
		return ( Number ( $power ) / Math.sqrt ( Number ( $amperage ) ) ).toFixed ( $DECIMAL );
	};

	function __fifthResistance ( $amperage, $kva ) {
		return ( __fourthResistance ( $amperage, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryPower ( $tension, $amperage ) {
		return ( Number ( $tension ) * Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __secondaryPower ( $tension, $resistance ) {
		return ( Math.pow ( Number ( $tension ), 2) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __thirdPower ( $kva ) {
		return ( Number ( $kva ) * reduceKva ( ) ).toFixed ( $DECIMAL );
	};

	function __fourthPower ( $amperage, $resistance ) {
		return ( Number (  $resistance ) / Math.pow ( Number ( $amperage ), 2 ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryKva ( $power ) {
		return ( Number ( $power ) / reduceKva ( ) ).toFixed ( $DECIMAL );
	};

	function __secondaryKva ( $tension, $amperage ) {
		return ( __primaryPower ( $tension, $amperage ) / reduceKva ( ) ).toFixed ( $DECIMAL );
	};

	function __thirdKva ( $tension, $resistance ) {
		return ( __thirdPower ( $tension, $resistance ) / reduceKva ( ) ).toFixed ( $DECIMAL );
	};

	function __fourthKva ( $amperage, $resistance ) {
		return ( __secondaryPower ( $amperage, $resistance ) / reduceKva ( ) ).toFixed ( $DECIMAL );
	};

	function parseNominalToRMS ( $nominal ) {
		return ( Number ( $nominal ) / Math.sqrt ( 2 ) ).toFixed ( $DECIMAL );
	};

	function parseNominalToPico ( $nominal ) {
		return ( Number ( $nominal ) * Math.sqrt ( 2 ) );
	};

	function parseRmsToNominal ( $rms ) {
		retrun ( Number ( $rms ) * Math.sqrt ( 2 ) );
	};

	function parseRmsToPico ( $rms ) {
		return ( Number ( $rms ) * 2 );
	};

	function parsePicoToRms ( $pico ) {
		return ( Number ( $pico ) / 2 );
	};

	function parsePicoToNominal ( $pico ) {
		return ( Number ( $pico ) / Math.sqrt ( 2 ) );
	};

} ) ( );