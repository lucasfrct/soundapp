
var $dom = { };
var $memory = { history: [ ], recent: [ ], number: [ ], units: [ ], index: 0 };

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

$dom.key ( function ( $key = "" ) {
	
	if ( !__keyDel ( $key ) ) {	
		$memory.recent.push ( $key );
	};
		
	$dom.display ( $memory.recent.join ( "" ) );
	__checkUnits ( $key );

} );

function __keyDel ( $key = "" ) {
	var $del = false;
	if ( "del" == $key && !$del ) {
		$memory.recent.pop ( );
		
		if ( ( $memory.recent.length - 1) >= $memory.index) {
			$memory.number.pop ( );
			$memory.units.pop ( );
		}

		$del = true;
	};

	return $del;
};

function __checkUnits ( $key = "" ) {
	switch ( $key ) {
		case "V":
			__captureNumber ( $memory.recent, $key );
			break;
		case "A":
			__captureNumber ( $memory.recent, $key );
			break;
	}
	console.log ( $memory.units );
	console.log ( $memory.number );
}

function __captureNumber ( $array = [ ], $key = "" ) {

	$array.map ( function ( $item, $index ) {
		if ( $item == $key && $index > $memory.index && $item ) {
			
			$memory.units.push ( $key );
			$memory.number.push ( $array.slice ( $memory.index, $index ).join ( "" ).replace(/[^0-9\.]+/g, '') );
			$memory.index = $index;

		};
	} );
}