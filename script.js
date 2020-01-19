var array = [12,15,18,21, 24, 27,30,33];
var length = array.length;
letsStart ();
function letsStart () {
	var a = prompt("Введите число");
	for (var i = 0; i < length; i++) {
		if (a == array[i]) {
			a = array[i];
			var b1 = a;
			console.log(b1);
			if (b1 >= 21) {
				var b = b1 * b1 / 2;
				alert(b);
				console.log(b);
				var c = b * 21 / 4;
				console.log(c)
				alert(c);
				alert("WIN")
			} else {
				var d = b1 / 3;
				console.log(d)
				if (d >= 5) {
					var e = d * 10;
					var f = e * 21 / 4;
					console.log(f);
					alert(f);
					alert("WIN")
				} else {
					var g = (d * 10 - 8) / 2;
					console.log(g);
					if (g >= 11) {
						var h = g * 10;
						var h1 = h * 21 / 4;
						console.log(h1);
						alert(h1);
						alert("WIN")
					}
					else {
						alert("Loose");
						var q = confirm("Do you want to restart?");
						if (q == true) {
							letsStart()
						}
					}
				}
			}
		}
	}
	var q = confirm ("Do you want to restart?");
	if (q==true) {
		letsStart ()
	}
}



