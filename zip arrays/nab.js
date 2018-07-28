<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min.js"></script>
</head>
<body>
<script>
function zipArray(array1,array2) {
  return Sugar.Array.zip(array1,array2);
}
//Test Cases*
console.log(zipArray([1,2,3], [4,5,6,7,9]));
console.log(zipArray([1,2,3,5,6], [4,5,6,9]));
console.log(zipArray([1,2,3,3,2], [4,5,6,4]));
console.log(zipArray([1,2,3,5,6], [4,5,6,8]));

</script>
</body>
</html>
