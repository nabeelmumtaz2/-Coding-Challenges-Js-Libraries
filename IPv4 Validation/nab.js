<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.js"></script>
<script>
function isValidIP(str) {
   return is.ipv4(str);
}
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP("12.34.56 .1"));
console.log(isValidIP("12.34.56.-1"));
console.log(isValidIP("123.045.067.089"));
console.log(isValidIP("192.168.1.1"));
console.log(isValidIP("192.168.1.1"));
console.log(isValidIP("192.168.1.1"));
console.log(isValidIP("0.232.47.227"));
console.log(isValidIP("1e0.1e0.1e0.1e0"));

// True, if the address is a valid IPv4, otherwise false.
</script>
</head>
<body>
</body>
</html>
