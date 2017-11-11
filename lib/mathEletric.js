var mathEletric = { };

( function ( ) {
	"use strict";

	mathEletric = $.extend ( mathEletric, {
		tension: __tension,
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

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryTension ( $amperage, $resistance ) {
		return ( Number ( $amperage ) * Number ( $resistance ) );
	};

	function __secondaryTension ( $amperage, $power ) {
		return ( Number ( $power ) / Number ( $amperage ) );
	};

	function __thirdTencion ( $resistance, $power ) {
		return Math.sqrt ( Number ( $resistance ) * Number ( $power ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryAmperage ( $tension, $resistance ) {
		return ( Number ( $tension ) / Number ( $resistance ) );
	};

	function __secondaryAmperage ( $tension, $power ) {
		return ( Number ( $power ) / Number ( $tension) );
	};

	function __thirdAmperage ( $resistance, $power ) {
		return Math.sqrt ( Number ( $power ) / Number ( $resistance ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryResistance ( $tension, $amperage ) {
		return ( Number ( $tension ) / Number ( $amperage ) );
	};

	function __secondaryResistance ( $tension, $power ) {
		return ( Math.pow ( Number ( $tension ), 2 ) / Number ( $power ) );
	};

	function __thirdResistance ( $amperage, $power ) {
		return ( Number ( $power ) / Math.sqrt ( Number ( $amperage ) ) );
	};

	// $tension, $amperage, $resistance, $power, $kv, $kva
	function __primaryPower ( $tension, $amperage ) {
		return ( Number ( $tension ) * Number ( $amperage ) );
	};

	function __secondaryPower ( $amperage, $resistance ) {
		return ( Number (  $resistance ) / Math.pow ( Number ( $amperage ), 2) );
	};

	function __thirdPower ( $tension, $resistance ) {
		return ( Math.pow ( Number ( $tension ), 2) / Number ( $resistance ) );
	};


} ) ( );