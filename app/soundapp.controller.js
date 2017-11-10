( function ( ) {
	"use strict";

	angular
	.module ( "soundapp" )
	.controller ( "soundappController", soundappController );

	function soundappController (  ) {
		
		this.title = "Elétrica";
		
		this.data = {
			volts:[],
			amperes: [],
			ohms: [],
			watts: [],
			kV: [],
			KVA: [],
		};

		this.buffer = {
			primary: 0,
			secondary: 0,
			selectPrimary: "V",
			selectSecondary: "A",
			type: "nominal",
		};

		this.verify = function ( $data ) {
			return  ( 
				$data.primary > 0 
				&& $data.primary < 0 
				&& $data.secondary > 0 
				&& $data.secondary > 0 
				) ? true : false
		};
	};

} ) ( );