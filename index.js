var rect = {
	perimeter:(x,y) => (2*(x+y)),
	area:(x,y) => (x*y)
}

function calRect(l,b) {
	console.log("The value to calculate l ="+ l + " b ="+b);

	if(l<=0 || b<=0)
	{
		console.log('The value of l and b should be greater than 0 l = ' +l + "and b = "+ b);
	}
	else{
		console.log("The perimeter of reactangle is "+rect.perimeter(l,b)+"\n"+ "and the area is "+rect.area(l,b));
	}
}

calRect(2,3);
calRect(6,5);
calRect(0,8);
calRect(1,-2);
