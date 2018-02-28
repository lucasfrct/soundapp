
var $dom = { };
var $memory = { history: [ ], recent: [ ], number: [ ], concat: null };

( function ( ) {
	"use strict";

	$dom = $.extend( $dom, {
		key: __getKey,
		display: __setDisplay,
		tension: __setTension,
		amperage: __setAmperage,
		resistance: __setResistance,
		power: __setPower,
	} );


	function __getKey ( $fn = null ) {
		$(".teclado button[value]").on ( "click", function ( ) {
			if ( null != $fn ) {
				$fn ( $( this ).attr( "value" ) );
			}
		} );
	};	

	function __setDisplay ( $string = "" ) {
		$(".display").text ( $string );
	};

	function __setTension ( $string = "" ) {
		$(".result div[name='tension']").text ( $string+" V" );
	};

	function __setAmperage ( $string = "" ) {
		$(".result div[name='amperage']").text ( $string+" A" );
	};

	function __setResistance ( $string = "" ) {
		$(".result div[name='resistance']").text ( $string+" R" );
	};

	function __setPower ( $string = "" ) {
		$(".result div[name='power']").text ( $string+" W" );
	};

} ) ( );

$dom.key ( function ( $key ) {
	
	if ( !__clean ( $key ) ) {	
		$memory.recent.push ( $key );
	};

		
	$dom.display ( $memory.recent.join ( "" ) );

} );

function __clean ( $key ) {
	var $del = false;
	if ( "del" == $key && !$del ) {
		$memory.recent.pop ( );
		$del = true;
	};

	return $del;
};

function __checkBlock ( $key ) {
	return ( "&" == $key.trim ( ) ) ? true : false;
};