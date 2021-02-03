var rect = require('./rectangle');

// var rect = {
// 	perimeter:(x,y) => (2*(x+y)),
// 	area:(x,y) => (x*y)
// }

function calRect(l,b) {
	console.log("The value to calculate l ="+ l + " b ="+b);
    rect(l,b,(err,rectangle) => {

		if(err)
		{
            console.log("ERROR : ",err.message);
		}
		else{
			console.log("The area of rectangle of dimension l =  "+l+  " and b = "+b+ " is "+rectangle.area());
			console.log("The primeter of rectangle of dimension l = "+l+  " and b = "+b+ " is "+rectangle.perimeter());
		}
	});
	console.log("this is after call to rect");
}

calRect(2,4);
calRect(3,5);
calRect(0,9);
calRect(1,-6);
