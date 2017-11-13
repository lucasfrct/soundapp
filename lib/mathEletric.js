var mathEletric = { };

( function ( ) {
	"use strict";

	var $FACTOR = 0.6;

	mathEletric = $.extend ( mathEletric, {
		tension: __tension,
		ARTension : __primaryTension,
	} );

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __tension ( $amperage = 0, $resistance = 0, $power = 0, $kv = 0 , $kva = 0 ) {

	};

	function __amperage ( $tension = 0, $resistance = 0, $power = 0, $kv = 0 , $kva = 0  ) {

	};

	function __resistance ( $tension = 0, $amperage = 0, $power = 0, $kv = 0 , $kva = 0  ) {

	};

	function __power ( $tension = 0, $amperage = 0, $resistance = 0, $kv = 0 , $kva = 0  ) {

	};

	function __kv ( $tension = 0, $amperage = 0, $resitance = 0, $power = 0 , $kva = 0  ) {

	};

	function __kva ( $tension = 0, $amperage = 0, $resistance = 0, $power = 0 , $kv = 0  ) {

	};

	function reduceKva ( ) { 
		return ( 1000 * $FACTOR );
	};

	function parsekv ( $tension ) {
		return ( Number ( $tension ) / 1000 );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryTension ( $amperage, $resistance ) {
		return ( Number ( $amperage ) * Number ( $resistance ) );
	};

	function __secondaryTension ( $amperage, $power ) {
		return ( Number ( $power ) / Number ( $amperage ) );
	};

	function __thirdTencion ( $amperage, $kva ) {
		return ( ( 1000 * Number ( $kva ) ) / Number ( $amperage ) );
	};

	function __fourthTension ( $resistance, $power ) {
		return Math.sqrt ( Number ( $resistance ) * Number ( $power ) );
	};

	function __fifthTension ( $resistance, $kva ) {
		return ( __thirdTencion ( $resistance, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryAmperage ( $tension, $resistance ) {
		return ( Number ( $tension ) / Number ( $resistance ) );
	};

	function __secondaryAmperage ( $tension, $power ) {
		return ( Number ( $power ) / Number ( $tension) );
	};

	function __thirdAmperage ( $tension, $kva ) {
		return ( ( 1000 * Number ( $kva ) ) /Number ( $tension ) );
	};

	function __fourthAmperage ( $resistance, $power ) {
		return Math.sqrt ( Number ( $power ) / Number ( $resistance ) );
	};

	function __fifthAmperage ( $resistance, $kva ) {
		return ( __fourthAmperage ( $resistance, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryResistance ( $tension, $amperage ) {
		return ( Number ( $tension ) / Number ( $amperage ) );
	};

	function __secondaryResistance ( $tension, $power ) {
		return ( Math.pow ( Number ( $tension ), 2 ) / Number ( $power ) );
	};

	function __thirdResistance ( $tension, $kva ) {
		return ( __secondaryResistance ( $tension, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	function __fourthResistance ( $amperage, $power ) {
		return ( Number ( $power ) / Math.sqrt ( Number ( $amperage ) ) );
	};

	function __fifthResistance ( $amperage, $kva ) {
		return ( __fourthResistance ( $amperage, ( Number ( $kva ) * reduceKva ( ) ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryPower ( $tension, $amperage ) {
		return ( Number ( $tension ) * Number ( $amperage ) );
	};

	function __secondaryPower ( $tension, $resistance ) {
		return ( Math.pow ( Number ( $tension ), 2) / Number ( $resistance ) );
	};

	function __thirdPower ( $kva ) {
		return ( Number ( $kva ) * reduceKva ( ) );
	};

	function __fourthPower ( $amperage, $resistance ) {
		return ( Number (  $resistance ) / Math.pow ( Number ( $amperage ), 2) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryKva ( $power ) {
		return ( Number ( $power ) / reduceKva ( ) );
	};

	function __secondaryKva ( $tension, $amperage ) {
		return ( __primaryPower ( $tension, $amperage ) / reduceKva ( ) );
	};

	function __thirdKva ( $tension, $resistance ) {
		return ( __thirdPower ( $tension, $resistance ) / reduceKva ( ) );
	};

	function __fourthKva ( $amperage, $resistance ) {
		return ( __secondaryPower ( $amperage, $resistance ) / reduceKva ( ) );
	};

	function parseNominalToRMS ( $nominal ) {
		return ( Number ( $nominal ) / Math.sqrt ( 2 ) );
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