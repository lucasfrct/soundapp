( function ( ) {
	"use strict";

	angular
		.module ( "soundapp" )
		.directive ( "number", OnlyNumber );

	function OnlyNumber ( ) {
		 return {
	    	require: 'ngModel',
	        link: onlyNumbers,
	    };

	};

	function onlyNumbers ( $scope, $element, $attrs, $ngModelCtrl ) {

        $ngModelCtrl.$parsers.push ( setNumbers );

        function setNumbers ( $inputValue ) {
	        var $value = clearLettrs ( $inputValue );

	        if ( $value != $inputValue ) {
	            $ngModelCtrl.$setViewValue ( $value );
	            $ngModelCtrl.$render ( );
	        }

	        return $value;
	    };

    };

    

    function clearLettrs ( $value = null ) {
    	return ( $value ) ? $value.replace(/[^\d.-]/g,'') : null;
    };

} ) ( );