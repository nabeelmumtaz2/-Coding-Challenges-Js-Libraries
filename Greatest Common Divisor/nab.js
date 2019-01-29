<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.4/math.min.js"></script>
</head>
<body>
<script>
function gcd(arr) {
	return math.gcd(arr);
}

Test.assertEquals(gcd([0,0]), 0);
Test.assertEquals(gcd([20,24]), 4);
Test.assertEquals(gcd([80,12]), 4);
Test.assertEquals(gcd([75,15]), 15);
Test.assertEquals(gcd([72,15]), 3);
</script>
</body>
</html>
