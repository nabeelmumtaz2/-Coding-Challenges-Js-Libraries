<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.js"></script>
<script>
function pastDaysAgo(date) {

   return is.past(date);
}
console.log(pastDaysAgo(new Date(2017, 1, 1)));
console.log(pastDaysAgo(new Date(1950, 6, 8)));
console.log(pastDaysAgo(new Date(1965, 3, 15)));
console.log(pastDaysAgo(new Date(2025, 4, 24)));
console.log(pastDaysAgo(new Date(1965, 3, 15)));
console.log(pastDaysAgo(new Date(2015, 5, 17)));

</script>
</head>
<body>
</body>
</html>
