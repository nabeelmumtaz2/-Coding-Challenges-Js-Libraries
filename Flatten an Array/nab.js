<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min.js"></script>
</head>
<body>
<script>
function flattenArray(array) {
  return Sugar.Array.flatten(array);
}
//Test Cases*
console.log(flattenArray([1, '2', [3, [4]]]));
console.log(flattenArray([1]));
console.log(flattenArray([1, 2, [3, [4, 5], 6], 7, 8]));
console.log(flattenArray([[1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' }]]]));

</script>
</body>
</html>
