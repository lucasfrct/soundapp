var mathEletric = { };

( function ( ) {
	"use strict";

	var $FACTOR = 0.6;
	var $DECIMAL = 2;
	var $DEDUCEKVA = ( 1000 * $FACTOR );

	mathEletric = $.extend ( mathEletric, {
		VKv: __parseTensionToKv,
		KvV: __parseKvToTension,
		kvaW: __parseKvaToPower,
		WKva: __parsePowerToKva,

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

		nominalToRms: __parseNominalToRMS,
		nominalToPico: __parseNominalToPico,

		// t, a, r, p, k, kva,
		tension: {
			ar: __tensionAR,
			ap: __tensionAP,
			kv: __parseTensionToKv,
			aKva: __tensionAKva,
			rp: __tensionRP,
			rKva: __tensionAKva,
		},

		// t, a, r, p, k, kva,
		amperage: {
			tr: __amperageTR,
			tp: __amperageTP,
			tkva: __amperageTKva,
			rp: __amperageRP,
			rk: __amperageRK,
			rkva: __amperageRKva,
			pk: __amperagePK,
		},

		// t, a, r, p, k, kva,
		resistance: {
			ta: __resistanceTA,
			tp: __resistanceTP,
			tkva: __resistanceTKva,
			/*ap: 
			ak:
			akva:
			pk:*/
		},
	} );

	function __parseTensionToKv ( $tension ) {
		return ( Number ( $tension ) / 1000 ).toFixed ( $DECIMAL );
	};

	function __parseKvToTension ( $kv ) {
		return ( Number ( $kv ) * 1000 ).toFixed ( $DECIMAL );
	};

	function __parseKvaToPower ( $kva ) {
		return ( Number ( $kva ) * $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __parsePowerToKva ( $power ) {
		return ( Number ( $power ) / $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __parseNominalToRMS ( $nominal ) {
		return ( Number ( $nominal ) / Math.sqrt ( 2 ) ).toFixed ( $DECIMAL );
	};

	function __parseNominalToPico ( $nominal ) {
		return ( Number ( $nominal ) * Math.sqrt ( 2 ) ).toFixed ( $DECIMAL );
	};

	function __tensionAR ( $amperage, $resistance ) {
		return ( Number ( $amperage ) * Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __tensionAP ( $amperage, $power ) {
		return ( Number ( $power ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __tensionAKva ( $amperage, $kva ) {
		//return ( __tensionAP ( $amperage, __parseKvaToPower( $kva ) );
	};

	function __tensionRP ( $resistance, $power ) {
		return ( Math.sqrt ( Number ( $resistance ) * Number ( $power ) ) ) .toFixed ( $DECIMAL );
	};

	function __tensionRKva ( $resistance, $kva ) {
		return ( __tensionRP ( $resistance, __parseKvaToPower ( $kva ) ) ).toFixed ( $DECIMAL )
	};

	function __amperageTR ( $tension, $resistance ) {
		return ( Number ( $tension ) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __amperageTP ( $tension, $power ) {
		return ( Number ( $power ) / Number ( $tension) ).toFixed ( $DECIMAL );
	};

	function __amperageTKva ( $tension, $kva ) {
		return ( __amperageTP ( $tension, __parseKvaToPower ( $kva ) ) ).toFixed ( $DECIMAL );
	};

	function __amperageRP ( $resistance, $power ) {
		return Math.sqrt ( Number ( $power ) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __amperageRK ( $resistance, $kv ) {
		return ( __amperageTR ( parseKvToTension ( $tension ), $resistance ) ).toFixed ( $DECIMAL );
	};

	function __amperageRKva ( $resistance, $kva ) {
		return ( __amperageRP ( $resistance, parseKvaToPower ( $kva ) ) ).toFixed ( $DECIMAL );
	};

	function __amperagePK ( $power, $kv ) {
		return ( __amperageTP ( __parseKvToTension ( $kv ), $power ) ).toFixed ( $DECIMAL );
	};

	function __resistanceTA ( $tension, $amperage ) {
		return ( Number ( $tension ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __resistanceTP ( $tension, $power ) {
		return ( Math.pow ( Number ( $tension ), 2 ) / Number ( $power ) ).toFixed ( $DECIMAL );
	};

	function __resistanceTKva ( $tension, $kva ) {
		return ( __resistanceTP ( $tension ), __parseKvaToPower ( $kva ) ).toFixed ( $DECIMAL );
	};

	function __resistanceAP ( $amperage, $power ) {
		return ( Number ( $power ) / Math.sqrt ( Number ( $amperage ) ) ).toFixed ( $DECIMAL );
	};

	function __resistanceAKva ( $amperage, $kva ) {
		return __resistanceAP ( $amperage, __parseKvaToPower ( $kva ) );
	};


















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
		return ( __thirdTencion ( $resistance, ( Number ( $kva ) * $DEDUCEKVA ) ) ).toFixed ( $DECIMAL );
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
		return ( __fourthAmperage ( $resistance, ( Number ( $kva ) * $DEDUCEKVA ) ) ).toFixed ( $DECIMAL );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryResistance ( $tension, $amperage ) {
		return ( Number ( $tension ) / Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __secondaryResistance ( $tension, $power ) {
		return ( Math.pow ( Number ( $tension ), 2 ) / Number ( $power ) ).toFixed ( $DECIMAL );
	};

	function __thirdResistance ( $tension, $kva ) {
		return ( __secondaryResistance ( $tension, ( Number ( $kva ) * $DEDUCEKVA ) ) ).toFixed ( $DECIMAL );
	};

	function __fourthResistance ( $amperage, $power ) {
		return ( Number ( $power ) / Math.sqrt ( Number ( $amperage ) ) );
	};

	function __fifthResistance ( $amperage, $kva ) {
		return ( __fourthResistance ( $amperage, ( Number ( $kva ) * $DEDUCEKVA ) ) ).toFixed ( $DECIMAL );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryPower ( $tension, $amperage ) {
		return ( Number ( $tension ) * Number ( $amperage ) ).toFixed ( $DECIMAL );
	};

	function __secondaryPower ( $tension, $resistance ) {
		return ( Math.pow ( Number ( $tension ), 2) / Number ( $resistance ) ).toFixed ( $DECIMAL );
	};

	function __thirdPower ( $kva ) {
		return ( Number ( $kva ) * $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __fourthPower ( $amperage, $resistance ) {
		return ( Number (  $resistance ) / Math.pow ( Number ( $amperage ), 2 ) ).toFixed ( $DECIMAL );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryKva ( $power ) {
		return ( Number ( $power ) / $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __secondaryKva ( $tension, $amperage ) {
		return ( __primaryPower ( $tension, $amperage ) / $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __thirdKva ( $tension, $resistance ) {
		return ( __thirdPower ( $tension, $resistance ) / $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

	function __fourthKva ( $amperage, $resistance ) {
		return ( __secondaryPower ( $amperage, $resistance ) / $DEDUCEKVA ).toFixed ( $DECIMAL );
	};

} ) ( );