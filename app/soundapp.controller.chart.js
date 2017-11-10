/*setTimeout ( function ( ) { 

var $data = [ ];

for ( var $i = 1; $i <= 10; $i++ ) {
	$data.push ( { label: "apple",  y: $i  } );
};

console.log ( $data );


var chart = new CanvasJS.Chart ( 
	"chartContainer", 
	{
		theme: "light2", // "light2", "dark1", "dark2"
		animationEnabled: false, // change to true		
		title:{
			text: "Basic Column Chart"
		},
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: $data, /*[
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]*
		}
		]
	}
);


chart.render();

}, 2000 );*/