var eletricalMath = { };
console.log ( "Init eletricaMath.js" );
( function ( ) {
	"use strict";

	eletricalMath.option = {
		precision: 4,
		apparentPoer: true,
	};

	/*Nme das funções são baseados nos dados em que ela retorna*/
	/*200V 17KW ? A*/

	eletricalMath.dc = mathDirectCurrent;
	eletricalMath.ac = mathAlternatingCurrent;

	// standad tension in V and Power Real in W
	function mathDirectCurrent ( $tension = 110, $power = 1000 ) {
		return Number( $power / $tension ).toFixed ( eletricalMath.option.precision );
	};

	// standad tensionj in V and power Aparent in VA
	function mathAlternatingCurrent ( $tension = 110, $powerVA = 1000 ) {
		return Number( $powerVA / $tension ).toFixed ( eletricalMath.option.precision );
	};


} ) ( );

$.eletrical = eletricalMath;

$el = $.eletrical.dc ( 220, 1000 );
console.log ( $el );